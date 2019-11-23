var express = require("express");
var router = express.Router();

// step1
// router.use("/", (req, res, next) => {
//     console.log("step1");
//     var { graphql, buildSchema } = require("graphql");
//     let schema = buildSchema(`
//         type Query {
//             hello: String
//         }
//     `);
//     let root = { hello: () => "Hello GraphQL" };
//     graphql(schema, "{hello}", root).then(res => {
//         console.log(res);
//     });
//     next();
// });
// step1

// step2
// console.log("step2");
// import graphqlHTTP from "express-graphql";
// import { buildSchema } from "graphql";
// let schema = buildSchema(`
//     type Query {
//         hello: String
//     }
// `);
// let root = { hello: () => "Hello GraphQL" };
// router.use(
//     "/graphql",
//     graphqlHTTP({
//         schema: schema,
//         rootValue: root,
//         graphiql: true
//     })
// );
// // baseUrl/graphql <- 브라우저 접속
// // query { hello } #작성후 play 클릭
// // return { "data": {"hello": "Hello GraphQL"}}
// step2

module.exports = router;
