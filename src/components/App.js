import React, {useState} from "react";
import Nav from "./Nav";
import Display from "./Display";
import Filter from "./Filter";

import hogs from "../porkers_data";
console.log(hogs);

function App() {
	const [hogArray, setHogArray] = useState(hogs);

	function filterHogs(newHogArray){
		console.log("filterHogs");
		setHogArray(newHogArray);
	}
	function sortHogNames(newHogArray) {
		console.log("sortHogNames");
		setHogArray(newHogArray);
	}
	function sortHogWeights(newHogArray) {
		console.log("sortHogWeights");
		setHogArray(newHogArray);
	}

	return (
		<div className="App">
			<Nav />
			<Filter hogArray={hogArray} filterHogs={filterHogs} sortHogNames={sortHogNames} sortHogWeights={sortHogWeights}/>
			<Display hogArray={hogArray} setHogArray={setHogArray} />
		</div>
	);
}

export default App;
