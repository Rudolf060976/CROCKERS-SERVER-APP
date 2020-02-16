const config = require('./config/config');

const express = require('express');

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

const app = express();

app.use(express.static(path.join(__dirname,'./../','public')));

app.use(cors());

app.options('*', cors());  // AL PRINCIPIO DE TODAS LAS RUTAS


connectDB().then( async () => {

	const menuItemRoutes = require('./expressRoutes/menuItemRoutes');

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
	
	
	server.applyMiddleware({ app, path: '/graphql'});
	
	app.use('/api/menuitems', menuItemRoutes);


	app.all('*', (req, res) => { // DEBE ESTAR AL FINAL DE TODAS LAS RUTAS
		
		res.sendFile(path.join(__dirname,'./../public','index.html'));
		
	});
	
	app.listen({ port: config.env.PORT }, () => {
	
		console.log('Apollo Server on http://localhost:8000/graphql');
	
	});

});


