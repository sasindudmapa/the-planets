import React, { useState } from "react";
import Planet from "./components/Planet/Planet";
import { planets } from "./Planet Details/PlanetsDts";
import "./components/Styles.css";
import nightSky from "./Static/night.jpg";

function App() {
  const [planet, setPlanet] = useState(planets[0]);
  const [dropDown, setDropDown] = useState(false);

  function handleNavClick(e) {
    console.log(e.target.value);
    const planetNo = e.target.value;
    setPlanet(planets[planetNo]);
  }

  function handleDropDown() {
    setDropDown(!dropDown);
  }

  return (
    <div className="app">
      <img src={nightSky} alt="" className="bg-img" />
      <div className="nav-bar">
        <h1>THE PLANETS</h1>
        <div className="nav-planets">
          <div className="drop-down">
            <h3 className="drop-down-btn" onClick={handleDropDown}>
              Planets
            </h3>
            <ul
              className={`drop-down-menu ${dropDown && "drop-down-menu-show"}`}
            >
              {planets.map((planet) => {
                return (
                  <li
                    className="nav-planet"
                    id={planet.planetNumer}
                    value={planet.planetNumer}
                    onClick={(e) => {
                      handleNavClick(e);
                      handleDropDown();
                    }}
                  >
                    {planet.planetName}
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="main-nav">
            {planets.map((planet) => {
              return (
                <li
                  className="nav-planet"
                  id={planet.planetNumer}
                  value={planet.planetNumer}
                  onClick={(e) => handleNavClick(e)}
                >
                  {planet.planetName}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
      <div className="planets">
        <Planet plantDts={planet} />
      </div>
    </div>
  );
}

export default App;

//Components
//planet
//Navbar
//Image
//Passage
//Numerical Details
