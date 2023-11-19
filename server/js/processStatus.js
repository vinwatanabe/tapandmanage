const checkStatus = require('./checkStatus');
const Item = require('../model/Item');

async function processStatus(items) {
	for (let i = 0; i < items.length; i++) {
		const itemData = items[i];

		try {
			const editedItem = {
				group: itemData.group,
				itemType: itemData.itemType,
				SKU: itemData.SKU,
				barcode: itemData.barcode,
				itemName: itemData.itemName,
				brandName: itemData.brandName,
				stockDate: itemData.stockDate,
				stockRelease: itemData.stockRelease,
				expirationDate: itemData.expirationDate,
				cost: itemData.cost,
				sellingPrice: itemData.sellingPrice,
				status: itemData.status,
				units: itemData.units,
				measure: itemData.measure,
				minimumAmount: itemData.minimumAmount,
				itemDetails: itemData.itemDetails,
				company: itemData.company,
			};

			editedItem.status = await checkStatus(
				editedItem.units,
				editedItem.minimumAmount,
				editedItem.expirationDate
			);

			const savedItem = await Item.findByIdAndUpdate(itemData._id, editedItem, {
				new: true,
			}).catch((error) => {
				console.error(error.message);
			});

			await savedItem.save().catch((error) => {
				console.error(error.message);
			});
		} catch (error) {
			console.error(error.message);
		}
	}
}

module.exports = processStatus;
