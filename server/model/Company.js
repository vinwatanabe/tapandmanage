const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
	companyName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Company = mongoose.model('Company', companySchema);
