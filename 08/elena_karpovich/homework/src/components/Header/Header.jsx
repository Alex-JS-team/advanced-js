import React from 'react';

const Header = (props) => {
	const headerStyles = {
		background: "#3f51b5",
		color: "#fff",
		padding: "20px",
		position: "fixed",
		top: "0",
		left: "0",
		right: "0",
		textAlign: "center"
	};
	return (
		<header style={ headerStyles }>
			{ props.headerText }
		</header>
	)
}

export default Header;