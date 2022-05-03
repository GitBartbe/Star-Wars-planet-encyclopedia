import {  useEffect } from "react";
import { ReactComponent as ArrowUp } from "../../assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";

const ActiveArrow = ({
  planetId,
  setSortedPlanets,
  planets,
  toggle,
  arrowActive,
}) => {
  
  useEffect(() => {
    arrowActive ? sortAsc() : sortDesc();
  }, [arrowActive]);

  const sortAsc = () => {
    let sortedData = [...planets].sort((a, b) => {
      return a[planetId] > b[planetId] ? 1 : -1;
    });
    setSortedPlanets(sortedData);
  };

  const sortDesc = () => {
    let sortedData = [...planets].sort((a, b) => {
      return a[planetId] < b[planetId] ? 1 : -1;
    });
    setSortedPlanets(sortedData);
  };

  return (
    <div onClick={() => toggle()} className="sorting-arrows">
      <ArrowUp className={`${arrowActive ? "up-active" : "not-active"}`} />
      <ArrowDown className={`${!arrowActive ? "down-active" : "not-active"}`} />
    </div>
  );
};

export default ActiveArrow;
