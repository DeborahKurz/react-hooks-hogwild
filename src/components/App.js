import React, {useState} from "react";
import Nav from "./Nav";
import Display from "./Display";

import hogs from "../porkers_data";
console.log(hogs);

function App() {
	const [hogArray, setHogArray] = useState(hogs);

	return (
		<div className="App">
			<Nav />
			<Display hogArray={hogArray} setHogArray={setHogArray} />
		</div>
	);
}

export default App;
