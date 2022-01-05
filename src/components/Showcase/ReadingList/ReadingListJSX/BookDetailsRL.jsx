import React, { useContext } from "react";
import { BookContext } from "../ReadingListContext/BookContext";

const BookDetailsRL = (props) => {
	const { book } = props;
	const { dispatch /* rmBook */ } = useContext(BookContext);
	return (
		<div className="book-detail-container">
			<div className="book-detail-title">{book.title}</div>
			<div className="book-detail-author ">{book.author}</div>
			<div className="book-detail-id ">ID: {book.id}</div>
			<button
				className="p-0.5 m-0.5 rounded-2xl text-red-900 bg-red-100 border-2 border-red-100 hover:bg-pink-800 hover:text-red-200"
				onClick={(e) => {
					/* rmBook(book.id); */
					dispatch({ type: "REMOVE_BOOK", id: book.id });
				}}
			>
				Remove Book?
			</button>
		</div>
	);
};

export default BookDetailsRL;
