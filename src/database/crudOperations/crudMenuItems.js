const models = require('../models');

const createError = require('http-errors');

const { ObjectID } = require('mongodb');

const { ApolloError } = require('apollo-server-express');

const mongoose = require('mongoose');

const MongoGridFSStore = require('mongo-gridfs-storage'); /* WE USE THIS MODULE JUST FOR READ FILES FROM THE GRIDFSBUCKET */

const addNewMenuItem = async (filter) => {

	try {

		const { name, description, group, price } = filter;
		
		const item = await models.MenuItem.create({
			_id: new ObjectID(),
			name,
			description,
			group,
			price
		});

		return item;

	} catch (error) {
		
		throw new ApolloError('Could not create new Item', '500');

	}

};


const addMenuItemImage = async (itemId, imageId) => {


	try {
		
		const item = await models.MenuItem.findById(itemId);

		if(!item) {
			throw new ApolloError('ItemId Not Found','500');
		}

		item.image = imageId;

		const newItem = await item.save();

		return newItem;


	} catch (error) {
		
		throw new ApolloError('Could not add Image to Item', '500');
	}

};

const removeMenuItem = async (itemId) => {

	try {
	
		const item = await models.MenuItem.findByIdAndDelete(itemId);

		if(!item) {
			throw new ApolloError('ItemId Not Found');
		}

		return item;


	} catch (error) {
		
		throw new ApolloError('Could not remove the Item', '500');

	}

};

const getMenuItemById = async itemId => {


	try {
	
		const item = await models.MenuItem.findById(itemId);

		if(!item) {
			throw new ApolloError('ItemId Not Found');
		}

		return item;


	} catch (error) {
		
		throw new ApolloError('Could not find the Item', '500');

	}

};

const getMenuItemsShowAtHome = async () => {

	try {
	
		const items = await models.MenuItem.find({ showAtHome: true });
		
		return items;


	} catch (error) {
		
		throw new ApolloError('Could not find Items', '500');

	}


};

const getImageFromStore = async imageId => {
	
	try {
		
		//const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'images'});

		const gfs = new MongoGridFSStore(mongoose.connection.db, { bucketName: 'images' })

		const filter = {
			_id: ObjectID.createFromHexString(imageId)
		};

		const fileBuffer = await gfs.read(filter);

		//const readableStream = gridFSBucket.openDownloadStream(ObjectID.createFromHexString(imageId));

		
		//return readableStream; // DEVOLVEMOS UN GridFSBucketReadStream el cual puede hacer pipe con el Response Object

		return fileBuffer;

	} catch (error) {
		
		if (!error.status) {

			error.status = 500;

		}

		throw createError(error.status, error.message);

	}

};


const getManyImagesFromStore = async filter => {

	// filter = { ids: [id1, id2, id3, id4.....] }

	try {
		
		const gfs = new MongoGridFSStore(mongoose.connection.db, { bucketName: 'images' });

		const { ids } = filter;

		const filesPromises = ids.map(id => {

			return gfs.read({ _id: ObjectID.createFromHexString(id) });

		});

		const dataArray = await Promise.all(filesPromises);

		const outputArray = [];

		for( let i = 0; i < ids.length; i++) {

			outputArray.push({
				_id: ids[i],
				image: dataArray[i]
			});

		}

		return outputArray;

	} catch (error) {
		
		if (!error.status) {

			error.status = 500;

		}

		throw createError(error.status, error.message);

	}


};


module.exports = {
	addNewMenuItem,
	addMenuItemImage,
	removeMenuItem,
	getMenuItemById,
	getImageFromStore,
	getManyImagesFromStore,
	getMenuItemsShowAtHome
};

