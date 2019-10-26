import React from "react";

const Select = props => {
	const selectStyles = {
		margin: "80px 25px 0"
	};

	const usersAge = props.users
		.map(user => user.age)
		.filter((value, index, _arr) => _arr.indexOf(value) === index);

	return (
		<div style={selectStyles} className="form-inline">
			<div className="form-group">
				<label htmlFor="selectAge" className="col-form-label mr-2">
					Age filter
				</label>
				<select
					className="form-control"
					id="selectAge"
					onChange={props.change}
				>
					<option value="all">All users</option>
					{usersAge.map(age => (
						<option value={age}>{age}</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Select;
