import bigTeddy from "../../../images/bigTeddy.jpg";
import "./avatar.css";
export function AvatarXXL() {
  return (
    <div className="avatar avatar-large">
      <img src={bigTeddy} alt="XXLIMAGE" className="image" />
    </div>
  );
}
