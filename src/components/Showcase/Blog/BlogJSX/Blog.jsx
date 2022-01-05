import React from "react";
import BlogNavbar from "./BlogNavbar";
import BlogHome from "./BlogHome";
import BlogCreate from "./BlogCreate";
import BlogDetails from "./BlogDetails";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";

//**** Blog Project-----------------
/* This project was intended to explain routing using various methods including external dependencies in conjunction with fetch requests using the useEffect statement. 
	Learned the following basics
		/*CRUD OPERATIONS
		-useEffect to fetch data
		-fetch data errors that can occur along the way and how to debug and isolate them with console info given back
		-Breaking down larger react components into more basic forms -  could still improve 
		dramatically by having  // W: SIMPLE NAMING CONVENTIONS and CLEAR COMPONENT ABSTRACTIONS!
		-JSON Database to mimic access to a db [AND FINALLY SAVING INFO IN SOME FORM!]
		-Deleting and creating new states using interactive elements in conjuction with useState and useEffect hooks
		-created a custom Hook, or the useFetch hook, to assist in fetching data.
		Q: Can surely improve styling but as this was an earlier attempt at using tailwind, it obviously is a mess with naming conventions and styling (experimenting with adding shade gradients LOL) Should really just start from scratch and that will both reduce the need to clean code and help me practice CRUD operations again. But I really do like how I added comments to this. REally improves my ability to remember clearly my focus on what I was doing and why, even with the blocked codes of simpler or more elementary conventions. 
		!: NEED TO FIND OUT THE useHistory error that occurs when I submit a new blog, data is added to the db but and error concerning useHistory not being a function is probably due to the cursed react-router-dom dependency that changed to useNavigate so the .push method to the Blog Home is not executing. Probably changed to a different method. CHEcK AND FIX!
	/* 
	//***----------------- 
*/
const Blog = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col flex-grow w-full items-center bg-base-tinted border-8 border-slate-900">
				<BlogNavbar />
				<Routes>
					<Route exact path="/" element={<BlogHome />} />
					<Route path="/create" element={<BlogCreate />} />
					<Route path="/blogs/:id" element={<BlogDetails />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</React.Fragment>
	);
};

export default Blog;

// Potential wrapping div for styling
//<div className="blog-container"></div>
