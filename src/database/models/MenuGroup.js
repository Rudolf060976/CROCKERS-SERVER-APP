const mongoose = require('mongoose');

const types = mongoose.SchemaTypes;

const menuGroupSchema = new mongoose.Schema({
	_id: types.ObjectId,
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	createdAt: {
		type: types.Date,
		default: new Date()
	}
});


const MenuGroup = mongoose.model('MenuGroup', menuGroupSchema);

module.exports = MenuGroup;

