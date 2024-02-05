import React, { useState } from 'react';
import Tile from "./Tile.js";

function Display({ hogArray, setHogArray }) {

  return (
    <div className="ui grid container">
      {hogArray.map((hog) => (
        <Tile
          key={hog.name}
          hogObj={hog}
          name={hog.name}
          image={hog.image}
        />
      ))}
    </div>
  );
}

export default Display;