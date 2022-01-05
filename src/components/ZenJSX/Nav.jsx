import React from "react";

import { ReactComponent as AsgLogo } from "../../img/Group 13.svg";
export const Nav = () => {
	return (
		<div className="top-0 flex justify-between w-full bg-gray-700 min-h-fit sm:items-center ">
			<div className="nav-logo ">
				<AsgLogo className="" />
			</div>
			<p className="text-center">
				This creation is under development.
				<br /> Nevertheless, I invite you to <br />
				<span className="text-white">Enjoy and take a look around!</span>
			</p>
		</div>
	);
};

export default Nav;
