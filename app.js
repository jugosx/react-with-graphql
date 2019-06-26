const express = require('express');
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql');

const app = express()

//Sumber Data
let forumData = [
  {id: "1", title:"Cara Belajar", desc:"Bagaimana cara belajar yang baik", userId: '1'},
  {id: "2", title:"Apa Sekarang", desc:"Sekarang harus belajar", userId: '2'},
  {id: "3", title:"Mulai Dari Mana", desc:"Saya Bingung Mulai Dari mana", userId: '1'},
]

const userData = [
  {id: '1', name: 'naruto'},
  {id: '2', name: 'sasuke'},
]



let schema = buildSchema(`
    type Forum {
      id: ID,
      title: String,
      desc: String
    }
    type Query {
      forum(id: ID!): Forum,
      forums: [Forum]
    }
  `)
let resolvers = {
  forum: (args) => {
    return forumData.find(el => el.id == args.id)
  },
  forums: () => forumData
}
app.use('/graphql',graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))
app.listen(4000, ()=> console.log('berhasil berjalan'))
