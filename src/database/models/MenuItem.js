const mongoose = require('mongoose');

const types = mongoose.SchemaTypes;

const menuItemSchema = new mongoose.Schema({
	_id: types.ObjectId,
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	group: {
		type: types.ObjectId,
		ref: 'MenuGroup',
		required: true
	},
	price: {
		type: types.Decimal128,
		default: 0
	},
	tax: {
		type: types.Decimal128,
		default: 10
	},
	image: {
		type: types.ObjectId,
		required: false
	},
	showAtHome: {
		type: types.Boolean,
		default: false
	},
	createdAt: {
		type: types.Date,
		default: new Date()
	}
});


const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;

