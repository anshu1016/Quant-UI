import smallImage from "../../../images/smallImage.jpeg";
import "./avatar.css";
export function AvatarSmall() {
  return (
    <div className="avatar avatar-small">
      <img src={smallImage} alt="small-IMAGE" className="image" />
    </div>
  );
}
