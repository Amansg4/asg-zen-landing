import ZenCore from "./components/ZenJSX/ZenCore";
import Nav from "./components/ZenJSX/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="flex flex-col items-center justify-center w-screen h-screen App">
				<Nav></Nav>
				<ZenCore />
			</div>
		</Router>
	);
}

export default App;
