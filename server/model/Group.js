const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
	groupName: {
		type: String,
		required: true,
	},
	company: {
		type: Schema.Types.ObjectId,
		ref: 'Company',
	},
	items: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Item',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Group = mongoose.model('Group', groupSchema);
