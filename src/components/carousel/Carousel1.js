import "./carousel1.css";
import { NavLink } from "react-router-dom";
import { leftBarData } from "../LeftBar/leftBarData";
const Carousel1 = () => {
  return (
    <>
      <div className="routes-grid">
        {leftBarData?.map((item, index) => (
          <div className="route-tile" key={index}>
            <NavLink to={item.link}>
              <div className="route-icon">{item.icon}</div>
              <div className="route-title">{item.title}</div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
export default Carousel1;
