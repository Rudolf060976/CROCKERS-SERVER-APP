const config = require('./config/config');

const express = require('express');

const logger = require('morgan');

const { ApolloServer, gql } = require('apollo-server-express');

const schema = require('./graphql/schema');

const { ObjectID } = require('mongodb');

const { connectDB, mongoose } = require('./database/mongoose');

const models = require('./database/models');

const resolvers = require('./graphql/resolvers');

const crudOperations = require('./database/crudOperations');

const helperFunctions = require('./graphql/helpers');

const path = require('path');

const cors = require('cors');


const eraseDatabase = require('./database/eraseDatabase');

const seedDatabase = require('./database/seedDatabase');

const corsOptions = {
    origin: config.general.Client_URL,
    credentials: true
};

connectDB().then( async () => {
	

	if (config.db.Erase_And_Seed_Database_on_Startup) {

		await eraseDatabase();

		await seedDatabase();
	}

	const server = new ApolloServer({
		typeDefs: schema,
		resolvers,
		context: ({ req }) => {
			return {
				ObjectID,
				models,
				crudOperations,
				mongoose,
				helperFunctions
			};
		}
	});

	const app = express();
	
	app.use(logger('dev'));
		
	const menuItemRoutes = require('./expressRoutes/menuItemRoutes');


	server.applyMiddleware({ app, path: '/graphql', cors: corsOptions });

	
	app.use(express.static(path.join(__dirname,'./../','public')));

	
	app.use(cors(corsOptions));


	app.options('*', cors(corsOptions));  // AL PRINCIPIO DE TODAS LAS RUTAS


	app.use('/api/menuitems', menuItemRoutes);


	app.all('*', (req, res) => { // DEBE ESTAR AL FINAL DE TODAS LAS RUTAS
		
		res.sendFile(path.join(__dirname,'./../public','index.html'));
		
	});
	

	app.listen({ port: config.env.PORT }, () => {
	
		console.log('Apollo Server on http://localhost:8000/graphql');
	
	});

});


