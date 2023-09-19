import XLimage from "../../../images/XLimage.jpg";
import "./avatar.css";
export function AvatarXL() {
  return (
    <div className="avatar avatar-xl">
      <img src={XLimage} alt="XXLIMAGE" className="image" />
    </div>
  );
}
