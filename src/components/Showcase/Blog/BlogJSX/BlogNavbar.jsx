import React from "react";
import { Link } from "react-router-dom";

const BlogNavbar = (props) => {
	const insertJsDynamicStyling = {
		color: "white",
		backgroundColor: "blue",
		borderRadius: "8px",
		padding: "0.35rem",
		margin: "0.35rem",
		fontSize: "1.2rem",
	};
	return (
		<React.Fragment>
			<nav className="blog text-center w-full bg-sunrise rounded-b-3xl border-b-8 border-double border-base-shaded">
				<h1 className="blog text-base-toned text-6">GlobLob Blog!</h1>
				<div className="blog flex-row-center pb-2">
					<Link alt="#" to="/" name="blogHome" className="blog ">
						Home
					</Link>
					<Link
						alt="#"
						to="/create"
						style={insertJsDynamicStyling}
						name="blogCreate"
						className="blog "
					>
						New Blog
					</Link>
					<Link alt="#" to="/" className="blog ">
						Another Link
					</Link>
					<Link alt="#" to="/" className="blog ">
						Another Link
					</Link>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default BlogNavbar;
