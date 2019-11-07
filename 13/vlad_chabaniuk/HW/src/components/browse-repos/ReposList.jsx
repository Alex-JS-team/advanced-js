import React from 'react'
import ReposListItem from './ReposListItem'
import { array, func } from 'prop-types'

const propTypes = {
  repos: array,
  setRepos: func
}

const ReposList = ({ repos, setRepos }) => (
  <div className='row'>
    {repos.map(({ id, name, description, licenseInfo, owner, languages }) => (
      <ReposListItem
        key={id}
        id={id}
        name={name}
        description={description}
        licenseInfo={licenseInfo}
        owner={owner}
        setRepos={setRepos}
        languages={languages}
      />
    ))}
  </div>
)

ReposList.propTypes = propTypes

export default ReposList
