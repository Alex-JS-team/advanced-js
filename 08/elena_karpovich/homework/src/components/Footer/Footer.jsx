import React from 'react';

const Footer = (props) => {
	const year = new Date().getFullYear();
	const footerStyles = {
		background: "#333",
		color: "#fff",
		padding: "20px",
		position: "absolute",
		bottom: "0",
		left: "0",
		right: "0",
		textAlign: "center"
	};
	return (
		<footer style={ footerStyles }>
			{ props.footerText } { year }
		</footer>
	)
}

export default Footer;