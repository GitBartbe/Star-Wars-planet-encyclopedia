import { useState } from "react";

import ArrowComponent from "../arrow-component/arrow-component";
import PlanetComponent from "../planet-component/planet-component";
import SortingArrows from "../sorting-arrows.component/sorting-arrows.component";
import PlanetsDisplayDesktop from "./planets-display-desktop/planets-display-desktop";
import PlanetDisplayMobile from "./planets-display-mobile/planets.display-mobile";
import "./planets.display.styles.scss";

const PlanetsDisplay = ({ matchPlanets, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="planets-display-container">
      <div className="title-container">
        <h2>{title}</h2>
        <ArrowComponent isOpen={isOpen} chageOpen={handleOpen} />
      </div>
      <div className="planet-display-desktop">
        <PlanetsDisplayDesktop
          matchPlanets={matchPlanets}
          isOpen={isOpen}
          handleOpen={handleOpen}
        />
      </div>
      <div className="planet-display-mobile">
        <PlanetDisplayMobile isOpen={isOpen} matchPlanets={matchPlanets} />
      </div>
    </div>
  );
};
export default PlanetsDisplay;
