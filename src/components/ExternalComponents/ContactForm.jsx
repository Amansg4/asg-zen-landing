import React, { useState } from "react";

const API_BASE = "http://localhost:4000";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Sending");

		let data = {
			name,
			email,
			message,
		};

		fetch(API_BASE + "/send_mail", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log("Response received");
			if (res.status === 200) {
				console.log("Response succeeded!");
				setSubmitted(true);
				setName("");
				setEmail("");
				setMessage("");
			}
		});
	};

	return (
		<React.Fragment>
			<form
				className="form rounded-xl p-2 flex bg-orange-200 flex-col justify-center items-center w-full min-h-[30rem] min-w-[32rem] max-w-[60rem] h-full"
				method="CREATE"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmit(e);
				}}
				required
			>
				<h4 className="mt-1 text-sky-800">Contact Information</h4>
				<div className={`form bg-orange-200 form-elements label-input-name`}>
					<label className={`form bg-orange-300 label-name label`} htmlFor="name">
						<>Name</>
						<input
							className=" form input input-name"
							type="text"
							placeholder="Name"
							onChange={(e) => setName(e.target.value)}
							value={name}
							required
						/>
					</label>
				</div>
				<div className={` bg-orange-200 form form-elements label-input-name`}>
					<label className={` bg-orange-300 form label-name label`} htmlFor="email">
						<>Email</>
						<input
							className="input input-name form"
							type="text"
							placeholder="Email Address"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
					</label>
				</div>
				<div
					className={` bg-orange-200 form-elements form label-input-name w-full h-full `}
				>
					<label
						className={` bg-orange-300 label-name form label flex flex-col h-full justify-evenly w-full`}
						htmlFor="message"
					>
						<>Message</>
						<textarea
							className="w-full h-full p-1 rounded-lg bg-slate-50 input input-name form indent-2"
							type="text"
							placeholder="Feel free to contact me professionally or out of interest. Don't Be Afraid! Tell me what you think of the site."
							onChange={(e) => setMessage(e.target.value)}
							value={message}
							/* 	cols="20"
							rows="10" */
						/>
					</label>
				</div>
				<button
					className={`form bg-orange-400 lg-btn btn form-elements form text-1.8 hover:font-700 label-input-submit `}
					type="submit"
				>
					Send Away
				</button>
			</form>
		</React.Fragment>
	);
};

export default ContactForm;
