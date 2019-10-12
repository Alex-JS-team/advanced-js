import React from 'react';

const Content = (props) => {
	const contentStyles = {
		fontSize: "18px",
		margin: "30px 25px"
	};
	const users = props.users.sort((a,b) => a.name.localeCompare(b.name))
	return (		
		<main className="card" style={contentStyles}>
			<ul className="list-group list-group-flush">
				{users.map(user =>
					<li className="list-group-item" key={user.id}>{user.name}: {user.age} y.o</li>
				)}
			</ul>
		</main>
	)
}

export default Content;