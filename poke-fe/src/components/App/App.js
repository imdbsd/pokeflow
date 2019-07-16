// @flow
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { Home, Search, Detail } from '../../pages'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Fragment>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/detail/:id" component={Detail} />
        </Router>
      </Fragment>
    </ApolloProvider>
  )
}

export default App
