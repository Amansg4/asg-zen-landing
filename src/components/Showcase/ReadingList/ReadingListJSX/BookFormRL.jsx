import React, { useState, useContext } from "react";
import { BookContext } from "../ReadingListContext/BookContext";

const BookFormRL = () => {
	const { dispatch /* addBook */ } = useContext(BookContext);
	const [author, setAuthor] = useState("");
	const [title, setTitle] = useState("");
	const submitBook = (e) => {
		e.preventDefault();
		/* addBook */ dispatch(
			{ type: "ADD_BOOK", book: { title, author } } /* title, author */
		);
		setTitle("");
		setAuthor("");
	};
	return (
		<React.Fragment>
			<form
				className="flex flex-col items-center justify-center"
				name="addBook"
				onSubmit={submitBook}
			>
				<label className="whitespace-nowrap text-1.2 sm:2">
					Title:
					<input
						className="bg-slate-300 rounded-2xl px-2 text-1.2 sm:2 m-0.5"
						type="text"
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					></input>
				</label>
				<label className="whitespace-nowrap text-1.2 sm:2">
					Author:
					<input
						className="bg-slate-300 rounded-2xl px-2 text-1.2 sm:2 mx-0.5 my-2"
						type="text"
						value={author}
						onChange={(e) => {
							setAuthor(e.target.value);
						}}
					></input>
				</label>
				<input
					className="bottom-1 w-1/4 min-w-fit text-1.2 sm:2  bg-emerald-300 rounded-2xl p-0.5"
					type="submit"
					value="Add Book"
				></input>
			</form>
		</React.Fragment>
	);
};

export default BookFormRL;
