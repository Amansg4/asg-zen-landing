import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../../useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
	/*  importing the useParams function as to allow the url parameter of blogs/id: to obtain relevant information and insert dynamic data into the returned render.  */
	const { id } = useParams();
	/* Using our custom hook useFetch to pass in more details using the id supplied by useParams hook */
	const {
		data: blog,
		error,
		isPending,
	} = useFetch(`http://localhost:8000/blogs/${id}`);

	const history = useNavigate();

	const blogDelete = () => {
		fetch(`http://localhost:8000/blogs/${blog.id}`, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	};

	return (
		<div className="blog flex-row-center">
			{isPending && <div className="blog text-status-wait">Loading...</div>}
			{error && <div className="blog text-status-error">{error}</div>}
			{blog && (
				<article className="blog bg-gradient-to-br from-accent-shaded to-accent-shaded via-accent-tinted  flex-col-center border-2 double-border border-base rounded-3xl w-3/4 m-2">
					<h2 className="blog ">{blog.title}</h2>
					<h4 className="blog m-0.75 p-0.125">Written by {blog.author}</h4>
					<p className="blog indent-3 py-0.5 px-2 m-1">{blog.body}</p>
					<p className="blog text-1">BlogID: {id}</p>
					<button className="blog delete" onClick={() => blogDelete()}>
						Delete This Blog
					</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
