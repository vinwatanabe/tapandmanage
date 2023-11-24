const express = require('express');

const Auth = require('../middleware/authMiddleware');
const Notification = require('../model/Notification');

const router = express.Router();

// @route   GET /notification/all
// @desc    Get all notifications
// @access  Private
router.get('/all', Auth, async (req, res) => {
	try {
		const notifications = await Notification.find({
			company: req.company.id,
		}).sort({ createdAt: -1 });
		res.json(notifications);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

// @route   PUT /notification/:id
// @desc    Change notification status
// @access  Private
router.put('/:id', Auth, async (req, res) => {
	try {
		let notification = await Notification.find({
			company: req.company.id,
			_id: req.params.id,
		});

		notification = notification[0];

		if (!notification) {
			res.status(404).json({ msg: 'No notifications found' });
		} else {
			const newNotification = {
				company: notification.company,
				groupName: notification.groupName,
				itemId: notification.itemId,
				itemStatus: notification.itemStatus,
				isRead: notification.isRead,
			};

			if (!notification.isRead) {
				newNotification.isRead = true;
			} else {
				newNotification.isRead = false;
			}

			const savedNotification = await Notification.findByIdAndUpdate(
				req.params.id,
				newNotification,
				{ new: true }
			).catch((error) => {
				console.error(error.message);
				res.status(500).json({ msg: 'Error saving notification' });
			});

			await savedNotification
				.save()
				.then((response) => {
					res.json(response);
				})
				.catch((error) => {
					console.error(error.message);
					res.status(500).json({ msg: 'Error saving notification' });
				});
		}
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error' });
	}
});

module.exports = router;
