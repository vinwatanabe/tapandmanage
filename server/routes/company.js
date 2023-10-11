const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Company = require('../model/Company');
const Auth = require('../middleware/authMiddleware');

const router = express.Router();

// @route   POST /company/register
// @desc    Register a new company
// @access  Public
router.post('/register', async (req, res) => {
	let company = req.body.email;
	let companyExist = await Company.findOne({ email: company });

	if (companyExist) {
		res.status(400).json({ msg: 'Company already exists' });
	} else {
		try {
			const { companyName, email, password } = req.body;

			company = new Company({
				companyName: companyName,
				email: email,
				password: password,
			});

			const salt = await bcrypt.genSalt(10);
			company.password = await bcrypt.hash(company.password, salt);

			await company
				.save()
				.then((response) => {
					const payload = {
						company: {
							id: response._id,
						},
					};

					jwt.sign(
						payload,
						process.env.JWT_SECRET,
						{ expiresIn: '2 days' },
						(error, token) => {
							if (error) {
								console.error(error.message);
								res.status(500).json({ msg: 'Error generating token' });
							} else {
								res.json({ token });
							}
						}
					);
				})
				.catch((error) => {
					throw error;
					res.status(500).json({ msg: 'Error: Company not saved' });
				});
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ msg: 'Server error' });
		}
	}
});

// @route   DELETE /company/delete
// @desc    Delete company
// @access  Private
router.delete('/delete', Auth, async (req, res) => {
	try {
		await Company.findByIdAndDelete(req.company.id);
		res.json({ msg: 'Company deleted' });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

module.exports = router;
