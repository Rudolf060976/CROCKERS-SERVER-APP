const express = require('express');

const createError = require('http-errors');

const uploadImageFiles = require('../expressMiddleware/multerMenuItemsImageFiles');

const crudOperations = require('../database/crudOperations');

const router = express.Router();

const parseFilterObjectFromQueryString = require('../modules/General/parseFilterObjectFromQueryString.js');

router.get('/images/:imageId', (req, res) => {

	if(req.params.imageId) {

		const { imageId } = req.params;

		crudOperations.MenuItem.getImageFromStore(imageId).then(fileBuffer => {

			res.status(200)
					.set({
						'content-type':'application/octet-stream',
						'api-url': '/api/menuitems/images/'					
					})
					.send(fileBuffer);
			
			// readableStream.pipe(res);

		}).catch(err => {

			res.status(err.status).json({
				error: err,
				ok: false,
				status: err.status,
				message: err.message,
				data: null
			});

		});

	} else {

		return res.status(400).json({
			error: createError(400, 'BAD REQUEST'),
			ok: false,
			status: 400,
			message: 'MISSING DATA',
			data: null
		});

	}


});

	
router.get('/images/many', (req, res) => {
	
	// WE RECEIVE A FILTER PARAM FROM QUERY STRING

	const filter = parseFilterObjectFromQueryString(req);
				
	crudOperations.MenuItem.getManyImagesFromStore(filter).then(outputArray => {
						
		res.status(200)
			.set({
				'content-type':'json',
				'api-url': '/api/items/images/'						
			})
			.json({
				error: null,
				ok: true,
				status: 200,
				message: 'OK',
				data: outputArray
			});
	}).catch(err => {

		res.status(err.status).json({
			error: err,
			ok: false,
			status: err.status,
			message: err.message,
			data: null
		});

	});
			

});


router.post('/:menuItemId/image', uploadImageFiles.single('image'), (req, res) => {

	if(req.params.menuItemId) {

		const { menuItemId } = req.params;

		crudOperations.MenuItem.getMenuItemById(menuItemId).then(item => {

			res.status(200).json({
				error: null,
				ok: true,
				status: 200,
				message: 'OK',
				data: {
					item
				}
			});	


		}).catch(err => {

			res.status(err.status).json({
				error: err,
				ok: false,
				status: err.status,
				message: err.message,
				data: null
			});

		});



	} else {

		return res.status(400).json({
			error: createError(400, 'BAD REQUEST'),
			ok: false,
			status: 400,
			message: 'MISSING ITEM ID',
			data: null
		});

	}

});


module.exports = router;
