import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Layout from './layouts/Layout'
import BrowseRepos from './browse-repos/BrowseRepos'
import FavRepos from './fav-repos/FavRepos'
import RepoInfo from './repo-info/RepoInfo'

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/browse'/>}/>
        <Route exact path='/browse' component={BrowseRepos} />
        <Route exact path='/favorites' component={FavRepos} />
        <Route exact path='/repo/:owner/:name' component={RepoInfo} />
      </Switch>
    </Layout>
  </Router>
)

export default App
