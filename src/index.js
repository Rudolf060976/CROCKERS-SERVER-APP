const config = require('./config/config');

const express = require('express');

const logger = require('morgan');

const { ApolloServer, AuthenticationError } = require('apollo-server-express');

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

const userTokens = require('./modules/JWT/userTokens');

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
		context: async ({ req }) => {

			let me = null; // me SON LOS DATOS BASICOS DEL USUARIO AUTENTICADO, SI LO HAY

			const token = req.headers['x-token'];

			if (token) {

				try {

					const payload = userTokens.verifyUserToken(token);

					if (payload) {

						const { id } = payload;

						const user = await crudOperations.User.getUserById(id);

						if (user) {

							const {
								_id,
								username,
								email,
								firstname,
								lastname,
								role								
							} = user;

							me = {
								id: _id,
								username,
								email,
								firstname,
								lastname,
								role
							};


						}

					}
					
				} catch (error) {
					
					throw new AuthenticationError('Invalid or Expired Token. Log In again');

				}

			}	// NON AUTHENTICATED USERS - WHEN me = null - MIGHT BE ABLE TO PERFORM CERTAIN TYPES OF ACIONS AT
			// THE RESOLVERS LEVEL

			return {
				ObjectID,
				models,
				crudOperations,
				mongoose,
				helperFunctions,
				me
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


