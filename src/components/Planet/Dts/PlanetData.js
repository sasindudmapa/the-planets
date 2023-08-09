import React, { useEffect, useState } from "react";

function PlanetData({ planetData }) {
  const [des, setDes] = useState(planetData.overview);
  const [structure, setStructure] = useState(planetData.internelStructure);
  const [showOverview, setShow] = useState(true);

  useEffect(() => {
    setDes(planetData.overview);
    setStructure(planetData.internelStructure);
  }, [planetData]);

  function handleStateButton(e) {
    if (e.target.id === "overview") {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  return (
    <div className="planet-top-data">
      <div className="des">
        <h1>{planetData.planetName}</h1>

        {showOverview === true ? <p>{des}</p> : <p>{structure}</p>}
      </div>
      <div className="state-buttons">
        <div
          className={`button ${showOverview === true && "button-bg"}`}
          id="overview"
          onClick={(e) => handleStateButton(e)}
        >
          OVERVIEW
        </div>
        <div
          className={`button ${showOverview === false && "button-bg"}`}
          id="structure"
          onClick={(e) => handleStateButton(e)}
        >
          INTERNAL STRUCTURE
        </div>
      </div>
    </div>
  );
}

export default PlanetData;
