import { useState } from "react";

import ArrowComponent from "../../arrow-component/arrow-component";
import PlanetComponent from "../../planet-component/planet-component";
import SortingArrows from "../../sorting-arrows.component/sorting-arrows.component";
import "./planets-display-desktop.styles.scss";



const PlanetsDisplayDesktop = ({ matchPlanets,isOpen}) => {

  const categories = [
    { name: "Planet name", id: "name" },
    { name: "Rotaion period", id: "rotationPeriod" },
    { name: "Orbital period", id: "orbitalPeriod" },
    { name: "Diameter", id: "diameter" },
    { name: "Climate", id: "climates" },
    { name: "Surface water", id: "surfaceWater" },
    { name: "Population", id: "population" },
  ];

  const [sortedPlanets, setSortedPlanets] = useState(matchPlanets);
  const [activeCategory, setActiveCategory] = useState(null);


  return (
    
      <div className={isOpen ? "planets-hide" : "planets-open"}>
       <div className="categories grid">
          {categories.map((category, idx) => (
            <div
              className="category-container"
              key={idx}
              id={category.name === "Planet name" ? "name" : "description"}
            >
              {category.name}
              <div className="sorting-arrows"  onClick={() => setActiveCategory(idx)}>
          
                <SortingArrows
                  active={activeCategory}
                  idx={idx}
                  planetId={category.id}
                  setSortedPlanets={setSortedPlanets}
                  planets={sortedPlanets}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="planet-dekstop-container" >
        {sortedPlanets.map((element, idx) => (
          <PlanetComponent key={idx} {...element} />
        ))}
       </div>
     

</div>
           
  );
};
export default PlanetsDisplayDesktop;