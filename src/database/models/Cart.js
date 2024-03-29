const mongoose = require('mongoose');
const Int32 = require('mongoose-int32');


const types = mongoose.SchemaTypes;

const options = {
	timestamps: true,
	upsert: true
};

const cartSchema = new mongoose.Schema({
	_id: types.ObjectId,
	user: {
		type: types.ObjectId,
		ref: 'User',
		required: true
	},
	menuItem: {
		type: types.ObjectId,
		ref: 'MenuItem',
		required: true
	},
	quantity: {
		type: Int32,
		default: 1
	},
	price: {
		type: types.Decimal128,
		required: true,
		default: 0
	},
	extras: [types.ObjectId],
	extrasTotal: {
		type: types.Decimal128,
		required: true,
		default: 0
	},
	tax: {
		type: types.Decimal128,
		required: true,
		default: 10
	},
	comments: {
		type: String,
		maxlength: 300
	}
}, options );

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;