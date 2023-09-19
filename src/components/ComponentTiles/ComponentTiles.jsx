import React from "react";
import { NavLink } from "react-router-dom";
import "./tiles.css";
import { leftBarData } from "../LeftBar/leftBarData";
export function ComponentTiles() {
  return (
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
  );
}
