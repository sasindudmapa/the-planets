import React from "react";

function image({ image }) {
  return (
    <div>
      <img src={image} alt="" className="planet-img" />
    </div>
  );
}

export default image;
