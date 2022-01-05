import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useReducer,
} from "react";
import { v4 as uuid } from "uuid";
import BookReducer from "./BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, dispatch /* setBooks */] = /* useState */ useReducer(
		BookReducer,
		[
			{ title: "Way of Kings", author: `Brandon Sanderson`, id: 1 },
			{ title: "The Truth of Meeps", author: `Brandon Sanderson`, id: 2 },
			{ title: "The Final Empire", author: `Brandon Sanderson`, id: 3 },
			{ title: "The Hero of Ages", author: `Brandon Sanderson`, id: 4 },
			{ title: "Name of The Wind", author: `Patrick Rothfuss`, id: 5 },
			{ title: "Tales of EarthSea", author: "Ursula K Guin", id: 6 },
		]
	);

	/* const addBook = (title, author) => {
		setBooks([...books, { title, author, id: uuid() }]);
	};
	const rmBook = (id) => {
		setBooks(books.filter((book) => book.id !== id));
	}; */

	useEffect(() => {
		localStorage.setItem("books", JSON.stringify(books));
	}, [books]);
	return (
		<BookContext.Provider
			value={{ books, dispatch /* addBook, rmBook,  setBooks */ }}
		>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
