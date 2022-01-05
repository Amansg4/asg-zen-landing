import React, { useContext } from "react";
import { BookContext } from "../ReadingListContext/BookContext";
import BookFormRL from "../ReadingListJSX/BookFormRL";

const NavbarRL = () => {
	const { books } = useContext(BookContext);

	return (
		<React.Fragment>
			<nav className="flex flex-col items-start sm:justify-center md:items-center ">
				<div className=" flex flex-col justify-center w-1/2 m-0.5 p-0.5 sm:text-center">
					<h1 className="text-left md:text-center text-3 ">Reading List</h1>
					<p>Currently you have {books.length} on your list!</p>
					<p className="text-1">
						{" "}
						Nothing too special, just utilizes context, hooks, useStates, reducer, and
						saves data to local state. Boo I didn't get it to save to my hard-drive.
					</p>
				</div>
				<div className=" m-0.5 p-0.5 flex flex-col justify-center items-center">
					<BookFormRL />
				</div>
			</nav>
		</React.Fragment>
	);
};

export default NavbarRL;
