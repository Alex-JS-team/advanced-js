import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Layout from './layouts/Layout'
import BrowseRepos from './browse-repos/BrowseRepos'
import FavRepos from './fav-repos/FavRepos'
import RepoInfo from './repo-info/RepoInfo'
import { connect } from 'react-redux'
import { mapStateToProps } from '../redux/store'

const App = ({ favRepos }) => {
  useEffect(
    () => localStorage.setItem('favRepos', JSON.stringify(favRepos)), 
    [favRepos]
  )

  useEffect(() => {
    console.log(favRepos)
  }, [favRepos])

  return (
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
}

export default connect(mapStateToProps)(App)
