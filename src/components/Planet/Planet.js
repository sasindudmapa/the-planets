import React from "react";
import Image from "./Dts/image";
import NumericalData from "./Dts/NumericalData";
import PlanetData from "./Dts/PlanetData";
import "./planetStyles.css";

function Planet({ plantDts }) {
  return (
    <div className="planet-dts">
      <div className="planet-top">
        <Image image={plantDts.img} />
        <PlanetData planetData={plantDts} />
      </div>
      <div className="planet-bottom">
        <NumericalData planetData={plantDts} />
      </div>
    </div>
  );
}

export default Planet;
