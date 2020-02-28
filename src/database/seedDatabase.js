const mongoose = require('mongoose');

const fs = require('fs');

const models = require('./models');

const { ObjectID } = require('mongodb');


const seedDatabase = async () => {


	const gridFSBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'images' });

	const id1 = new ObjectID();

	const id2 = new ObjectID();

	const id3 = new ObjectID();

	const id4 = new ObjectID();

	const id5 = new ObjectID();

	const idImageBurgers1 = new ObjectID();
	const idImageBurgers2 = new ObjectID();
	const idImageBurgers3 = new ObjectID();
	const idImageBurgers4 = new ObjectID();
	const idImageBurgers5 = new ObjectID();
	const idImageBurgers6 = new ObjectID();
	const idImageBurgers7 = new ObjectID();
	const idImageBurgers8 = new ObjectID();
	const idImageBurgers9 = new ObjectID();
	const idImageBurgers10 = new ObjectID();
	const idImageBurgers11 = new ObjectID();
	const idImageBurgers12 = new ObjectID();
	const idImageBurgers13 = new ObjectID();

	const idImageSalads1 = new ObjectID();
	const idImageSalads2 = new ObjectID();
	const idImageSalads3 = new ObjectID();
	const idImageSalads4 = new ObjectID();

	const idImageFries1 = new ObjectID();
	const idImageFries2 = new ObjectID();
	const idImageFries3 = new ObjectID();
	const idImageFries4 = new ObjectID();
	const idImageFries5 = new ObjectID();

	const idImageMilkShakes1 = new ObjectID();
	const idImageMilkShakes2 = new ObjectID();
	const idImageMilkShakes3 = new ObjectID();
	const idImageMilkShakes4 = new ObjectID();
	const idImageMilkShakes5 = new ObjectID();
	const idImageMilkShakes6 = new ObjectID();
	const idImageMilkShakes7 = new ObjectID();


	// PRIMERO LOS GRUPOS

	
	await models.MenuGroup.create([
		{
			_id: id1,
			name: 'BURGERS'
		},
		{
			_id: id2,
			name: 'SALADS'
		},
		{
			_id: id3,
			name: 'FRIES'
		},
		{
			_id: id4,
			name: 'MILKSHAKES'
		},
		{
			_id: id5,
			name: 'BEVERAGES'
		}
	]);
	

	await models.MenuItem.create([
		{
			_id: new ObjectID(),
			name: 'CROCKERS',
			description: 'crispy parmesan | shitake mushrooms | roasted tomato | grilled onion | crockers ketchup',
			group: id1,
			price: 9.99,
			showAtHome: true,
			createdAt: new Date().getTime() + 1000,
			image: idImageBurgers1
		},
		{
			_id: new ObjectID(),
			name: 'MANLY',
			description: 'house beer-cheddar cheese | bacon lardons | smoked-salt |	onion strings | crockers ketchup | mustard spread',
			group: id1,
			price: 8.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 2000,
			image: idImageBurgers2
		},
		{
			_id: new ObjectID(),
			name: 'PLAIN & SIMPLE',
			description: 'american cheese | ketchup | dill pickles',
			group: id1,
			price: 5.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 3000,
			image: idImageBurgers3
		},
		{
			_id: new ObjectID(),
			name: 'SUNNY SIDE',
			description: 'crispy bacon | sunny side-up egg | crispy potatoes | garlic mayo | umami ketchup | white cheddar | grilled onions',
			group: id1,
			price: 7.50,
			showAtHome: true,
			createdAt: new Date().getTime() + 4000,
			image: idImageBurgers4
		},
		{
			_id: new ObjectID(),
			name: 'THE BEEFY',
			description: 'crispy bacon | beer-cheddar cheese | smoky onion strings | smoky bbq | miso-mustard',
			group: id1,
			price: 10.98,
			showAtHome: true,
			createdAt: new Date().getTime() + 5000,
			image: idImageBurgers5
		},
		{
			_id: new ObjectID(),
			name: 'THROWBACK',
			description: 'two burger patties | white cheddar | miso-mustard | dill pickles | minced onions | crockers ketchup',
			group: id1,
			price: 11.99,
			showAtHome: true,
			createdAt: new Date().getTime() + 6000,
			image: idImageBurgers6
		},
		{
			_id: new ObjectID(),
			name: 'TRUFFLE',
			description: 'truffle mayo | truffle cheese | truffle glaze',
			group: id1,
			price: 7.60,
			showAtHome: false,
			createdAt: new Date().getTime() + 7000,
			image: idImageBurgers7
		},
		{
			_id: new ObjectID(),
			name: 'WAG-YU-MAMI',
			description: 'shaved cabbage | miso-honey mustard | sesame | yuzu mayo | kimchi mayo',
			group: id1,
			price: 8.50,
			showAtHome: true,
			createdAt: new Date().getTime() + 8000,
			image: idImageBurgers8
		},
		{
			_id: new ObjectID(),
			name: 'THE CALI',
			description: 'two burger patties | butter lettuce | tomato | crockers sauce | miso-mustard | grilled onions | dill pickles | american cheese',
			group: id1,
			price: 7.50,
			showAtHome: false,
			createdAt: new Date().getTime() + 9000,
			image: idImageBurgers9
		},
		{
			_id: new ObjectID(),
			name: 'IMPOSSIBLE BURGER',
			description: 'two impossible patties | grilled onions | vegan american cheese | miso mustard | crockers sauce | dill pickles | lettuce | tomato',
			group: id1,
			price: 12.99,
			showAtHome: true,
			createdAt: new Date().getTime() + 10000,
			image: idImageBurgers10
		},
		{
			_id: new ObjectID(),
			name: 'IMPOSSIBLE CLASSIC CHEESEBURGER',
			description: 'one impossible patty | vegan bun | miso-mustard | secret sauce | vegan american cheese | curly lettuce | raw onion | dill pickles | tomato',
			group: id1,
			price: 11.99,
			showAtHome: true,
			createdAt: new Date().getTime() + 11000,
			image: idImageBurgers11
		},
		{
			_id: new ObjectID(),
			name: 'IMPOSSIBLE TRUFFLEMAKER',
			description: 'one impossible patty | vegan bun | miso-mustard | charred green chili salsa | truffle fondue | truffle mayo | port wine truffle glaze | curly lettuce | tomato',
			group: id1,
			price: 13.99,
			showAtHome: true,
			createdAt: new Date().getTime() + 12000,
			image: idImageBurgers12
		},
		{
			_id: new ObjectID(),
			name: 'IMPOSSIBLE VEGAN BBQ',
			description: 'one impossible patty | vegan bun | miso-mustard | espresso rub | charred green chili salsa | smoky sweet bbq sauce | coleslaw | thinly sliced jalapeño',
			group: id1,
			price: 10.80,
			showAtHome: false,
			createdAt: new Date().getTime() + 13000,
			image: idImageBurgers13
		}
	]);

	await models.MenuItem.create([
		{
			_id: new ObjectID(),
			name: 'CROCKERS TACO SALAD',
			description: 'iceberg | shaved red cabbage | avocado | white cheddar | roasted tomato | corn | cilantro | pickled red onion | tortilla | jalapeño ranch + jalapeño lime vinaigrette',
			group: id2,
			price: 6.50,
			showAtHome: false,
			createdAt: new Date().getTime() + 1000,
			image: idImageSalads1
		},
		{
			_id: new ObjectID(),
			name: 'NEW STYLE CAESAR',
			description: 'romaine | shaved cabbage | crunchy tempura flakes | sesame | parmesan | nori | wasabi peas | wasabi caesar dressing',
			group: id2,
			price: 8.50,
			showAtHome: false,
			createdAt: new Date().getTime() + 2000,
			image: idImageSalads2
		},
		{
			_id: new ObjectID(),
			name: 'SIDE SALAD',
			description: 'arugula | cucumbers | roasted tomatoes | sherry vinaigrette',
			group: id2,
			price: 7.50,
			showAtHome: false,
			createdAt: new Date().getTime() + 3000,
			image: idImageSalads3
		},
		{
			_id: new ObjectID(),
			name: 'ALL GREEN EVERYTHING',
			description: 'romaine | cabbage | iceberg | arugula | radish | edamame | green beans | avocado | cucumber | green goddess dressing',
			group: id2,
			price: 6.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 4000,
			image: idImageSalads4
		}
	]);

	await models.MenuItem.create([
		{
			_id: new ObjectID(),
			name: 'THIN AND CRISPY FRIES',
			description: 'seasoned salt | umami ketchup | garlic mayo',
			group: id3,
			price: 9.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 1000,
			image: idImageFries1
		},
		{
			_id: new ObjectID(),
			name: 'LOAD ´EM FRIES',
			description: 'bacon | jalapeño ranch | smoky onion strings | beer-cheddar | scallions',
			group: id3,
			price: 10.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 2000,
			image: idImageFries2
		},
		{
			_id: new ObjectID(),
			name: 'MAKE ´EM MESSY FRIES',
			description: 'garlic salt | parmesan | grilled onions | crockers sauce | scallions',
			group: id3,
			price: 11.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 3000,
			image: idImageFries3
		},
		{
			_id: new ObjectID(),
			name: 'TRUFFLE ´EM FRIES',
			description: 'truffle cheese | truffle salt | truffle glaze',
			group: id3,
			price: 12.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 4000,
			image: idImageFries4
		},
		{
			_id: new ObjectID(),
			name: 'SWEET POTATO FRIES',
			description: 'seasoned salt | garlic mayo | smokey bbq',
			group: id3,
			price: 12.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 5000,
			image: idImageFries5
		}

	]);

	await models.MenuItem.create([
		{
			_id: new ObjectID(),
			name: 'CHOCOLATE MILKSHAKE',
			description: 'coconut whipped cream | rainbow sprinkles',
			group: id4,
			price: 9.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 1000,
			image: idImageMilkShakes1
		},
		{
			_id: new ObjectID(),
			name: 'CHOCOLATE PEANUT BUTTER MILKSHAKE',
			description: 'chocolate ice cream | peanut butter',
			group: id4,
			price: 10.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 2000,
			image: idImageMilkShakes2
		},
		{
			_id: new ObjectID(),
			name: 'SALTED CARAMEL MILKSHAKE',
			description: 'vanilla ice cream | caramel & sea salt',
			group: id4,
			price: 9.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 3000,
			image: idImageMilkShakes3
		},
		{
			_id: new ObjectID(),
			name: 'STRAWBERRY MILKSHAKE',
			description: 'coconut whipped cream | rainbow sprinkles',
			group: id4,
			price: 12.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 4000,
			image: idImageMilkShakes4
		},
		{
			_id: new ObjectID(),
			name: 'TRIPLE CHOCOLATE MILKSHAKE',
			description: 'chocolate ice cream | chocolate cookies & chocolate sauce',
			group: id4,
			price: 8.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 5000,
			image: idImageMilkShakes5
		},
		{
			_id: new ObjectID(),
			name: 'VANILLA MILKSHAKE',
			description: 'coconut whipped cream | rainbow sprinkles',
			group: id4,
			price: 7.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 6000,
			image: idImageMilkShakes6
		},
		{
			_id: new ObjectID(),
			name: 'VEGAN COOKIES AND CREAM MILKSHAKE',
			description: 'cashew milk ice cream | chocolate cookies',
			group: id4,
			price: 9.99,
			showAtHome: false,
			createdAt: new Date().getTime() + 7000,
			image: idImageMilkShakes7
		},
	]);


	const stream1 = fs.createReadStream(__dirname + '/test_data/images/Burgers/CROCKERS.jpg');
	const stream2 = fs.createReadStream(__dirname + '/test_data/images/Burgers/MANLY.jpg');
	const stream3 = fs.createReadStream(__dirname + '/test_data/images/Burgers/PLAIN & SIMPLE.jpg');
	const stream4 = fs.createReadStream(__dirname + '/test_data/images/Burgers/SUNNY SIDE.jpg');
	const stream5 = fs.createReadStream(__dirname + '/test_data/images/Burgers/THE BEEFY.jpg');
	const stream6 = fs.createReadStream(__dirname + '/test_data/images/Burgers/THROWBACK.jpg');
	const stream7 = fs.createReadStream(__dirname + '/test_data/images/Burgers/TRUFFLE.jpg');
	const stream8 = fs.createReadStream(__dirname + '/test_data/images/Burgers/WAG-YU-MAMI.jpg');
	const stream9 = fs.createReadStream(__dirname + '/test_data/images/Burgers/THE CALI.jpg');
	const stream10 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE BURGER.jpg');
	const stream11 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE CLASSIC CHEESEBURGER.jpg');
	const stream12 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE TRUFFLEMAKER.jpg');
	const stream13 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE VEGAN BBQ.jpg');

	
	stream1.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers1,'file1'));
	stream2.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers2,'file2'));
	stream3.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers3,'file3'));
	stream4.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers4,'file4'));
	stream5.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers5,'file5'));
	stream6.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers6,'file6'));
	stream7.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers7,'file7'));
	stream8.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers8,'file8'));
	stream9.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers9,'file9'));
	stream10.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers10,'file10'));
	stream11.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers11,'file11'));
	stream12.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers12,'file12'));
	stream13.pipe(gridFSBucket.openUploadStreamWithId(idImageBurgers13,'file13'));




	const stream14 = fs.createReadStream(__dirname + '/test_data/images/Fries/THIN AND CRISPY FRIES.jpg');
	const stream15 = fs.createReadStream(__dirname + "/test_data/images/Fries/LOAD 'EM FRIES.jpg");
	const stream16 = fs.createReadStream(__dirname + "/test_data/images/Fries/MAKE 'EM MESSY FRIES.jpg");
	const stream17 = fs.createReadStream(__dirname + "/test_data/images/Fries/TRUFFLE 'EM FRIES.jpg");
	const stream18 = fs.createReadStream(__dirname + "/test_data/images/Fries/SWEET POTATO FRIES.jpg");

	
	stream14.pipe(gridFSBucket.openUploadStreamWithId(idImageFries1, 'file14'));
	stream15.pipe(gridFSBucket.openUploadStreamWithId(idImageFries2, 'file15'));
	stream16.pipe(gridFSBucket.openUploadStreamWithId(idImageFries3, 'file16'));
	stream17.pipe(gridFSBucket.openUploadStreamWithId(idImageFries4, 'file17'));
	stream18.pipe(gridFSBucket.openUploadStreamWithId(idImageFries5, 'file18'));



	const stream19 = fs.createReadStream(__dirname + '/test_data/images/Salads/CROCKERS TACO SALAD.jpg');
	const stream20 = fs.createReadStream(__dirname + '/test_data/images/Salads/NEW STYLE CAESAR.jpg');
	const stream21 = fs.createReadStream(__dirname + '/test_data/images/Salads/SIDE SALAD.jpg');
	const stream22 = fs.createReadStream(__dirname + '/test_data/images/Salads/ALL GREEN EVERYTHING.jpg');

	

	stream19.pipe(gridFSBucket.openUploadStreamWithId(idImageSalads1, 'file19'));
	stream20.pipe(gridFSBucket.openUploadStreamWithId(idImageSalads2, 'file20'));
	stream21.pipe(gridFSBucket.openUploadStreamWithId(idImageSalads3, 'file21'));
	stream22.pipe(gridFSBucket.openUploadStreamWithId(idImageSalads4, 'file22'));


	const stream23 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/CHOCOLATE MILKSHAKE.jpg');
	const stream24 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/CHOCOLATE PEANUT BUTTER MILKSHAKE.jpg');
	const stream25 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/SALTED CARAMEL MILKSHAKE.jpg');
	const stream26 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/STRAWBERRY MILKSHAKE.jpg');
	const stream27 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/TRIPLE CHOCOLATE MILKSHAKE.jpg');
	const stream28 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/VANILLA MILKSHAKE.jpg');
	const stream29 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/VEGAN COOKIES AND CREAM MILKSHAKE.jpg');

	

	stream23.pipe(gridFSBucket.openUploadStreamWithId(idImageMilkShakes1, 'file23'));
	stream24.pipe(gridFSBucket.openUploadStreamWithId(idImageMilkShakes2, 'file24'));
	stream25.pipe(gridFSBucket.openUploadStreamWithId(idImageMilkShakes3, 'file25'));
	stream26.pipe(gridFSBucket.openUploadStreamWithId(idImageMilkShakes4, 'file26'));
	stream27.pipe(gridFSBucket.openUploadStreamWithId(idImageMilkShakes5, 'file27'));
	stream28.pipe(gridFSBucket.openUploadStreamWithId(idImageMilkShakes6, 'file28'));
	stream29.pipe(gridFSBucket.openUploadStreamWithId(idImageMilkShakes7, 'file29'));

	console.log('DATABASE CREATED AND TEST DATA LOADED ......')

};


module.exports = seedDatabase;

