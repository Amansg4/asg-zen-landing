import React, { useContext } from "react";
import { BookContext } from "../ReadingListContext/BookContext";
import BookDetails from "./BookDetailsRL";

const BookListRL = () => {
	const { books } = useContext(BookContext);
	return books.length ? (
		<div className="text-red-500 ">
			<ul className="flex flex-col items-center">
				{books.map((book) => {
					return <BookDetails book={book} key={book.id} />;
				})}
			</ul>
		</div>
	) : (
		<div>No books to read homie!</div>
	);
};

export default BookListRL;
