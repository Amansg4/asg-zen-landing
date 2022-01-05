import React from "react";

const Welcome = () => {
	return (
		<div className="flex items-center justify-between w-full h-full">
			<div className="flex flex-col justify-between h-full text-left">
				<h1>Welcome</h1>
				<h3>And thanks for visiting</h3>
			</div>
			<div className="flex items-center justify-center text-center">
				<p className="link-arrow">Go ahead! Click on the spheres to navigate</p>
			</div>
		</div>
	);
};

export default Welcome;
