const { gql } = require('apollo-server-express');


const schema = gql`


type Query {
	getAllMenuGroups: [MenuGroup]
	getMenuItemsByGroup(groupId: ID!,first: Int, last: Int, after: String, before: String): MenuItemConnection!
	getMenuItemsShowAtHome: [MenuItem]
}

type Mutation {
	addNewMenuGroup(input: newMenuGroupInput): AddNewMenuGroupMutationResponse!
	addNewMenuItem(input: newMenuItemInput): AddNewMenuItemMutationResponse!
}

input newMenuGroupInput {
	name: String!
	description: String
}

input newMenuItemInput {
	name: String!
	description: String
	group: ID!
	price: Float		
}

interface MutationResponse {
	code: String!
	success: Boolean!
	message: String!
}

type AddNewMenuGroupMutationResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!
	group: MenuGroup
}

type AddNewMenuItemMutationResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!
	item: MenuItem
}

type PageInfo {
	endCursor: String
	hasNextPage: Boolean!
	hasPreviousPage: Boolean!
	startCursor: String
}


type MenuItemConnection {
	edges: [MenuItemEdge]
	nodes: [MenuItem]
	pageInfo: PageInfo!
	totalCount: Int!
}

type MenuItemEdge {
	node: MenuItem!
	cursor: String!
}

type MenuGroup {
	id: ID!
	name: String!
	description: String
}

type MenuItem {
	id: ID!
	name: String!
	description: String
	group: MenuGroup!
	price: Float!
	image: ID
	showAtHome: Boolean!
}

`;


module.exports = schema;

