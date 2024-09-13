import {ApolloServer} from "@apollo/server";
import {User} from "./user"
import {Post} from "./post";

async function createApolloGraphqlServer() {
    const gqlServer = new ApolloServer({
        typeDefs: `
            ${User.typeDefs}
            type Query {
                ${User.queries},
                ${Post.queries}
            }
            type Mutation {
                ${User.mutations},
                ${Post.mutations}
            }
        `,
        resolvers: {
            Query: {
                ...User.resolvers.queries,
                ...Post.resolvers.queries
            },
            Mutation: {
                ...User.resolvers.mutations,
                ...Post.resolvers.mutations
            }
        }
    })

    await gqlServer.start()
    return gqlServer
}
export  default  createApolloGraphqlServer
