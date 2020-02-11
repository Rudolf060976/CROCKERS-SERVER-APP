const { gql } = require('apollo-server-express');


const schema = gql`
type Query {
	me: User
}	
type User {
	username: String!
}

`;


module.exports = schema;

