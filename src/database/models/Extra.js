const mongoose = require('mongoose');

const types = mongoose.SchemaTypes;

const extraSchema = new mongoose.Schema({

    _id: types.ObjectId,
    group: {
        type: types.ObjectId,
        ref: 'MenuGroup',
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50
    },
	price: {
		type: types.Decimal128,
		default: 0
	}
});

const Extra = mongoose.model('Extra', extraSchema);

module.exports = Extra;