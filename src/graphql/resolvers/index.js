const menuGroupResolver = require('./MenuGroup');

const menuItemResolver = require('./MenuItem');

const userResolver = require('./User');

const cartResolver = require('./Cart');

const extraResolver = require('./Extra');

const { GraphQLDate } = require('graphql-iso-date');


const customScalarResolver = {
	Date: GraphQLDate
};

module.exports = [customScalarResolver, menuGroupResolver, menuItemResolver, userResolver, cartResolver, extraResolver];