require('custom-env').env(true, __dirname + './../../');

// const randomstring = require('randomstring');

const path = require('path');

const nconf = require('nconf');


nconf.argv()
    .env()
    .file( { file: path.join(__dirname + './../../' + 'config.json')});

// nconf.set('RANDOM_STRING10', randomstring.generate(10));

nconf.defaults({

		CONFIG1: "YYYYYYY",
		DB_NAME: "crockers-database",
		Menu_Item_Image_Max_Size_MBytes: 20,
        Erase_And_Seed_Database_on_Startup: true,
        Client_URL: "http://localhost:3000"
});

const env = nconf.get('NODE_ENV') || 'development';

let mongoUri = nconf.get('MONGODB_URI');

if (env === 'development') {
    mongoUri = nconf.get('MONGODB_URI') + '/' + nconf.get('DB_NAME');
} else if (env === 'test') {
    mongoUri = nconf.get('MONGODB_URI') + '/' + nconf.get('DB_NAME') + '-Test';
}

console.log('env *****', env);
console.log('PORT = ', nconf.get('PORT'));
console.log('MONGODB_URI = ', mongoUri);
// console.log('RANDOM_STRING = ', nconf.get('RANDOM_STRING10'));


module.exports = {

    env: {
        NODE_ENV: env,
        MONGODB_URI: mongoUri,
        PORT: nconf.get('PORT'),
    },
    general: {
        Client_URL: nconf.get('Client_URL')
    },
    db: {
		DB_NAME: nconf.get('DB_NAME'),
		Erase_And_Seed_Database_on_Startup: nconf.get('Erase_And_Seed_Database_on_Startup')       
    },
    user: {
        
	},
	app: {
		items: {
			MENU_ITEM_IMAGE_MAX_SIZE_MBYTES: nconf.get('Menu_Item_Image_Max_Size_MBytes')
        }
	}
};