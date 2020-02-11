require('custom-env').env(true, __dirname + './../../');

// const randomstring = require('randomstring');

const path = require('path');

const nconf = require('nconf');


nconf.argv()
    .env()
    .file( { file: path.join(__dirname + './../../' + 'config.json')});

// nconf.set('RANDOM_STRING10', randomstring.generate(10));

nconf.defaults({

        CONFIG1: "YYYYYYY"
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

    },
    db: {
        DB_NAME: nconf.get('DB_NAME')       
    },
    user: {
        
    }
};