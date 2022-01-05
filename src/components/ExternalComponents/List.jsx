import React from "react";
import { ReactComponent as JsLogo } from "../../img/js-logo_gvosxg.svg";
import { ReactComponent as NodeLogo } from "../../img/node-logo_runwwy.svg";
import { ReactComponent as ReactLogo } from "../../img/react-logo_q2iuni.svg";
import { ReactComponent as HtmlLogo } from "../../img/html-logo_lfmuid.svg";
import { ReactComponent as Marker } from "../../img/code-heroicon.svg";
import { ReactComponent as MongoDBLogo } from "../../img/mongodb-seeklogo.com.svg";
import { ReactComponent as TailwindLogo } from "../../img/tailwind-css-seeklogo.com.svg";
import { ReactComponent as CssLogo } from "../../img/icons8-css3.svg";

const List = () => {
	const javascript = {
		id: 1,
		name: "JavaScript",
		progIcon: (
			<JsLogo width="auto" height="auto" className="inline-block list-image" />
		),
		info: "",
	};

	const node = {
		id: 2,
		name: "Node.js",
		progIcon: <NodeLogo width="auto" height="auto" className="list-image" />,
		info: "",
	};
	const express = {
		id: 3,
		name: "Express",
		progIcon: (
			<p className="text-zinc-900 font-Arial text-2 tracking-0.1em  font-300 list-image">
				<span className="border-black border-[1px]">ex</span>press
			</p>
		),
		info: "",
	};
	const html = {
		id: 4,
		name: "HTML5",
		progIcon: <HtmlLogo width="auto" height="auto" className="list-image" />,
		info: "",
	};
	const css = {
		id: 5,
		name: "CSS",
		progIcon: <CssLogo width="auto" height="auto" className="list-image" />,
		info: "",
	};
	const react = {
		id: 6,
		name: "React",
		progIcon: <ReactLogo width="auto" height="auto" className="list-image" />,
		info: "",
	};
	const mongo = {
		id: 7,
		name: "MongoDB",
		progIcon: (
			<MongoDBLogo
				width="auto"
				height="auto"
				className="w-1/2 min-w-min list-image "
			/>
		),
		info: "",
	};
	const mongoose = {
		id: 8,
		name: "Mongoose",
		progIcon: (
			<p className="list-image text-red-900 font-Arial text-3 tracking-0.1em font-300 mr-10">
				mongoose
			</p>
		),
		info: "",
	};
	const tailwind = {
		id: 9,
		name: "Tailwind",
		progIcon: <TailwindLogo width="auto" height="auto" className="list-image" />,
		info: "",
	};
	/* 	const  = {
		id: 3,
		name: "",
		progIcon: "",
		info:
			""}; */

	let fEndProgs = [react, css, tailwind, html];
	let bEndProgs = [node, express, mongo, mongoose];

	return (
		<React.Fragment>
			<div className="flex flex-col items-center">
				<div className="text-center max-w-prose min-w-prose">
					<h4 className="list-name"> Fullstack {javascript.name} Developer </h4>
					{javascript.progIcon}
					<p className="list-info">{javascript.info}</p>
				</div>
				<div className="list-container">
					<ul className="list">
						<h3 className="text-center">FrontEnd</h3>
						{fEndProgs.map((program) => (
							<li className="list-item" key={program.id}>
								<h4 className="flex flex-col items-center justify-center list-name">
									<Marker className="inline-block list-marker list-marker-fe" />

									{program.progIcon}
									{program.name}
								</h4>

								<p className="list-info">{program.info}</p>
							</li>
						))}
					</ul>
					<ul className="list">
						<h3 className="text-center">BackEnd</h3>
						{bEndProgs.map((program) => (
							<li className="list-item" key={program.id}>
								<h4 className="flex flex-col items-center justify-center list-name ">
									<Marker className="inline-block list-marker list-marker-be" />
									{program.progIcon}
									{program.name}
								</h4>

								<p className="list-info">{program.info}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

/* alt={`${javascript.name} Icon`} */

export { List };
