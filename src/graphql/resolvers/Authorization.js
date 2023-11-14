const { ApolloError } = require('apollo-server-express');
const { skip, combineResolvers } = require('graphql-resolvers');


const isAuthenticated = (parent, args, { me }) => {


    return me ? skip : new ApolloError('Authentication Required', 'AUTHENTICATION_REQUIRED');

};


const isAdmin = combineResolvers(
    isAuthenticated,
    (parent, args, { me }) => {

        const { role } = me;

        if (role === 'ADMIN') {
            
            return skip;

        }

        throw new ApolloError('User is not an Admin!', 'USER_IS_NOT_ADMIN');

    }
);


module.exports = {
    isAuthenticated,
    isAdmin
};