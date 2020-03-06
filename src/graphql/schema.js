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
}

type Mutation {
	addNewMenuGroup(input: newMenuGroupInput): AddNewMenuGroupMutationResponse!
	addNewMenuItem(input: newMenuItemInput): AddNewMenuItemMutationResponse!
	signUp(input: signUpInput!): logInResponse!
	logIn(login: String!, password: String!): logInResponse!
}

type UserExistResponse {
	username: Boolean!
	email: Boolean!
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
	token: String!
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

