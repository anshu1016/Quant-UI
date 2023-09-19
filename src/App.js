import { Feed } from "./components/feed/Feed";
import { NavBar } from "./components/navbar/NavBar";
import AllInputs from "./ComponentTypes/Inputs/AllInputs";
import Alert from "./ComponentTypes/Alert/Alert";
import { Avatar } from "./ComponentTypes/Avatar/Avatar";
import { Badges } from "./ComponentTypes/Badges/Badges";
import Buttons from "./ComponentTypes/Buttons/Buttons";
import AllCards from "./ComponentTypes/Cards/AllCards";
import Cards from "./ComponentTypes/Cards/Cards";
import Images from "./ComponentTypes/Image/Images";
import InputTypes from "./ComponentTypes/Inputs/InputTypes";
import List from "./ComponentTypes/List/List";
import AllText from "./ComponentTypes/Text/AllText";
import { TextBadge } from "./ComponentTypes/Text/TextBadge";
import "./styles.css";
import Rating from "./ComponentTypes/Rating/Rating";
import Navigation from "./ComponentTypes/Navigation/Navigation";
import Grid from "./ComponentTypes/Grid/Grid";
import AllGrid from "./ComponentTypes/Grid/AllGrid";
import { NavLink, Routes, Route, useLocation } from "react-router-dom";
import LeftBar from "./components/LeftBar/LeftBar";
import Carousel1 from "./components/carousel/Carousel1";
import { ComponentTiles } from "./components/ComponentTiles/ComponentTiles";
// import { ComponentTiles } from "./components/ComponentTiles/ComponentTiles";
// import { NavBar } from "./components/navbar/NavBar";
// import LeftBar from "./components/LeftBar/LeftBar";
export function App() {
  const location = useLocation();
  const showSideBar = !(
    location.pathname === "/" || location.pathname === "/component"
  );
  return (
    <div className="App">
      <NavBar />

      {showSideBar && <LeftBar />}

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/component" element={<ComponentTiles />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/avatar" element={<Avatar />} />
        <Route path="/badge" element={<Badges />} />
        <Route path="/button" element={<Buttons />} />
        <Route path="/card" element={<AllCards />} />
        <Route path="/grid" element={<Grid />} />
        <Route path="/image" element={<Images />} />
        <Route path="/input" element={<AllInputs />} />
        <Route path="/list" element={<List />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/text" element={<AllText />} />
      </Routes>
    </div>
  );
}
