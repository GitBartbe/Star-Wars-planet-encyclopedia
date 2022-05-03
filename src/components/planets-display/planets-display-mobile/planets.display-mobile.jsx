import PlanetMobileComponent from "../../planet-mobile-component/planet-mobile-component";

import "./planets-display-mobile.styles.scss";

const PlanetDisplayMobile = ({ matchPlanets, isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "planets-hide" : "planets-open"
      } mobile-planet-container`}
    >
      {matchPlanets.map((element, idx) => (
        <div key={idx} className={idx % 2 === 1 ? "mobile-grey" : ""}>
          <PlanetMobileComponent key={idx} {...element} />
        </div>
      ))}
    </div>
  );
};

export default PlanetDisplayMobile;
