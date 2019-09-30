import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'

const UsersList = () => {
	const [users, setUsers] = useState(null)
	const [filteredUsers, setFilteredUsers] = useState(null)
	const [isError, setIsError] = useState(false)

	// Fetch users when a component is mounted
	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get('https://jsonplaceholder.typicode.com/users')
				const users = res.data

				setUsers(users)
				setFilteredUsers(users)
			} catch (err) {
				setIsError(true)
			}
		})()
	}, [])

	if (isError) {
		return <h1 className='text-center'>An error occured...</h1>
	}

	if (!filteredUsers) {
		return (
			<div id='spinner' className='spinner-border' style={{width: '3rem', height: '3rem'}} role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
		)
	}

	const onChange = e => {
		const filterBy = e.target.value
		const filtered = users.filter(user => user.username.toLowerCase() === filterBy.toLowerCase())

		if (filterBy.length < 1) {
			setFilteredUsers(users)
		} else {
			setFilteredUsers(filtered)
		}
	}

	return (
		<div className='container'>
			<div className='md-form mt-0'>
				<input
					onChange={onChange} 
					className='form-control mb-2' 
					type='text' 
					placeholder='Filter by username...' 
					aria-label='Filter' 
				/>
			</div>
			<div className='card-columns'>
				{filteredUsers.length > 0 
					? filteredUsers.map(({ id, name, username, email }) => <User key={id} name={name} username={username} email={email} />)
					: <span className='text-muted'>Nothing found...</span>
				}
			</div>
		</div>
	)
}

export default UsersList