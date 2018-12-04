const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLFloat,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
  //graphql
} = require('graphql')
 
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world'
        }
      },
      quoteOfTheDay: {
        type: GraphQLString,
        resolve () {
          return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within'
        }
      },
      random: {
        type: GraphQLFloat,
        resolve () {
          return Math.random()
        }
      },
      rollThreeDice: {
        type: new GraphQLNonNull(new GraphQLList(GraphQLInt)),
        resolve () {
          return JSON.stringify([1, 2, 3].map(() => 1 + Math.floor(Math.random() * 6)))
        }
      }
    }
  })
})


module.exports = schema
