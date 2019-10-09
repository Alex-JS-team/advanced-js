import React from "react";

const Userlist = (props) => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				{props.users.map(user => (
					<div key={user.id} className="col-3 card m-2 p-0">
						<img className="card-img-top" src={user.avatar_url}/>
						<div className="card-body">
							<h5 className="card-title">{user.login}</h5>
						</div>
					</div>
				))}
			</div>
     	</div>
	)
}

export default Userlist;