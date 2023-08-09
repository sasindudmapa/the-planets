import React from "react";

function NumericalData({ planetData }) {
  return (
    <div className="num-data-set">
      <div className="num-data">
        <h3>Average Tempreture</h3>
        <h1>{planetData.surfaceTemp}</h1>
      </div>
      <div className="num-data">
        <h3>Orbit Period</h3>
        <h1>{planetData.orbitPeriod}</h1>
      </div>
      <div className="num-data">
        <h3>Radius</h3>
        <h1>{planetData.radius}</h1>
      </div>
    </div>
  );
}

export default NumericalData;
