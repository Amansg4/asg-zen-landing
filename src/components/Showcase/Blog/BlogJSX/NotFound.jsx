import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="text-lg text-status-warning">
			SORRY THAT PAGE DOES NOT EXIST!
			<Link to="/">Back to Homepage!</Link>
		</div>
	);
};
