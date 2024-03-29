const { gql } = require('apollo-server-express');

const schema = gql`
scalar Date

type Query {
	getAllMenuGroups: [MenuGroup]
	getMenuItemsByGroup(groupId: ID!,first: Int, last: Int, after: String, before: String): MenuItemConnection!
	getMenuItemsShowAtHome: [MenuItem]
	getIfUserExists(username: String!, email: String!): UserExistResponse!
	me: BasicUser
	getUser: User
	getCart(userId: ID!): [Cart]!
	getCartTotals(userId: ID!): CartTotals!
	getExtrasByItem(itemId: ID!): [Extra]!	
}

type Mutation {
	addNewMenuGroup(input: newMenuGroupInput): AddNewMenuGroupMutationResponse!
	addNewMenuItem(input: newMenuItemInput): AddNewMenuItemMutationResponse!
	signUp(input: signUpInput!): logInResponse!
	logIn(login: String!, password: String!): logInResponse!
	addCartLine(input: cartLineInput!): addCartLineResponse!
	deleteCartLine(lineId: ID!): deleteCartLineResponse!
	updateCartLine(lineId: ID!, quantity: Int!): updateCartLineResponse!
	deleteCart(userId: ID!): deleteCartResponse!
	addManyExtrasToCart(cartLineId: ID!, extrasIdArray: [ID!]!): addExtrasResponse!
	removeManyExtrasFromCart(cartLineId: ID!, extrasIdArray: [ID!]!): removeExtrasResponse!
	removeAllExtrasFromCart(cartLineId: ID!): removeExtrasResponse!
	updateCommentsToCart(cartLineId: ID!, comments: String!): updateCartLineResponse!
}

type Extra {
	id: ID!
	group: ID!
	name: String!
	price: Float!
}

type Cart {
	id: ID!
	menuItem: CartMenuItem!
	quantity: Int!
	price: Float!
	tax: Float!
	itemTotal: Float!
}

type CartMenuItem {
	id: ID!
	name: String!
	image: ID
}

type CartTotals {
	count: Float!
	subtotal: Float!
	tax: Float!
	total: Float!
}

input cartLineInput {
	userId: ID!
	itemId: ID!
	quantity: Int!
	comments: String!
}

type addExtrasResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!	
}

type removeExtrasResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!	
}

type addCartLineResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!
	cartLine: CartLine	
}

type CartLine {
	id: ID! 
	user: ID!
	menuItem: ID!
	quantity: Int!
	price: Float!
	tax: Float!
	comments: String!
}

type deleteCartLineResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!
}

type deleteCartResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!
}

type updateCartLineResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!
	cartLine: CartLine
}

type UserExistResponse {
	username: Boolean!
	email: Boolean!
}

input newMenuGroupInput {
	name: String!
	description: String
	image: String
}

input newMenuItemInput {
	name: String!
	description: String
	group: ID!
	price: Float		
}

input signUpInput {
	username: String!
	email: String!
	firstname: String!
	lastname: String!
	gender: Gender!
	dateOfBirth: Date!
    mainPhoneNumber: String!
    secondaryPhoneNumber: String
    password: String!
    country: String!
	region: String!
    city: String!
    zone: String!,
    mainAddress: String!,
    referencePoint: String,
    receiveNews: Boolean!
}

enum Gender {
	Male
	Female
}

enum Role {
	ADMIN
	USER
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

type logInResponse implements MutationResponse {
	code: String!
	success: Boolean!
	message: String!
	token: String
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
	image: ID
}

type MenuItem {
	id: ID!
	name: String!
	description: String
	group: MenuGroup!
	price: Float!
	tax: Float!
	image: ID
	showAtHome: Boolean!
}

type BasicUser {
	id: ID!
	username: String!
	email: String!
	firstname: String!
	lastname: String!
	role: Role!
}

type User {
	id: ID!
	username: String!
	email: String!
	firstname: String!
	lastname: String!
	gender: Gender!
	dateOfBirth: Date!
	mainPhoneNumber: String!
	secondaryPhoneNumber: String
	country: String!
	region: String!
	city: String!
	zone: String!
	mainAddress: String!
	referencePoint: String!	
	role: Role!
}

`;


module.exports = schema;

