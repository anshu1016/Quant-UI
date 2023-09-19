import "./feed.css";
import { NavLink } from "react-router-dom";
export const Feed = () => {
  return (
    <div className="mainFeed">
      <div className="feedContainer">
        <div className="myName">
          <span className="highl">Q</span>uant
          <span className="highl">UI</span>
        </div>
        <div className="paragraphh">
          <p className="pText">
            A collection of innovative components for modern web development.
          </p>
        </div>
        <div className="buttons">
          <button className="startBtn">
            <NavLink to="/alert">Get Started</NavLink>
          </button>
          <button className="version">Current: V1.0</button>
        </div>
      </div>
    </div>
  );
};
