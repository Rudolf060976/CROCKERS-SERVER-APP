const mongoose = require('mongoose');
const MongoGridFSStore = require('mongo-gridfs-storage');
const fs = require('fs');

const models = require('./models');
const crudOperations = require('./crudOperations');

const { ObjectID } = require('mongodb');


const seedDatabase = async () => {

	const gfs = new MongoGridFSStore(mongoose.connection.db, { bucketName: 'images'});

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
			showAtHome: false,
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


	const stream1 = fs.createReadStream(__dirname + '/test_data/images/Burgers/CROCKERS.png');
	const stream2 = fs.createReadStream(__dirname + '/test_data/images/Burgers/MANLY.png');
	const stream3 = fs.createReadStream(__dirname + '/test_data/images/Burgers/PLAIN & SIMPLE.png');
	const stream4 = fs.createReadStream(__dirname + '/test_data/images/Burgers/SUNNY SIDE.png');
	const stream5 = fs.createReadStream(__dirname + '/test_data/images/Burgers/THE BEEFY.png');
	const stream6 = fs.createReadStream(__dirname + '/test_data/images/Burgers/THROWBACK.png');
	const stream7 = fs.createReadStream(__dirname + '/test_data/images/Burgers/TRUFFLE.png');
	const stream8 = fs.createReadStream(__dirname + '/test_data/images/Burgers/WAG-YU-MAMI.png');
	const stream9 = fs.createReadStream(__dirname + '/test_data/images/Burgers/THE CALI.png');
	const stream10 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE BURGER.png');
	const stream11 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE CLASSIC CHEESEBURGER.png');
	const stream12 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE TRUFFLEMAKER.png');
	const stream13 = fs.createReadStream(__dirname + '/test_data/images/Burgers/IMPOSSIBLE VEGAN BBQ.png');

	await gfs.write(stream1, { id: idImageBurgers1, filename: 'file1' });
	await gfs.write(stream2, { id: idImageBurgers2, filename: 'file2' });
	await gfs.write(stream3, { id: idImageBurgers3, filename: 'file3' });
	await gfs.write(stream4, { id: idImageBurgers4, filename: 'file4' });
	await gfs.write(stream5, { id: idImageBurgers5, filename: 'file5' });
	await gfs.write(stream6, { id: idImageBurgers6, filename: 'file6' });
	await gfs.write(stream7, { id: idImageBurgers7, filename: 'file7' });
	await gfs.write(stream8, { id: idImageBurgers8, filename: 'file8' });
	await gfs.write(stream9, { id: idImageBurgers9, filename: 'file9' });
	await gfs.write(stream10, { id: idImageBurgers10, filename: 'file10' });
	await gfs.write(stream11, { id: idImageBurgers11, filename: 'file11' });
	await gfs.write(stream12, { id: idImageBurgers12, filename: 'file12' });
	await gfs.write(stream13, { id: idImageBurgers13, filename: 'file13' });




	const stream14 = fs.createReadStream(__dirname + '/test_data/images/Fries/THIN AND CRISPY FRIES.png');
	const stream15 = fs.createReadStream(__dirname + "/test_data/images/Fries/LOAD 'EM FRIES.png");
	const stream16 = fs.createReadStream(__dirname + "/test_data/images/Fries/MAKE 'EM MESSY FRIES.png");
	const stream17 = fs.createReadStream(__dirname + "/test_data/images/Fries/TRUFFLE 'EM FRIES.png");
	const stream18 = fs.createReadStream(__dirname + "/test_data/images/Fries/SWEET POTATO FRIES.png");

	await gfs.write(stream14, { id: idImageFries1, filename: 'file14' });
	await gfs.write(stream15, { id: idImageFries2, filename: 'file15' });
	await gfs.write(stream16, { id: idImageFries3, filename: 'file16' });
	await gfs.write(stream17, { id: idImageFries4, filename: 'file17' });
	await gfs.write(stream18, { id: idImageFries5, filename: 'file18' });


	const stream19 = fs.createReadStream(__dirname + '/test_data/images/Salads/CROCKERS TACO SALAD.png');
	const stream20 = fs.createReadStream(__dirname + '/test_data/images/Salads/NEW STYLE CAESAR.png');
	const stream21 = fs.createReadStream(__dirname + '/test_data/images/Salads/SIDE SALAD.png');
	const stream22 = fs.createReadStream(__dirname + '/test_data/images/Salads/ALL GREEN EVERYTHING.png');

	await gfs.write(stream19, { id: idImageSalads1, filename: 'file19' });
	await gfs.write(stream20, { id: idImageSalads2, filename: 'file20' });
	await gfs.write(stream21, { id: idImageSalads3, filename: 'file21' });
	await gfs.write(stream22, { id: idImageSalads4, filename: 'file22' });


	const stream23 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/CHOCOLATE MILKSHAKE.png');
	const stream24 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/CHOCOLATE PEANUT BUTTER MILKSHAKE.png');
	const stream25 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/SALTED CARAMEL MILKSHAKE.png');
	const stream26 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/STRAWBERRY MILKSHAKE.png');
	const stream27 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/TRIPLE CHOCOLATE MILKSHAKE.png');
	const stream28 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/VANILLA MILKSHAKE.png');
	const stream29 = fs.createReadStream(__dirname + '/test_data/images/Milkshakes/VEGAN COOKIES AND CREAM MILKSHAKE.png');

	await gfs.write(stream23, { id: idImageMilkShakes1, filename: 'file23' });
	await gfs.write(stream24, { id: idImageMilkShakes2, filename: 'file24' });
	await gfs.write(stream25, { id: idImageMilkShakes3, filename: 'file25' });
	await gfs.write(stream26, { id: idImageMilkShakes4, filename: 'file26' });
	await gfs.write(stream27, { id: idImageMilkShakes5, filename: 'file27' });
	await gfs.write(stream28, { id: idImageMilkShakes6, filename: 'file28' });
	await gfs.write(stream29, { id: idImageMilkShakes7, filename: 'file29' });


	console.log('DATABASE CREATED AND TEST DATA LOADED ......')

};


module.exports = seedDatabase;

