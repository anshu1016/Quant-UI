import { leftBarData } from "./leftBarData";
import { NavLink } from "react-router-dom";
import "./leftBar.css";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
export default function LeftBar() {
  return (
    <>
      <div className="leftBar">
        <div className="leftHeader">
          <span>Q</span>uant
          <span>UI</span>
        </div>
        <div className="leftItems">
          <ul className="routeList">
            {leftBarData.map((val, key) => (
              <li key={key}>
                <NavLink to={val.link}>{val.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
