
import PlanetsDisplay from "../planets-display/planets-display";

import './film-component.styles.scss'


const FilmComponent = ({ filmTitle, filmId, planets }) => {
  
  const matchPlanets = [];

//----------------------------- check match planets with film and store to array ----------------------------------------
  planets.map((planet) => {
    let itemToCheck = planet.filmConnection.films;
    itemToCheck.map((item) => {
      if (item.id === filmId) {
        matchPlanets.push({
          name: planet.name,
          rotationPeriod: planet.rotationPeriod,
          orbitalPeriod: planet.orbitalPeriod,
          diameter: planet.diameter,
          climates: planet.climates,
          surfaceWater: planet.surfaceWater,
          population: planet.population,
        });
      }
    });
  });

  //-----------------------------------------------------------------------------------------------------------------------

  return (
    <div className="film-container">
       <PlanetsDisplay matchPlanets = {matchPlanets} title={filmTitle}/>
     </div>
  );
};

export default FilmComponent;
