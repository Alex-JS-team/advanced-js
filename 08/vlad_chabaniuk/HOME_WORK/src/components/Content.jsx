import React, { useState, useEffect } from 'react'
import users from '../static/users.json'
import UsersList from './users-list/UsersList'
import FilterSelect from './filter-select/FilterSelect'

const Content = () => {
  const [usersToRender, setUsersToRender] = useState(users)
  const [ageFilter, setAgeFilter] = useState(null)

  useEffect(() => {
    if (ageFilter) {
      setUsersToRender(users.filter(({ age }) => age === ageFilter))
    } else {
      setUsersToRender(users)
    }
  }, [ageFilter])

  return (
    <main className='container mt-5'>
      <FilterSelect 
        ages={[...new Set(users.map(({ age }) => age))]} 
        setAgeFilter={setAgeFilter} 
      />
      <UsersList usersToRender={usersToRender} />
    </main>
  )
}

export default Content
