var { buildSchema } = require('graphql')
 
var schema = buildSchema(`
  type Query {
    quoteOfTheDay: String
    random: Float!
    rollThreeDice: [Int]
  }
`)

// The root provides a resolver function for each API endpoint
var rootValue = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within'
  },
  random: () => {
    return Math.random()
  },
  rollThreeDice: () => {
    return [1, 2, 3].map(() => 1 + Math.floor(Math.random() * 6))
  }
}


module.exports = { schema, rootValue }
