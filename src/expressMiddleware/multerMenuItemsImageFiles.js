const multer = require('multer');

const GridFSStorage = require('multer-gridfs-storage');

const config = require('../config/config');

const conn = require('mongoose').connection;

const { ObjectID } = require('mongodb');

const crudOperations = require('../database/crudOperations');


const generateImageFileId = function(itemId) {
	
	const id = new ObjectID();
	
	crudOperations.MenuItem.addMenuItemImage(itemId, id); // EACH TIME WE STORE AN IMAGE FILE, GENERATE AN IMAGE ID AND
	// STORE THAT ID in THE images ARRAY FIELD OF THE item DOC.
	
	return id;
};


const gfsStorageImageFile = new GridFSStorage({

	db: conn,
	file: function(req, file) {

		const { menuItemId } = req.params;

		return {
			id: generateImageFileId(menuItemId),
			bucketName: 'images'
		};

	}
});

const limits = {
	fieldNameSize: 100,	// MAX 100 CHARS PER FILE NAME
	fileSize: config.app.items.MENU_ITEM_IMAGE_MAX_SIZE_MBYTES * 1024 * 1024, // MAX 20MB PER FILE
	files: 1		// MAX FILES PER REQUEST
};

const fileFilter = (req, file, cb) => {

	// SELECT HERE WICH FILES TO IGNORE CALLING cb(null, false) or cb(new Error())

	if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/gif' && file.mimetype !== 'image/png') {

		cb(null, false);

	}

	cb(null, true);

};



const uploadImageFile = multer({
	storage: gfsStorageImageFile,
	limits,
	fileFilter
})

module.exports = uploadImageFile;