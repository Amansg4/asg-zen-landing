import React from "react";
import useFetch from "../../../useFetch";
import { Link } from "react-router-dom";

const BlogHome = (props) => {
	const {
		data: blogs,
		isPending,
		error,
	} = useFetch("http://localhost:8000/blogs");
	/* when you reference an function (to call it for a specific purpose), you automatically get an event (e) object inside the parameters of the function [e]. */
	const homeClick = (e) => {
		console.log("heyo Bubba!", e, e.target);
	};
	//using dynamic data in a function by establishing an anonymous function [see below]. But in the event of an anonymous function, the [e], goes into the first argument [see below]
	const homeClickAnonymousFunction = (myName, e) => {
		console.log("I am " + myName);
		console.log(e);
		console.log(e.target.outerHTML);
		console.log(e.target.textContent);
		console.log(e.target.innerHTML);
		console.log(e.target.type);
		console.log(e.type);
	};

	const homeClickStyle = {
		color: "white",
		backgroundColor: "#383838",
		borderRadius: "8px",
		padding: "0.35rem",
		margin: "0.25rem",
		fontSize: "1.2rem",
	};

	// This was used to render static data within the jsx file instead of using dynamic user data or database crud operations
	/* [
		{
			title: "1st Blog",
			body: "Lorem ipsum dolor sit amet.",
			author: "Meep1",
			id: 1,
		},
		{
			title: "2nd Blog",
			body: "Lorem ipsum dolor sit amet.",
			author: "Meep2",
			id: 2,
		},
		{
			title: "3rd Blog",
			body: "Lorem ipsum dolor sit amet.",
			author: "Meep3",
			id: 3,
		},
		{
			title: "4th Blog",
			body: "Lorem ipsum dolor sit amet.",
			author: "Meep2",
			id: 4,
		},
		{
			title: "5th Blog",
			body: "Lorem ipsum dolor sit amet.",
			author: "Meep1",
			id: 5,
		},
		{
			title: "6th Blog",
			body: "Lorem ipsum dolor sit amet.",
			author: "Meep2",
			id: 6,
		},
	] */

	//Using useState Hooks to map dynamic content or database crud operations
	/* 

copied this into the useFetch custom hook component and inserted the states there.

	const [blogs, setBlogs] = useState(null);

	const [name, setName] = useState("Meep1");

	const [isPending, setIsPending] = useState(true);

	const [error, setError] = useState(null);
 */
	/* 
	Used in a way to "delete" data, but really is more like filtering it out from a list and returning all values that don't match id. Need also then to remove this from the other areas the function is embedded in wherever.

	const blogDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs);
	}; */

	//This is truly a way to DELETE from database (or JSON server) via real CRUD operations

	//I just put setTimeout to see how "Loading!" text when isPending setState was false //setTimeout(() => {}, 2000);

	return (
		<React.Fragment>
			<div className="blog home-container ">
				<h4 className="blog ">Blog Home!</h4>
				<div className="blog ">
					<button className="blog " style={homeClickStyle} onClick={homeClick}>
						ClickME!
					</button>
					<button className="blog " style={homeClickStyle} onClick={() => {}}>
						USE-EFFECT DEPENDENCY Change Author!!!
					</button>
					<button
						className="blog "
						style={homeClickStyle}
						//By inserting an anonymous function with a dynamic variable inserted into parameters inline, we can get a dynamic response! notice the [e] object is in the first argument of the anonymous function. It can then be passed to following functions parameters after it is established in the opening anonymous function parameters, grabbing event methods and what not along the way
						onClick={(e) => {
							homeClickAnonymousFunction("Aman!", e);
						}}
					>
						ClickMEAgain!
					</button>
				</div>
				<div className="blog border-2 border-base m-2 rounded-3xl bg-gradient-to-b from-base-tinted to-accent-tinted">
					<h3 className="blog text-center text-base-shaded">
						Static Content: Blog Purpose
					</h3>
					<p className="blog text-left indent-3 pb-2 px-3">
						<span className="text-pink-600">
							See comments in Blog.jsx for more details on purpose and improvements.
							NEED TO START THE JSON DB... in order to fetch the data. Otherwise you
							will get my NetworkError below. Don't forget to check the console as well
							for reports.
						</span>{" "}
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde obcaecati
						maiores, nobis doloribus veritatis autem saepe vero possimus omnis fugit
						ipsam impedit temporibus, officiis ut?
					</p>
					<span className="py-0.125 px-0.5 my-1 inline-block rounded-xl text-base-shaded bg-gradient-to-r from-emerald-300 to-fuchsia-300">
						Dynamic Content Below!
					</span>
				</div>
				<div>
					{error && <div className="blog  text-red-500">{error}</div>}
					{isPending && <span className="blog ">Loading...!!</span>}{" "}
				</div>
				<div className="blog flex sm:flex-row sm:justify-evenly sm:items-start flex-col w-full">
					{blogs && [
						<div className="border-2 border-base rounded-3xl m-1 bg-sky-100 md:w-4/12">
							<h3 className="blog rounded-3xl pb-0.5 px-0.5 text-accent-shaded font-700 shadow-md inline-block">
								Entire List
							</h3>
							<BlogPreviewList
								blogs={blogs}
								title={""}
								className="border-2 border-accent"
								/* blogDelete={blogDelete} */
							/>
						</div>,
						<div className="border-2 border-base rounded-3xl m-1 md:w-4/12">
							<h3 className="blog rounded-3xl pb-0.5 px-0.5 font-700 text-accent shadow-md inline-block">
								Blogs by Author
							</h3>
							<BlogPreviewList
								blogs={blogs.filter((blog) => blog.author === "Meep I")}
								title={" List of Meep"}
								className=" border-emerald-500"

								/* blogDelete={blogDelete} */
							/>

							<BlogPreviewList
								blogs={blogs.filter((blog) => blog.author === "Le Meep")}
								title={" List of Le Meep"}
								className=" border-orange-500"
								/* blogDelete={blogDelete} */
							/>

							<BlogPreviewList
								blogs={blogs.filter((blog) => blog.author === "El Meepo")}
								title={" List of El Meepo"}
								className=" border-red-500"
								/* blogDelete={blogDelete} */
							/>

							<BlogPreviewList
								blogs={blogs.filter((blog) => blog.author === "Meepolio")}
								title={"List of Meepolio"}
								className=" border-violet-500"
								/* blogDelete={blogDelete} */
							/>
						</div>,
					]}
				</div>
			</div>
		</React.Fragment>
	);
};

const BlogPreviewList = (props) => {
	const { blogs } = props;
	const { title } = props;
	const { className } = props;
	/* const blogDelete = props.blogDelete; */

	return (
		<React.Fragment>
			<div className="min-w-max sm:w-full flex-col-center">
				<h3 className="">{title}</h3>
				{blogs.map((blog) => (
					<div
						className={`${
							className || ""
						} border-2 m-1 p-0.5 pb-3 rounded-2xl relative w-10/12`}
						key={blog.id}
					>
						<p className="blog m-1 mx-2 ">{blog.title}</p>
						<h4 className="blog m-1 ">Written by: {blog.author}</h4>
						<Link className="blog absolute bottom-0 left-0" to={`/blogs/${blog.id}`}>
							Read Blog
						</Link>
						<button
							className="blog delete absolute bottom-0 right-0"
							/* onClick={() =>  blogDelete(blog.id) } */
						>
							Delete This Blog
						</button>
					</div>
				))}
			</div>
		</React.Fragment>
	);
};

export default BlogHome;
