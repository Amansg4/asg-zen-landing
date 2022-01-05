import React from "react";

const LgButtons = ({ className, children, type, onClick }) => {
	return <button className={`lg-btn btn ${className || ""}`}>{children}</button>;
};

const MedButtons = ({ className, children, type, onClick }) => {
	return (
		<button className={`med-btn btn ${className || ""}`}>{children}</button>
	);
};

const SmButtons = ({ className, children, type, onClick }) => {
	return (
		<button className={`small-btn btn ${className || ""}`}>{children}</button>
	);
};

export { LgButtons, MedButtons, SmButtons };
