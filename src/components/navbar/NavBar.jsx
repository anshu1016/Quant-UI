import React, { useState } from "react";
import "./nav.css";
import { NavLink, useNavigate } from "react-router-dom";
// import logo from "./logo.png"; // assuming you have a logo.png in src folder
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";
import { leftBarData } from "../LeftBar/leftBarData";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigate();
  const toggleSidebar = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    if (e.target.value) {
      const filtered = leftBarData.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  };
  const handleItemClick = (link) => {
    navigation(link);
    setSearchValue("");
    setFilteredData([]);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <span>Q</span>uant
            <span>UI</span>
          </NavLink>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="enter text"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <div className="searchResults">
            {filteredData.map((item, index) => (
              <div key={index} onClick={() => handleItemClick(item.link)}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
        <div className="socialIcons">
          <div className="icon github">
            <FaGithub />
          </div>
          <div className="icon likedIn">
            <FaLinkedin />
          </div>
          <div className="sideBarThings">
            <button onClick={toggleSidebar} className="hamburgerr">
              <FaBars />
            </button>
            <div className={`leftBarr ${isOpen ? "open" : ""}`}>
              <div className="leftHeaderr">
                <span>Q</span>uant
                <span>UI</span>
              </div>
              <div className="leftItemss">
                <ul className="routeListt">
                  {leftBarData?.map((val, key) => (
                    <li key={key} onClick={toggleSidebar}>
                      <NavLink to={val.link}>{val.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileSearch">
        <input
          type="text"
          placeholder="Enter text"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <div className="searchResults">
          {filteredData.map((item, index) => (
            <div key={index} onClick={() => handleItemClick(item.link)}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export { NavBar };
