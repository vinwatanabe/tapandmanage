const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
	company: {
		type: Schema.Types.ObjectId,
		ref: 'Company',
		required: true,
	},
	groupName: {
		type: String,
		required: true,
	},
	itemId: {
		type: Schema.Types.ObjectId,
		ref: 'Item',
		required: true,
	},
	itemName: {
		type: String,
		required: true,
	},
	itemStatus: {
		type: String,
		require: true,
	},
	isRead: {
		type: Boolean,
		required: true,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Item = mongoose.model('Notification', notificationSchema);
