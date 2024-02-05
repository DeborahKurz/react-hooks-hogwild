import React, {useState} from 'react';

function Filter({hogArray, filterHogs}){

	function handleGreased(){
		console.log("HandleGreased")
        const greasedHogs=hogArray.filter((hog)=>{
            if(hog.greased===true){
                return hog;
            }
        })
        filterHogs(greasedHogs);
	}


    return(
        <div>
            <h1>Filter Pigs</h1>
            <span>
                <button onClick={handleGreased}>Greased</button>
            </span>
            <h1></h1>
        </div>
    )
}
export default Filter;