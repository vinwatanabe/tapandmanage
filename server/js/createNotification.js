const Notification = require('../model/Notification');

async function createNotification(
	company,
	groupName,
	itemId,
	itemName,
	prevStatus,
	newStatus
) {
	if (prevStatus !== newStatus) {
		const notification = new Notification({
			company: company,
			groupName: groupName,
			itemId: itemId,
			itemName: itemName,
			itemStatus: newStatus,
		});

		try {
			await notification.save().catch((error) => {
				console.log(error);
			});
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = createNotification;
