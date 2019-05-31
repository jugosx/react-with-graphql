const express = require('express');
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql');

var app = express()

app.listen(4000, ()=> console.log('berhasil berjalan'))
