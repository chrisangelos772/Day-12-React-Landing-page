import React from "react";
import PropTypes from "prop-types";

const Footer = props => {
	return (
		<footer className="footer d-flex justify-content-center ">
			<p>
				Made with the power of <i className="fas fa-coffee" /> by Chris
				Angelos
			</p>
		</footer>
	);
};

Footer.propTypes = {
	name: PropTypes.string
};

export default Footer;
