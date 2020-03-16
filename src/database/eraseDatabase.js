const models = require('./models');
const mongoose = require('mongoose');

const eraseDatabase = async () => {

	
	try {
	
		const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'images'}); // USAMOS DIRECTAMENTE EL DRIVER DE MONGODB PARA TENER ACCESO A GRIDFSBUCKET

		await Promise.all([models.MenuGroup.deleteMany({}), models.MenuItem.deleteMany({}),models.Cart.deleteMany({}), models.Extra.deleteMany({}),gridFSBucket.drop()]);

		// USAMOS EL TRY CATCH PORQUE EL MÉTODO gridFSBucket arroja un ERROR si no existe la colección images

	} catch (error) {
		
		await Promise.all([models.MenuGroup.deleteMany({}), models.MenuItem.deleteMany({})]);

	}
	
	

};


module.exports = eraseDatabase;