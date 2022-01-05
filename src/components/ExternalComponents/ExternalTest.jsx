import React from "react";

const CMProtoContentTest = ({ props, children }) => {
	const bookList = [
		{ title: "Way of Kings", author: `Brandon Sanderson`, id: 1 },
		{ title: "The Truth of Meeps", author: `Brandon Sanderson`, id: 2 },
		{ title: "The Final Empire", author: `Brandon Sanderson`, id: 3 },
		{ title: "The Hero of Ages", author: `Brandon Sanderson`, id: 4 },
		{ title: "Name of The Wind", author: `Patrick Rothfuss`, id: 5 },
		{ title: "Tales of EarthSea", author: "Ursula K Guin", id: 6 },
	];
	return (
		<React.Fragment>
			<div>
				<h3 className="text-sky-600">{children}</h3>
				<h4>This is text within the external component</h4>
				{bookList.map((book) => {
					return (
						<ul>
							<li>{book.title}</li>
						</ul>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default CMProtoContentTest;
