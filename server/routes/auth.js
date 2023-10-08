const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();
const Auth = require('../Middleware/authMiddleware');
const Company = require('../model/Company');

// @route   POST /auth/login
// @desc    Authenticate company and get token
// @access  Public
router.post('/login', async (req, res) => {
	const { email, password } = req.body;

	const emailExist = await Company.findOne({ email: email });

	if (!emailExist) {
		res.status(401).json({ msg: 'Invalid email' });
	} else {
		const company = emailExist;

		const isPasswordCorrect = await bcrypt.compare(password, company.password);

		if (!isPasswordCorrect) {
			res.status(401).json({ msg: 'Invalid password' });
		} else {
			try {
				const payload = {
					company: {
						id: company._id,
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
			} catch (error) {
				console.error(error.message);
				res.status(500).json({ msg: 'Server error' });
			}
		}
	}
});

// @route   GET /auth/company
// @desc    Get company by token
// @access  Private
router.get('/company', Auth, async (req, res) => {
	try {
		const company = await Company.findById(req.company.id).select('-password');
		res.json(company);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

module.exports = router;
