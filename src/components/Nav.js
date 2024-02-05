import React from "react";
import piggy from "../assets/porco.png";

const Nav = () => {
	function handleName(){
		console.log("HandleName")
	}
	function handleWeight(){
		console.log("HandleWeight")
	}
	function handleSpecialty(){
		console.log("HandleSpecialty")
	}
	function handleGreased(){
		console.log("HandleGreased")
	}

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div>
				<h1>Filter Pigs</h1>
				<span>
					<button onClick={handleName}>Name</button>
					<button onClick={handleWeight}>Weight</button>
					<button onClick={handleSpecialty}>Specialty</button>
					<button onClick={handleGreased}>Greased</button>
				</span>
			</div>
		</div>
	);
};

export default Nav;
