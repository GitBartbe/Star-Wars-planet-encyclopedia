import { useState } from "react";
import ActiveArrow from "./active-arrows";
import NotActiveArrow from "./not-active-arrow";

import "./sorting-arrows.styles.scss";

const SortingArrows = ({
  active,
  idx,
  planetId,
  setSortedPlanets,
  planets,
}) => {
  const [toggleActive, setToggleActive] = useState(true);

  const toggleArrows = () => {
    setToggleActive(!toggleActive);
  };

  return (
    <div className="sorting-arrows">
      {active === idx ? (
        <ActiveArrow
          planetId={planetId}
          setSortedPlanets={setSortedPlanets}
          planets={planets}
          arrowActive={toggleActive}
          setActive={setToggleActive}
          toggle={toggleArrows}
          idx={idx}
        />
      ) : (
        <NotActiveArrow />
      )}
    </div>
  );
};

export default SortingArrows;
