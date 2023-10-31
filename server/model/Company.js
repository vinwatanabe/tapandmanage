const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	company: {
		type: String,
		required: true,
	},
	position: {
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
	groups: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Group',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Company = mongoose.model('Company', companySchema);
