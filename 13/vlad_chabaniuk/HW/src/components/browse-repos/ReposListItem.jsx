import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { updateIsStarredState } from '../../javascripts/utils'
import { string, func, object, array } from 'prop-types'

const propTypes = {
  id: string,
  name: string,
  description: string,
  owner: object,
  languages: array,
  licenseInfo: object,
  setRepos: func
}

const ReposListItem = ({
  id,
  name,
  description,
  licenseInfo,
  owner,
  languages,
  setRepos
}) => {
  const [isStarred, setIsStarred] = useState(localStorage.getItem(name))

  return (
    <div key={id} className='col-md-6'>
      <div className='card mb-4'>
        <div className='card-body'>
          <h5 className='catd-title'>
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
              )(setRepos)}
            />
            &nbsp;
            {name}
          </h5>
          <p className='card-text'>
            {description || 'No info'}
          </p>
          <p className='card-text'>
            <strong><i className='fas fa-toilet-paper' /> License</strong>: {licenseInfo ? licenseInfo.key.toUpperCase() : 'No licence info'}
            <br />
            <strong><i className='fas fa-user' /> Owner</strong>: {owner ? owner.login : 'No owner info'}
            <br />
            <strong><i className='fas fa-file-alt'></i> Language</strong>: {languages ? languages[0] : 'Other'}
          </p>
          <Link to={`repo/${owner.login}/${name}`} className='btn btn-dark btn-block waves-effect'>
            <i className='fas fa-chevron-right' /> More Info
          </Link>
        </div>
      </div>
    </div>
  )
}

ReposListItem.propTypes = propTypes

export default ReposListItem
