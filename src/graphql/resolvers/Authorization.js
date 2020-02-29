const { ForbiddenError } = require('apollo-server-express');
const { skip, combineResolvers } = require('graphql-resolvers');


const isAuthenticated = (parent, args, { me }) => {


    return me ? skip : new ForbiddenError('Authentication Required');

};


const isAdmin = combineResolvers(
    isAuthenticated,
    (parent, args, { me }) => {

        const { role } = me;

        if (role === 'ADMIN') {
            
            return skip;

        }

        throw new ForbiddenError('User is not an Admin!');

    }
);


module.exports = {
    isAuthenticated,
    isAdmin
};