const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Company = require('../model/Company');
const Group = require('../model/Group');
const Item = require('../model/Item');
const Notification = require('../model/Notification');
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
			let { firstName, lastName, company, position, email, password } =
				req.body;

			company = new Company({
				firstName: firstName,
				lastName: lastName,
				company: company,
				position: position,
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

// @route   PUT /company/edit/:id
// @desc    Edit a company information
// @access  Private
router.put('/edit/:id', Auth, async (req, res) => {
	const { firstName, lastName, company, position, email, password, groups } =
		req.body;

	if (req.params.id === req.company.id) {
		try {
			let companyData = await Company.findById(req.params.id);

			const companyInfo = {
				firstName: firstName,
				lastName: lastName,
				company: company,
				position: position,
				email: email,
				password: password,
				groups: groups,
			};

			if (companyInfo.password === undefined || companyInfo.password === '') {
				companyInfo.password = companyData.password;
			} else {
				const salt = await bcrypt.genSalt(10);
				companyInfo.password = await bcrypt.hash(companyInfo.password, salt);
			}

			const savedCompany = await Company.findByIdAndUpdate(
				req.params.id,
				companyInfo,
				{ new: true }
			).catch((error) => {
				console.error(error.message);
				res.status(500).json({ msg: 'Error editing company' });
			});

			await savedCompany
				.save()
				.then((response) => {
					res.json(response);
				})
				.catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error saving company' });
				});
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ msg: 'Server error' });
		}
	} else {
		res.status(401).json({ msg: 'Unauthorized action' });
	}
});

// @route   DELETE /company/delete
// @desc    Delete company
// @access  Private
router.delete('/delete', Auth, async (req, res) => {
	try {
		await Item.deleteMany({ company: req.company.id });
		await Group.deleteMany({ company: req.company.id });
		await Notification.deleteMany({ company: req.company.id });
		await Company.findByIdAndDelete(req.company.id);
		res.json({ msg: 'Company deleted' });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

module.exports = router;
