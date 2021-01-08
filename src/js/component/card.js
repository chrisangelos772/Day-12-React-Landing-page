import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card">
			<img
				src="https://dummyimage.com/medrect"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body d-flex flex-column align-items-center justify-content-center">
				<h5 className="card-title">Image Information</h5>
				<p className="card-text">
					Image information that describes the image above in a
					detailed manner so the user has context.
				</p>
				<a href="#" className="btn btn-primary">
					Learn more...
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string
};

export default Card;
