import { makeExecutableSchema } from "graphql-tools";
import User from "../models/user";

const resolvers = {
    Query: {
        async allUser() {
            return await User.find();
        }
    },
    Mutation: {
        async createUser(root, { input }) {
            console.log("root", root);
            console.log("input", input);
            return await User.create(input);
        }
    }
};

const typeDefs = `
    type User {
        _id: ID!
        name: String!
        age: Int!
        gender: String!
    }
    type Query {
        allUser: [User]
    }
    input UserInput {
        name: String!
        age: Int!
        gender: String!
    }
    type Mutation {
        createUser(input: UserInput): User
    }
`;

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;
