const menuGroupResolver = require('./MenuGroup');

const menuItemResolver = require('./MenuItem');

const userResolver = require('./User');

const cartResolver = require('./Cart');

const { GraphQLDate } = require('graphql-iso-date');


const customScalarResolver = {
	Date: GraphQLDate
};

module.exports = [customScalarResolver, menuGroupResolver, menuItemResolver, userResolver, cartResolver];