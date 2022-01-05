import React, { useState, useEffect } from "react";
import { ZenToggle } from "./ZenToggle";
import InfoContent from "./ZenInfoContent";
import useMountTransition from "../Hooks/useMountTransition";
import ReadingList from "../Showcase/ReadingList/ReadingListJSX/ReadingList";
import { List } from "../ExternalComponents/List";
import ContactForm from "../ExternalComponents/ContactForm";
import Welcome from "../ExternalComponents/Welcome";

const ZenCore = ({ props, className }) => {
	const [activeToggle, setActiveToggle] = useState("trueCenterToggle");
	useEffect(() => {
		if (activeToggle === "leftToggle" || activeToggle === "rightToggle") {
			const rmVerticalAxisCheck = "backstage";
		}
		const rmVerticalAxisCheck = "visible";
	}, [activeToggle]);

	useEffect(() => {
		if (setActiveToggle === "rightToggle") {
			console.log(`Right after effect!`);
		} else if (activeToggle === "leftToggle") {
			console.log(`Left after effect!`);
		} else if (activeToggle === "topToggle") {
			console.log(`Top after effect!`);
		} else if (activeToggle === "bottomToggle") {
			console.log(`Bottom after effect!`);
		} else if (activeToggle === "centerToggle") {
			console.log(`Center after effect!`);
		} else if (activeToggle === "trueCenterToggle") {
			console.log(`True center after effect!`);
		}
	}, [activeToggle]);

	const [activeInfoContent, setActiveInfoContent] = useState("trueCenterInfo");

	const [isMounted, setIsMounted] = useState(true);
	useEffect(() => {
		if (!isMounted) {
			setActiveToggle("");
			setActiveInfoContent(" ");
		}
	}, [isMounted]);
	const hasTransitionedIn = useMountTransition(isMounted, 1500);
	const [leftIsSelected, setLeftIsSelected] = useState(true);
	const [rightIsSelected, setRightIsSelected] = useState(true);
	useEffect(() => {
		if (isMounted && activeInfoContent === "leftInfo") {
			setLeftIsSelected(true);
			setRightIsSelected(false);
			/* setIsMounted(isMounted); */
		} else if (isMounted && activeInfoContent === "rightInfo") {
			setLeftIsSelected(false);
			setRightIsSelected(true);
			/* setIsMounted(isMounted); */
		} else if (window.innerWidth >= 640) {
			setLeftIsSelected(true);
			setRightIsSelected(true);
		}
	}, [leftIsSelected, activeInfoContent, isMounted]);

	let leftInfoSelected = () => {
		setLeftIsSelected(true);
		setRightIsSelected(false);
		setIsMounted(true);
	};

	let rightInfoSelected = () => {
		setLeftIsSelected(false);
		setRightIsSelected(true);
		setIsMounted(true);
	};

	const leftInfoContentAdjustments = () => {
		if (activeInfoContent !== "rightInfo") {
			return "activated";
		} else return "collapsed";
	};
	const rightInfoAdjustments = () => {
		if (activeInfoContent !== "leftInfo") {
			return "activated";
		} else return "collapsed";
	};

	const rmHorizAxisCheck = (activeToggle) => {
		if (activeToggle === "topToggle" || activeToggle === "bottomToggle") {
			return "backstage";
		} else return "visible";
	};

	const rmVerticalAxisCheck = (activeToggle) => {
		if (activeToggle === "leftToggle" || activeToggle === "rightToggle") {
			return "backstage";
		} else return "visible";
	};

	return (
		<div className={`core ${className || ""}`}>
			{(hasTransitionedIn || isMounted) && leftIsSelected && (
				<InfoContent
					name="leftInfoContent"
					activeToggle={activeToggle}
					className={`left-info-box ${hasTransitionedIn && "in"} ${
						isMounted && "mounted"
					} ${
						activeInfoContent === "trueCenterInfo" ? "w-full !absolute " : ""
					}  ${leftInfoContentAdjustments()} left top bottom center trueCenter`}
					activeInfoContent={activeInfoContent}
				>
					{activeInfoContent === "topInfo" && ""}
					{activeInfoContent === "bottomInfo" && ""}
					{activeInfoContent === "centerInfo" && <ReadingList></ReadingList>}
					{activeInfoContent === "trueCenterInfo" && <Welcome></Welcome>}
					{activeInfoContent === "leftInfo" && <ContactForm></ContactForm>}
				</InfoContent>
			)}

			<div
				className={` z-50 center-nav-toggles sm:${
					activeInfoContent === "rightInfo" || activeInfoContent === "leftInfo"
						? ""
						: "fixed "
				} ${!isMounted && "fixed bottom-[41%]"} `}
			>
				<ZenToggle
					toggleID="rightToggle"
					infoID="rightInfo"
					color="Green"
					toggleText="//Nothing Yet"
					className={`z-0 toggle-right ${rmHorizAxisCheck(activeToggle)}`}
					activeToggle={activeToggle}
					activeInfoContent={activeInfoContent}
					isMounted={isMounted}
					setIsMounted={setIsMounted}
					setActiveToggle={setActiveToggle}
					setActiveInfoContent={setActiveInfoContent}
				>
					{" "}
				</ZenToggle>

				<ZenToggle
					toggleID="leftToggle"
					infoID="leftInfo"
					color="Blue"
					className={`z-0 toggle-left ${rmHorizAxisCheck(activeToggle)}`}
					toggleText="//Nothing Yet"
					activeToggle={activeToggle}
					activeInfoContent={activeInfoContent}
					isMounted={isMounted}
					setIsMounted={setIsMounted}
					setActiveToggle={setActiveToggle}
					setActiveInfoContent={setActiveInfoContent}
				></ZenToggle>

				<ZenToggle
					toggleID="topToggle"
					infoID="topInfo"
					color="Red"
					className={`z-0 toggle-top ${rmVerticalAxisCheck(activeToggle)}`}
					toggleText="//Nothing Yet"
					activeToggle={activeToggle}
					activeInfoContent={activeInfoContent}
					isMounted={isMounted}
					setIsMounted={setIsMounted}
					setActiveToggle={setActiveToggle}
					setActiveInfoContent={setActiveInfoContent}
				>
					<button
						className={`bottom-1/2 top left-0 info-selector sm-zen-btn zen-btn ${
							className || ""
						}`}
						onClick={(e) => {
							e.preventDefault();
							setActiveInfoContent("topInfo");
							leftInfoSelected();
						}}
					></button>
					<button
						className={`bottom-1/2 top right-0 info-selector sm-zen-btn zen-btn ${
							className || ""
						}`}
						onClick={(e) => {
							e.preventDefault();
							setActiveInfoContent("topInfo");
							rightInfoSelected();
						}}
					></button>
				</ZenToggle>

				<ZenToggle
					toggleID="centerToggle"
					infoID="centerInfo"
					color="Purple"
					className={`z-20 toggle-center`}
					toggleText="//Nothing Yet"
					activeToggle={activeToggle}
					activeInfoContent={activeInfoContent}
					isMounted={isMounted}
					setIsMounted={setIsMounted}
					setActiveToggle={setActiveToggle}
					setActiveInfoContent={setActiveInfoContent}
				>
					{" "}
					<button
						className={` left-0 top-1/3 center info-selector sm-zen-btn zen-btn `}
						onClick={(e) => {
							e.preventDefault();
							setActiveInfoContent("centerInfo");
							leftInfoSelected();
						}}
					></button>
					<button
						className={` right-0 top-1/3 center info-selector sm-zen-btn zen-btn`}
						onClick={(e) => {
							e.preventDefault();
							setActiveInfoContent("centerInfo");
							rightInfoSelected();
						}}
					></button>
				</ZenToggle>

				<ZenToggle
					toggleID="bottomToggle"
					infoID="bottomInfo"
					color="Gold"
					toggleText="//Nothing Yet"
					className={`z-0 toggle-bottom ${rmVerticalAxisCheck(activeToggle)}`}
					activeToggle={activeToggle}
					activeInfoContent={activeInfoContent}
					isMounted={isMounted}
					setIsMounted={setIsMounted}
					setActiveToggle={setActiveToggle}
					setActiveInfoContent={setActiveInfoContent}
				>
					<button
						className={`top-1/2 left-0 bottom info-selector sm-zen-btn zen-btn ${
							className || ""
						}`}
						onClick={(e) => {
							e.preventDefault();
							setActiveInfoContent("bottomInfo");
							leftInfoSelected();
						}}
					></button>
					<button
						className={`top-1/2 right-0 bottom info-selector sm-zen-btn zen-btn ${
							className || ""
						}`}
						onClick={(e) => {
							e.preventDefault();
							setActiveInfoContent("bottomInfo");
							rightInfoSelected();
						}}
					></button>
				</ZenToggle>

				<ZenToggle
					toggleID="trueCenterToggle"
					infoID="trueCenterInfo"
					color="White"
					toggleText="//Nothing Yet"
					className={`z-30 toggle-true-center btn`}
					/* src={toggle} */
					activeToggle={activeToggle}
					activeInfoContent={activeInfoContent}
					isMounted={isMounted}
					setIsMounted={setIsMounted}
					setActiveToggle={setActiveToggle}
					setActiveInfoContent={setActiveInfoContent}
				></ZenToggle>
			</div>

			{(hasTransitionedIn || isMounted) && rightIsSelected && (
				<InfoContent
					name="rightInfoContent"
					activeToggle={activeToggle}
					className={`right-info-box ${hasTransitionedIn && "in"} ${
						activeInfoContent === "trueCenterInfo" ? "hidden" : ""
					} ${
						isMounted && "mounted"
					} ${rightInfoAdjustments()} right top bottom center trueCenter`}
					activeInfoContent={activeInfoContent}
				>
					{activeInfoContent === "topInfo" && ""}
					{activeInfoContent === "bottomInfo" && ""}
					{activeInfoContent === "centerInfo" && ""}
					{activeInfoContent === "trueCenterInfo" && ""}

					{activeInfoContent === "rightInfo" && <List></List>}
				</InfoContent>
			)}
		</div>
	);
};

export default ZenCore;
