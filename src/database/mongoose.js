const mongoose = require('mongoose');

const config = require('../config/config');

const url = config.env.MONGODB_URI;


mongoose.Promise = global.Promise;

const connectDB = () => {

	return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

};

module.exports = {
	connectDB,
	mongoose
};