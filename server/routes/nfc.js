const express = require('express');

const Auth = require('../middleware/authMiddleware');
const Item = require('../model/Item');

const router = express.Router();

// @route   PUT /nfc/remove/:id
// @desc    Remove an item with nfc route
// @access  Private
router.put('/remove/:id', Auth, async (req, res) => {
	try {
		let item = await Item.find({ _id: req.params.id, company: req.company.id });
		item = item[0];

		if (!item) {
			res.status(404).json({ msg: 'Item not found' });
		} else {
			if (item.units === 0) {
				res.status(500).json({ msg: 'Item units is already zero' });
			} else {
				let editedItem = {
					group: item.group,
					itemType: item.itemType,
					SKU: item.SKU,
					barcode: item.barcode,
					itemName: item.itemName,
					brandName: item.brandName,
					stockDate: item.stockDate,
					stockRelease: item.stockRelease,
					expirationDate: item.expirationDate,
					cost: item.cost,
					sellingPrice: item.sellingPrice,
					status: item.status,
					units: item.units - 1,
					measure: item.measure,
					minimumAmount: item.minimumAmount,
					itemDetails: item.itemDetails,
					company: req.company.id,
				};

				let savedItem = await Item.findByIdAndUpdate(
					req.params.id,
					editedItem,
					{
						new: true,
					}
				).catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error editing item' });
				});

				savedItem
					.save()
					.then((response) => {
						res.json(response);
					})
					.catch((error) => {
						console.error(error.message);
						res.status(500).json({ msg: 'Error saving item' });
					});
			}
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   PUT /nfc/add/:id
// @desc    Add an item with nfc route
// @access  Private
router.put('/add/:id', Auth, async (req, res) => {
	try {
		let item = await Item.find({ _id: req.params.id, company: req.company.id });
		item = item[0];

		if (!item) {
			res.status(404).json({ msg: 'Item not found' });
		} else {
			let editedItem = {
				group: item.group,
				itemType: item.itemType,
				SKU: item.SKU,
				barcode: item.barcode,
				itemName: item.itemName,
				brandName: item.brandName,
				stockDate: item.stockDate,
				stockRelease: item.stockRelease,
				expirationDate: item.expirationDate,
				cost: item.cost,
				sellingPrice: item.sellingPrice,
				status: item.status,
				units: item.units + 1,
				measure: item.measure,
				minimumAmount: item.minimumAmount,
				itemDetails: item.itemDetails,
				company: req.company.id,
			};

			let savedItem = await Item.findByIdAndUpdate(req.params.id, editedItem, {
				new: true,
			}).catch((error) => {
				console.error(error.message);
				res.status(500).json({ msg: 'Error editing item' });
			});

			savedItem
				.save()
				.then((response) => {
					res.json(response);
				})
				.catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error saving item' });
				});
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

module.exports = router;
