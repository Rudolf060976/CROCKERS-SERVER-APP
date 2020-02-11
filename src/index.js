const config = require('./config/config');

const express = require('express');

const { ApolloServer, gql } = require('apollo-server-express');

const schema = require('./graphql/schema');

const { ObjectID } = require('mongodb');

const path = require('path');

const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname,'./../','public')));

app.use(cors());

app.options('*', cors());  // AL PRINCIPIO DE TODAS LAS RUTAS




	const resolvers = {
		Query: {
			me: () => {

				return {
					username: 'Robin Wieruch'
				};
			}
		}
	};

	const server = new ApolloServer({
		typeDefs: schema,
		resolvers,
		context: ({ req }) => {
			return {
				ObjectID
			}
		}
	});


	server.applyMiddleware({ app, path: '/graphql'});

	app.all('*', (req, res) => { // DEBE ESTAR AL FINAL DE TODAS LAS RUTAS
	
		res.sendFile(path.join(__dirname,'./../public','index.html'));
	
	});

	app.listen({ port: config.env.PORT }, () => {

		console.log('Apollo Server on http://localhost:8000/graphql');

	});


