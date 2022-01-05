import React from "react";
/* import toggle from "../img/toggle.svg"; */
import { useState } from "react";

const ZenToggle = ({
	props,
	children,
	className,
	toggleID,
	infoID,
	toggleText,
	color,
	activeToggle,
	activeInfoContent,
	isMounted,
	setIsMounted,
	setActiveInfoContent,
	setActiveToggle,
}) => {
	const [clickedToggleColor, setClickedToggleColor] = useState("Zen Central");

	const clickToggleCheck = () => {
		activeToggle === toggleID
			? console.log(`Already ${toggleID}`)
			: console.log(`Changing to ${toggleID}!!!!`);
	};

	const checkCurrentMount = () => {
		console.log(
			`Initial Check:
			Removing since
			activeToggle ${activeToggle} 
			Initialized: ${toggleID}
			isMounted: ${isMounted}`
		);
		if (activeToggle === toggleID && isMounted === true) {
			setIsMounted(!isMounted);
		} else if (activeToggle === toggleID && isMounted === false) {
			setIsMounted(!isMounted);
		} else if (activeToggle !== toggleID && isMounted === true) {
			setIsMounted(isMounted);
		} else if (activeToggle !== toggleID && isMounted === false) {
			setIsMounted(!isMounted);
		}
		setTimeout(() => {
			console.log(
				`Convert/Revised Check:
			activeToggle:${activeToggle}   
			Toggle Result: ${toggleID} 
			isMounted: ${isMounted}
			activeInfoContent: ${activeInfoContent}`
			);
		}, 4000);
	};

	const activatingToggle = (e) => {
		console.log(`Changing from ${clickedToggleColor}`);
		setClickedToggleColor(color);
		setActiveToggle(toggleID);
		setActiveInfoContent(infoID);
	};

	return (
		<form
			className={`toggle ${toggleText}  ${className || ""}`}
			activeToggle={activeToggle}
			toggleID={toggleID}
		>
			<input type="button" hidden />
			<button
				className="w-full h-full"
				type="button"
				onClick={(e) => {
					checkCurrentMount(activeToggle, toggleID);
					activatingToggle(clickedToggleColor, color, toggleID, infoID);
					clickToggleCheck(activeToggle, toggleID);
				}}
			></button>
			{children}
		</form>
	);
};

export { ZenToggle };
