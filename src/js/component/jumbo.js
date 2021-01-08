import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	return (
		<div className=" d-flex flex-column align-items-center justify-content-center mx-2">
			<div className="jumbotron">
				<h1 className="display-4">
					Welcome to the Simple Landing Page
				</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4" />
				<p>
					It uses utility classes for typography and spacing to space
					content out within the larger container.
				</p>
				<a
					className="btn btn-outline-success btn-lg"
					href="#"
					role="button">
					Call to Action!
				</a>
			</div>
		</div>
	);
};

Jumbo.propTypes = {
	name: PropTypes.string
};

export default Jumbo;
