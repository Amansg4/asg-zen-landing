import React from "react";
import BookContextProvider from "../ReadingListContext/BookContext";

import BookListRL from "../ReadingListJSX/BookListRL";
import NavbarRL from "../ReadingListJSX/NavbarRL";

const ReadingList = () => {
	return (
		<React.Fragment>
			<div className="flex flex-col justify-center ">
				<BookContextProvider>
					<NavbarRL />
					<BookListRL />
				</BookContextProvider>
			</div>
		</React.Fragment>
	);
};

export default ReadingList;
