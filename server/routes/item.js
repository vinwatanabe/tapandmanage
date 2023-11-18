const express = require('express');

const Auth = require('../middleware/authMiddleware');
const Group = require('../model/Group');
const Item = require('../model/Item');

const router = express.Router();

// @route   POST /item/new
// @desc    Create a new item
// @access  Private
router.post('/new', Auth, async (req, res) => {
	const {
		groupName,
		itemType,
		SKU,
		barcode,
		itemName,
		brandName,
		stockDate,
		stockRelease,
		expirationDate,
		cost,
		sellingPrice,
		status,
		units,
		measure,
		minimumAmount,
		itemDetails,
	} = req.body;

	try {
		const group = await Group.find({
			groupName: groupName,
			company: req.company.id,
		});

		if (!group || group == '') {
			res.status(404).json({ msg: 'Error: Group name not found' });
		} else {
			const groupId = group[0]._id;

			const item = new Item({
				group: groupId,
				itemType: itemType,
				SKU: SKU,
				barcode: barcode,
				itemName: itemName,
				brandName: brandName,
				stockDate: stockDate,
				stockRelease: stockRelease,
				expirationDate: expirationDate,
				cost: cost,
				sellingPrice: sellingPrice,
				status: status,
				units: units,
				measure: measure,
				minimumAmount: minimumAmount,
				itemDetails: itemDetails,
				company: req.company.id,
			});

			const itemSaved = await item.save().catch(() => {
				res.status(500).json({ msg: 'Error: Item not saved' });
			});

			if (itemSaved) {
				await Group.findByIdAndUpdate(
					itemSaved.group,
					{ $push: { items: itemSaved._id } },
					{ new: true }
				).catch(() => {
					res.status(500).json({ msg: "Error: Can't update group with item" });
				});

				res.json(itemSaved);
			}
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   GET /item/all
// @desc    Get all items from user
// @access  Private
router.get('/all', Auth, async (req, res) => {
	try {
		let items = await Item.find({ company: req.company.id });

		if (!items[0]) {
			res.status(404).json({ msg: 'No items found' });
		} else {
			res.json(items);
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   GET /item/allgroup/:id
// @desc    Get all from a group id
// @access  Private
router.get('/allgroup/:id', Auth, async (req, res) => {
	try {
		const group = await Group.find({
			_id: req.params.id,
			company: req.company.id,
		});

		if (!group[0]) {
			res.status(404).json({ msg: 'Group not found' });
		} else {
			const items = await Item.find({
				group: req.params.id,
				company: req.company.id,
			});

			if (!items[0]) {
				res.status(404).json({ msg: 'No items found' });
			} else {
				res.json(items);
			}
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   GET /item/:id
// @desc    Get specific item from company
// @access  Private
router.get('/:id', Auth, async (req, res) => {
	try {
		const item = await Item.find({
			_id: req.params.id,
			company: req.company.id,
		}).populate('group');

		if (!item[0]) {
			res.status(404).json({ msg: 'Item not found' });
		} else {
			res.json(item);
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   GET /item/dashboard
// @desc    Get dashboard items
// @access  Private
router.get('/dashboard/items', Auth, async (req, res) => {
	try {
		const expiredProducts = await Item.find({
			company: req.company.id,
			status: 'Expired',
		});

		const lowStockProducts = await Item.find({
			company: req.company.id,
			status: 'Low Stock',
		});

		const outOfStockProducts = await Item.find({
			company: req.company.id,
			status: 'Out of Stock',
		});

		const today = new Date();
		const sevenDaysLater = new Date();
		sevenDaysLater.setDate(today.getDate() + 7);

		const expiringSoonProducts = await Item.find({
			company: req.company.id,
			expirationDate: { $gte: today, $lt: sevenDaysLater },
		});

		const dashboard = {
			expired: expiredProducts,
			expiresSoon: expiringSoonProducts,
			lowStock: lowStockProducts,
			outOfStock: outOfStockProducts,
		};

		res.json(dashboard);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   PUT /item/edit/:id
// @desc    Edit specific item from company
// @access  Private
router.put('/edit/:id', Auth, async (req, res) => {
	const {
		groupName,
		itemType,
		SKU,
		barcode,
		itemName,
		brandName,
		stockDate,
		stockRelease,
		expirationDate,
		cost,
		sellingPrice,
		status,
		units,
		measure,
		minimumAmount,
		itemDetails,
	} = req.body;

	try {
		let item = await Item.find({ _id: req.params.id, company: req.company.id });

		if (!item[0]) {
			res.status(404).json({ msg: 'Item not found' });
		} else {
			let group = await Group.find({
				groupName: groupName,
				company: req.company.id,
			});

			group = group[0];

			if (!group) {
				res.status(404).json({ msg: 'Group name not found' });
			} else {
				const editedItem = {
					group: group._id,
					itemType: itemType,
					SKU: SKU,
					barcode: barcode,
					itemName: itemName,
					brandName: brandName,
					stockDate: stockDate,
					stockRelease: stockRelease,
					expirationDate: expirationDate,
					cost: cost,
					sellingPrice: sellingPrice,
					status: status,
					units: units,
					measure: measure,
					minimumAmount: minimumAmount,
					itemDetails: itemDetails,
					company: req.company.id,
				};

				const savedItem = await Item.findByIdAndUpdate(
					req.params.id,
					editedItem,
					{
						new: true,
					}
				).catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error editing item' });
				});

				await savedItem
					.save()
					.then((response) => {
						res.json(response);
					})
					.catch((error) => {
						console.error(error.message);
						res.status(500).json({ msg: 'Error saving item' });
					});

				if (item[0].group.toString() !== editedItem.group.toString()) {
					const groupId = item[0].group;

					const deleteItemGroup = await Group.findById(groupId);
					deleteItemGroup.items.pull(req.params.id);
					await deleteItemGroup.save().catch((error) => {
						console.error(error.message);
						res
							.status(500)
							.json({ msg: 'Error deleting item from group list' });
					});

					await Group.findByIdAndUpdate(
						editedItem.group,
						{
							$push: { items: req.params.id },
						},
						{ new: true }
					);
				}
			}
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   DELETE /item/delete/:id
// @desc    Delete item
// @access  Private
router.delete('/delete/:id', Auth, async (req, res) => {
	try {
		const itemId = req.params.id;

		let item = await Item.find({ _id: itemId, company: req.company.id });
		item = item[0];

		if (!item) {
			res.status(404).json({ msg: 'Item not found' });
		} else {
			const group = await Group.findById(item.group);
			group.items.pull(item._id);
			await group.save().catch((error) => {
				console.error(error.message);
				res.status(500).json({ msg: 'Error deleting item from group list' });
			});

			await Item.findByIdAndDelete(item._id)
				.then(() => {
					res.json({ msg: 'Item deleted' });
				})
				.catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error deleting item' });
				});
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

module.exports = router;
