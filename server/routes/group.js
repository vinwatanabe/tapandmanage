const express = require('express');

const Auth = require('../middleware/authMiddleware');
const Group = require('../model/Group');
const Company = require('../model/Company');
const Item = require('..//model/Item');

const router = express.Router();

// @route   POST /group/new
// @desc    Create a new group
// @access  Private
router.post('/new', Auth, async (req, res) => {
	try {
		const { groupName } = req.body;

		const group = new Group({
			company: req.company.id,
			groupName: groupName,
		});

		const company = await Company.findById(req.company.id).populate('groups');
		const groups = company.groups;
		let groupExist = 0;

		groups.forEach((g) => {
			if (g.groupName.toLowerCase() === group.groupName.toLowerCase()) {
				groupExist = 1;
			}
		});

		if (groupExist != 0) {
			res.json({ msg: 'Group already exists.' });
		} else {
			await group
				.save()
				.then((response) => {
					res.json(response);
				})
				.catch((error) => {
					res.status(500).json({ msg: 'Error: Group not saved' });
				});

			await Company.findByIdAndUpdate(
				req.company.id,
				{ $push: { groups: group._id } },
				{ new: true }
			);
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   PUT /group/edit/:id
// @desc    Edit group
// @access  Private
router.put('/edit/:id', Auth, async (req, res) => {
	let group = await Group.find({ _id: req.params.id, company: req.company.id });
	group = group[0];

	if (!group) {
		res.status(404).json({ msg: 'Group not found' });
	} else {
		try {
			group = await Group.findByIdAndUpdate(
				req.params.id,
				{
					groupName: req.body.groupName,
				},
				{ new: true }
			).catch((error) => {
				console.error(error.message);
				res.status(500).json({ msg: 'Error editing group' });
			});

			await group
				.save()
				.then((response) => {
					res.json(response);
				})
				.catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error saving group' });
				});
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ msg: 'Server error' });
		}
	}
});

// @route   GET /group/all
// @desc    Get all groups from user
// @access  Private
router.get('/all', Auth, async (req, res) => {
	try {
		const groups = await Group.find({ company: req.company.id }).populate({
			path: 'items',
			options: { sort: { createdAt: -1 } },
		});
		res.json(groups);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   DELETE /group/delete/:id
// @desc    Delete group
// @access  Private
router.delete('/delete/:id', Auth, async (req, res) => {
	let group = await Group.find({
		_id: req.params.id,
		company: req.company.id,
	});

	group = group[0];

	if (!group) {
		res.status(404).json({ msg: 'Group not found' });
	} else {
		try {
			const company = await Company.findById(req.company.id);
			company.groups.pull(req.params.id);
			await company.save().catch((error) => {
				console.error(error.message);
				res.status(500).json({ msg: 'Error deleting group from company list' });
			});

			await Item.deleteMany({ group: req.params.id }).catch((error) => {
				console.error(error.message);
				res.status(500).json({ msg: 'Error deleting items from the group' });
			});

			await Group.findByIdAndDelete(req.params.id)
				.then(() => {
					res.json({ msg: 'Group deleted' });
				})
				.catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error deleting group' });
				});
		} catch (error) {
			console.error(error.message);
			res.status(500).json({ msg: 'Server error' });
		}
	}
});

module.exports = router;
