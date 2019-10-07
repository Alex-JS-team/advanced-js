import React from 'react';

const User = (props) => {
	const textStyle = {textDecoration: props.checked ? 'line-through' : 'none'};
	return (
		<div className="custom-control custom-checkbox">
			<input
				type="checkbox"
				checked={props.checked}
				className="custom-control-input"
				id={props.id}
				onChange={() => props.checkHandle(props.id)}
			/>
			<label
				className="custom-control-label"
				style={textStyle}
				htmlFor={props.id}>
				User name: {props.name}
			</label>
			<h1>{props.checked}</h1>
		</div>
	)
};

export default User;