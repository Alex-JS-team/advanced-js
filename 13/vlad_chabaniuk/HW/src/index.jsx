import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { BrowserRouter as Router } from 'react-router-dom'
import { setContext } from 'apollo-link-context'
import { Provider } from 'react-redux'
import store from './redux/store/index'

const defaultOptions = {
  watchQuery: {
    // fetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    // fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' })

const authLink = setContext((_, { headers }) => (
  {
    headers: {
      ...headers,
      authorization: 'bearer ad8907b6c97c36143511d57a59a314b1638eebf1'
    }
  }
))

const link = authLink.concat(httpLink)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  </Provider>,
  document.querySelector('#root')
)

serviceWorker.unregister()
