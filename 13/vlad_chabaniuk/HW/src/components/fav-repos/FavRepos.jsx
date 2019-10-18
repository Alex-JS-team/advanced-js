import React, { useState } from 'react'
import ReposList from '../browse-repos/ReposList'
import { getRespos } from '../../javascripts/utils'

const FavRepos = () => {
  const [repos, setRepos] = useState(getRespos(localStorage))

  return (
    <>
      <h3 className='text-center mt-3 mb-3'>Favorite repos</h3>
      <ReposList
        repos={repos}
        setRepos={setRepos}
      />
    </>
  )
}

export default FavRepos
