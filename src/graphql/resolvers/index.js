const menuGroupResolver = require('./MenuGroup');

const menuItemResolver = require('./MenuItem');

const { GraphQLDate } = require('graphql-iso-date');


const customScalarResolver = {
	Date: GraphQLDate
};

module.exports = [customScalarResolver, menuGroupResolver, menuItemResolver];