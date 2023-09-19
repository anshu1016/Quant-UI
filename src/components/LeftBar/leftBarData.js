import { FiAlertCircle } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";
import { LiaIdBadgeSolid } from "react-icons/lib";
import { FaTabletButton } from "react-icons/fa";
import { IoIdCardSharp } from "react-icons/io";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { BiImageAlt } from "react-icons/bi";
import {
  AiFillFileText,
  AiOutlineOrderedList,
  AiOutlineSearch,
  AiOutlineStar
} from "react-icons/ai";
import { BiNavigation } from "react-icons/bi";
export const leftBarData = [
  {
    title: "Alert",
    icon: <FiAlertCircle />,
    link: "/alert"
  },
  {
    title: "Avatar",

    link: "/avatar"
  },
  {
    title: "Badges",
    icon: <LiaIdBadgeSolid />,
    link: "/badge"
  },
  {
    title: "Buttons",
    icon: <FaTabletButton />,
    link: "/button"
  },
  {
    title: "Cards",
    icon: <IoIdCardSharp />,
    link: "/card"
  },
  {
    title: "Grid",
    icon: <BsFillGrid3X3GapFill />,
    link: "/grid"
  },
  {
    title: "Image",
    icon: <BiImageAlt />,
    link: "/image"
  },
  {
    title: "Input",
    icon: <AiOutlineSearch />,
    link: "/input"
  },
  {
    title: "List",
    icon: <AiOutlineOrderedList />,
    link: "/list"
  },
  {
    title: "Rating",
    icon: <AiOutlineStar />,
    link: "/rating"
  },
  {
    title: "Text",
    icon: <AiFillFileText />,
    link: "/text"
  },

  {
    title: "Navigation",
    icon: <BiNavigation />,
    link: "/navigation"
  }
];
