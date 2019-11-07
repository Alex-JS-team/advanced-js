import React from 'react'
import ReposList from '../browse-repos/ReposList'
import { mapStateToProps } from '../../redux/store'
import { connect } from 'react-redux'
import { array } from 'prop-types'

const propTypes = { favRepos: array }

const FavRepos = ({ favRepos }) => (
  <>
    <h3 className='text-center mt-3 mb-3'>Favorite repos</h3>
    <ReposList
      repos={favRepos}
    />
  </>
)

FavRepos.propTypes = propTypes

export default connect(mapStateToProps)(FavRepos)
