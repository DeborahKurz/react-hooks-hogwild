import React from 'react';

function Filter({ hogArray, filterHogs, sortHogNames, sortHogWeights }) {
  function handleGreased() {
    const greasedHogs = hogArray.filter((hog) => {
      if (hog.greased === true) {
        return hog;
      }
    });
    filterHogs(greasedHogs);
  }

  function sortNames() {
    const newArray = [...hogArray];
    newArray.sort((a, b) => a.name.localeCompare(b.name));
    sortHogNames(newArray);
  }

  function sortWeights() {
    const newArray = [...hogArray];
    newArray.sort((a, b) => a.weight - b.weight);
    sortHogWeights(newArray);
  }

  return (
    <div>
      <h1>Filter Pigs</h1>
      <span>
        <button onClick={handleGreased}>Greased</button>
        <button onClick={sortNames}>Sort By Name</button>
        <button onClick={sortWeights}>Sort By Weight</button>
      </span>
      <h1></h1>
    </div>
  );
}

export default Filter;