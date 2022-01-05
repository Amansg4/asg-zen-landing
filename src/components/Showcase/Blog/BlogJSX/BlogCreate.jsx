import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogCreate = (props) => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("Meep");
	const [body, setBody] = useState("");
	const [isPending, setIsPending] = useState(false);
	const history = useNavigate();

	const blogSubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };

		setIsPending(true);

		fetch("http://localhost:8000/blogs", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(blog),
		})
			.then(() => {
				console.log(`CHEERS! YOU ADDED A BLOG!`);
				setIsPending(false);
				history.push("/");
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return (
		<React.Fragment>
			<form className="" method="POST" onSubmit={blogSubmit}>
				<h2 className="">Create a New Blog!</h2>
				<LabelInputTitle
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
				<LabelInputAuthor
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}
				/>
				<LabelInputBody
					value={body}
					onChange={(e) => {
						setBody(e.target.value);
					}}
				/>
				{!isPending && <LabelButtonSubmit />}
				{isPending && <LabelButtonSubmitProcessing />}
				{/* Just to make sure that the useStates are dynamic and properly rerendering info upon changing input values */}
				<div className="border-emerald-700 bg-emerald-200 border-4 p-1 m-1">
					<h3 className="font-bold text-emerald-700 underline decoration-red-700 decoration-4">
						TESTING CODE
					</h3>
					<h4 className="font-bold text-emerald-700"> Title check: </h4>
					{title}
					<h4 className="font-bold text-emerald-700"> Author Check: </h4>
					{author}
					<h4 className="font-bold text-emerald-700"> Body Check:</h4>
					{body}
				</div>
			</form>
		</React.Fragment>
	);
};

const LabelInputTitle = (props) => {
	const { className } = props;
	const { title, onChange } = props;
	return (
		<React.Fragment>
			<label className={`${className || ""} blog  `} name="/">
				Blog Title:
				<input
					/* value={props.value}
						onChange={props.onChange} */
					className="blog text-center placeholder:text-center "
					type="text"
					name="/"
					value={title}
					onChange={onChange}
					placeHolder="Eye-Catching Title!"
				></input>
			</label>
		</React.Fragment>
	);
};
const LabelInputAuthor = (props) => {
	const { className } = props;
	const { author, onChange } = props;
	return (
		<React.Fragment>
			<label className={`${className || ""} blog  `} name="/">
				Author Name:
				{/* Selection element */}
				<select
					className="bg-base p-0.5 rounded-lg text-base-tinted border-base-shaded border-2"
					value={author}
					onChange={onChange}
				>
					{" "}
					<option className="bg-sky-500" value="Meep">
						Meep
					</option>
					<option className="bg-orange-500" value="Le Meep">
						Le Meep
					</option>
					<option className="bg-green-500" value="El Meepo">
						El Meepo
					</option>
				</select>
				{/* //Input Element */}
				{/* <input className="blog" type="text" name="/"></input> */}
			</label>
		</React.Fragment>
	);
};

const LabelInputBody = (props) => {
	const { className } = props;
	const { body, onChange } = props;
	return (
		<React.Fragment>
			<label className={`${className || ""} blog `} name="/">
				Body Content:
				<textarea
					className="blog indent-2"
					name="/"
					id="/"
					/* cols="20"*/
					rows="15"
					value={body}
					onChange={onChange}
					placeholder="It Saves into the Json DB! Try it!"
				></textarea>
			</label>
		</React.Fragment>
	);
};

const LabelButtonSubmit = (props) => {
	const { className } = props;
	return (
		<React.Fragment>
			<span className={`${className || ""} blog `}>
				<button type="submit">Submission Button</button>
			</span>
		</React.Fragment>
	);
};
const LabelButtonSubmitProcessing = (props) => {
	const { className } = props;
	return (
		<React.Fragment>
			<button className={`${className || ""} blog `} disabled type="submit">
				Adding Blog!
			</button>
		</React.Fragment>
	);
};

/* 
const LabelInputTorF = (props) => {
	const { className } = props;
	return (
		<React.Fragment>
			<div className={`${className || ""}  label-input-torf`}>
				<label className="label label-torf" name="/">
					True or False
					<input
						className="blog"
						type="checkbox"
						name="/"
						value="true"
					></input>
				</label>
			</div>
		</React.Fragment>
	);
};

const LabelInputNumber = (props) => {
	const { className } = props;
	return (
		<React.Fragment>
			<div className={`${className || ""}  label-input-number `}>
				<label className="label-number" name="">
					Number
					<input className="input-number input" type="number" name=""></input>
				</label>
			</div>
		</React.Fragment>
	);
};

const LabelInputType = (props) => {
	const { className } = props;
	return (
		<React.Fragment>
			<div className={`${className || ""}  label-input-type`}>
				<label className="label-type label" name="/">
					Label
					<input className="input-type input" type="text" name="/"></input>
				</label>
			</div>
		</React.Fragment>
	);
}; */

export default BlogCreate;
