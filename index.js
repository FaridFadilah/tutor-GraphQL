import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { books, authors } from './data.js'
import { schema } from 'graphql-tools'
import { BookController } from './controllers/book.controller.js'

const resolvers = {
  Query: BookController
}

const typeDefs = schema

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const url = await startStandaloneServer(server, {
  listen:{
    port:4000
  }
})

console.log(`server already running in ${url.url}`)