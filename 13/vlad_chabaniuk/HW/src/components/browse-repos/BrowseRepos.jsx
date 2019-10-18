import React, { useState } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import ReposList from './ReposList'
import Spinner from 'react-md-spinner'

const SEARCH_REPOS = gql`
  query listRepos($queryString: String!) {
    search (query: $queryString, type: REPOSITORY, first: 20) {
      repositoryCount
      edges {
        node {
        ... on Repository {
          id
          name
          description
          url
          owner {
            login
            url
          }
          licenseInfo {
            key
          }
          languages(first: 10) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
`

const BrowseRepos = () => {
  const [queryString, setQueryString] = useState('')

  return (
    <>
      <div className='col card card-body mb-4 p-4 search-card'>
        <h2 className='display-4 text-center'>Browse Repositories</h2>
        <p className='lead text-center'>Start typin&apos; to get the results</p>
        <div className='container mb-3'>
          <div className='md-form'>
            <input
              type='text'
              id='searchInput'
              className='form-control'
              onChange={e => setQueryString(e.target.value)}
            />
            <label htmlFor='searchInput'>Name of a repo...</label>
          </div>
        </div>
      </div>
      <div className='container'>
        <Query
          query={SEARCH_REPOS}
          variables={{ queryString: queryString || 'is:public' }}
        >
          {({ loading, error, data }) => {
            if (loading) {
              return (
                <div className='text-center'>
                  <Spinner size={80}/>
                </div>
              )
            }

            if (error) {
              return <h3 className='text-center'>Error</h3>
            }

            if (data) {
              const { repositoryCount, edges } = data.search
              const repos = edges.map(({ node }) => ({
                ...node,
                languages: node.languages.edges.map(({ node }) => node.name)
              }))

              if (repos.length < 1) {
                return <h3 className='text-center mt-2'>Nothing to display ¯\_(ツ)_/¯</h3>
              }

              return (
                <>
                  <h3 className='text-center mt-2 mb-3'>Showing {repositoryCount} repos</h3>
                  <ReposList repos={repos}/>
                </>
              )
            }
          }}
        </Query>
      </div>
    </>
  )
}

export default BrowseRepos
