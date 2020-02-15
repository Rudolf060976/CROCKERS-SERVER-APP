const models = require('./models');

const eraseDatabase = () => {

	return Promise.all([models.MenuGroup.deleteMany({}), models.MenuItem.deleteMany({})]);

};


module.exports = eraseDatabase;