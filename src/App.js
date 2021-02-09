import React from "react"
import Container from 'react-bootstrap/Container'
import { ApolloProvider } from 'react-apollo'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-boost'
import { setContext } from 'apollo-link-context'
import Dashboard from './pages/dashboard/dashboard.component.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const httpLink = createHttpLink({
  uri:'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = `${process.env.REACT_APP_GH_API_KEY}`
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  uri: httpLink,
  link: authLink.concat(httpLink),
  cache
})

const App = () => (
  <ApolloProvider client={client}>
    <Container className="app">
      <Dashboard/>
    </Container>
  </ApolloProvider>
)


export default App
