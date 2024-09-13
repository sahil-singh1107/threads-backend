import {queries} from "../user/resolvers"

export const mutations = `#graphql
       createPost(title: String!, description: String!, user: String!): String`