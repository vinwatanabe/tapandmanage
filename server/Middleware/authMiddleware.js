const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	const token = req.header('x-auth-token');

	if (!token) {
		res.status(401).json({ msg: 'No token found' });
	} else {
		try {
			jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
				if (error) {
					console.error(error.message);
					res.status(500).json({ msg: 'Invalid token' });
				} else {
					req.company = decoded.company;
					next();
				}
			});
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ msg: 'Server error: Authentication error' });
		}
	}
};
