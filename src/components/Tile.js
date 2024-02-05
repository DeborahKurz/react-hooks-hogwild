import React, {useState} from 'react';

function Tile({ hogObj, name, image}) {
    const [specialtyHog, setSpecialtyHog] = useState("");
    const [weightHog, setWeightHog] = useState("");
    const [greasedHog, setGreasedHog] = useState("")

    function clickHog(hogObj){
        setSpecialtyHog(hogObj.specialty);
        setWeightHog(hogObj.weight);
        setGreasedHog(hogObj.greasedHog);
    };

  return (
    <div className="ui eight wide column" onClick={() => clickHog(hogObj)}>
        <h1>{name}</h1>
        <img src={image} alt={name}></img>
        {specialtyHog==="" ? "" : <h3 value={specialtyHog}>Specialty: {specialtyHog}</h3>}
        {weightHog==="" ? "" : <h3 value={weightHog}>Weight: {weightHog}</h3>}
        {greasedHog==="" ? "" : <h3 value={greasedHog}>Greased: {hogObj.greased===false ? "No" : "Yes" }</h3>}
    </div>
  );
}

export default Tile;