const express = require('express');
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql');

const app = express()

//Sumber Data
let forumData = [
  {id: "1", title:"Cara Belajar", desc:"Bagaimana cara belajar yang baik"},
  {id: "2", title:"Apa Sekarang", desc:"Sekarang harus belajar"},
  {id: "3", title:"Mulai Dari Mana", desc:"Saya Bingung Mulai Dari mana"},
]
let schema = buildSchema(`
    type Forum {
      id: ID,
      title: String,
      desc: String
    }
    type Query {
      forums: [Forum]
    }
  `)
let resolvers = {
  forums: () => forumData
}
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))
app.listen(4000, ()=> console.log('berhasil berjalan'))
