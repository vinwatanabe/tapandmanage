const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
	group: {
		type: Schema.Types.ObjectId,
		ref: 'Group',
		required: true,
	},
	itemType: {
		type: String,
		required: true,
		enum: ['Final product', 'Item'],
	},
	SKU: {
		type: String,
		required: false,
	},
	barcode: {
		type: String,
		required: false,
	},
	itemName: {
		type: String,
		required: true,
	},
	brandName: {
		type: String,
		required: false,
	},
	stockDate: {
		type: Date,
		required: false,
	},
	stockRelease: {
		type: Date,
		required: false,
	},
	expirationDate: {
		type: Date,
		required: true,
	},
	cost: {
		type: Number,
		required: false,
	},
	sellingPrice: {
		type: Number,
		required: false,
	},
	status: {
		type: String,
		required: true,
		enum: ['In Stock', 'Low Stock', 'Out of Stock', 'Expired'],
	},
	units: {
		type: Number,
		required: true,
	},
	measure: {
		type: String,
		required: true,
		enum: ['Units', 'Kilograms', 'Ounces', 'Pounds'],
	},
	minimumAmount: {
		type: Number,
		required: true,
	},
	itemDetails: {
		type: String,
		required: false,
	},
	company: {
		type: Schema.Types.ObjectId,
		ref: 'Company',
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Item = mongoose.model('Item', itemSchema);
