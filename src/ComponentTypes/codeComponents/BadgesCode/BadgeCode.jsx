import { AiOutlineShoppingCart } from "react-icons/ai";
import bigTeddy from "../../../images/bigTeddy.jpg";
import XLimage from "../../../images/XLimage.jpg";
import LSizeImage from "../../../images/LSizeImage.jpeg";
import LSizeImage2 from "../../../images/LSizeImage2.jpeg";
import smallImage from "../../../images/smallImage.jpeg";
import "./badgeCode.css";

export default function BadgeCode() {
  return (
    <div className="badeContainer">
      <div className="badgeImages">
        {/* //for XXl size */}
        <div className="badge badge-large">
          <img src={bigTeddy} alt="XXLIMAGE" className="imageB" />
          <div className="tag xxlSize green"></div>
        </div>

        <div className="badge badge-xl">
          <img src={XLimage} alt="XLIMAGE" className="imageB" />
          <div className="tag xlsize red"></div>
        </div>

        <div className="badge badge-l">
          <img src={LSizeImage} alt="LIMAGE" className="imageB" />
          <div className="tag lsize yellow"></div>
        </div>

        <div className="badge badge-m">
          <img src={LSizeImage2} alt="MIMAGE" className="imageB" />
          <div className="tag msize green number">2</div>
        </div>

        <div className="badge badge-small">
          <img src={smallImage} alt="smallIMAGE" className="imageB" />
          <div className="tag ssize red number">4</div>
        </div>

        <div className="badge badgeIcon ">
          <AiOutlineShoppingCart className="imageB" />
          <div className="tag Iconsize red number">4</div>
        </div>
      </div>
    </div>
  );
}
