import { ReactComponent as ArrowUp } from "../../assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";

const NotActiveArrow = () => {
  return (
    <div className="sorting-arrows">
      <ArrowUp style={{ fill: "#474747" }} />
      <ArrowDown style={{ fill: "#474747" }} />
    </div>
  );
};

export default NotActiveArrow;
