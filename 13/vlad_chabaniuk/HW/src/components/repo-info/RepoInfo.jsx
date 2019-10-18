import React, { useState } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Spinner from 'react-md-spinner'
import { object } from 'prop-types'
import { updateIsStarredState } from '../../javascripts/utils'

const REPO_QUERY = gql`
  query Repository($owner: String! $name: String!) {
    repository(owner: $owner name: $name) {
      id
      name
      description
      forkCount
      homepageUrl
      licenseInfo {
        key
      }
      owner {
        login
        url
      }
      languages(first: 10) {
        edges {
          node {
            name
          }
        }
      }
      createdAt
      updatedAt
    }
  }
`

const propTypes = { match: object }

const RepoInfo = ({ match }) => {
  const { owner, name } = match.params
  const [isStarred, setIsStarred] = useState(localStorage.getItem(name))

  return (
    <Query
      query={REPO_QUERY}
      variables={{ owner, name }}
    >
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <div className='text-center mt-3'>
              <Spinner size={80}/>
            </div>
          )
        }

        if (error) {
          return <h3 className='text-center'>Error</h3>
        }

        if (data) {
          const {
            id,
            name,
            description,
            owner,
            languages,
            forkCount,
            updatedAt,
            createdAt,
            homepageUrl,
            licenseInfo
          } = data.repository
          const langs = languages.edges.map(({ node }) => node.name)

          return (
            <div className='col card card-body mb-4 p-4 search-card'>
              <h2 className='display-4 text-center'>
                <i
                  className={`fa${isStarred ? 's' : 'r'} fa-star`}
                  title={`${isStarred ? 'Remove from' : 'Add to'} favorites`}
                  onClick={() => updateIsStarredState(
                    isStarred,
                    localStorage,
                    id,
                    name,
                    description,
                    licenseInfo,
                    owner,
                    languages,
                    setIsStarred
                  )()}
                />
                {name}
              </h2>
              <p className='lead text-center'>{description}</p>
              <ul className='list-group mt-4 tg'>
                <li className='list-group-item'>
                  <strong>
                    <i className='fas fa-globe'/>
                  &nbsp;Homepage:&nbsp;
                  </strong>
                  <a rel='noopener noreferrer' target='_blank' href={homepageUrl}>{homepageUrl}</a>
                </li>
                <li className='list-group-item'>
                  <strong>
                    <i className='fas fa-user'/>
                  &nbsp;Owner:&nbsp;
                  </strong>
                  {owner.login}
                </li>
                <li className='list-group-item'>
                  <strong>
                    <i className='fas fa-file-alt'/>
                  &nbsp;Languages:&nbsp;
                  </strong>
                  {langs.join(', ')}
                </li>
                <li className='list-group-item'>
                  <strong>
                    <i className='fas fa-code-branch'/>
                  &nbsp;Forks:&nbsp;
                  </strong>
                  {forkCount}
                </li>
                <li className='list-group-item'>
                  <strong>
                    <i className='fas fa-calendar-plus'></i>
                  &nbsp;Created:&nbsp;
                  </strong>
                  {new Date(createdAt).toLocaleDateString()}
                </li>
                <li className='list-group-item'>
                  <strong>
                    <i className='fas fa-calendar-check'></i>
                  &nbsp;Last commit:&nbsp;
                  </strong>
                  {new Date(updatedAt).toLocaleDateString()}
                </li>
              </ul>
            </div>

          )
        }
      }}
    </Query>
  )
}

RepoInfo.propTypes = propTypes

export default RepoInfo
