import React from "react";

const InfoContent = ({
	props,
	className,
	activeInfoContent,
	activeToggle,
	children,
	infoID,
	color,
}) => {
	let funText = "Doing this through a function inserted between a p element";

	return (
		<div
			className={`info-box flex-wrap text-center ${activeInfoContent} ${
				className || ""
			}`}
		>
			{children}
			{/* 	{`Current Toggle: ${activeToggle}
            Current Info Box: ${activeInfoContent}`} */}
		</div>
	);
};

export default InfoContent;
