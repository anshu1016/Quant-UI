import "./avatar.css";
import LSizeImage from "../../../images/LSizeImage.jpeg";
export function AvatarL() {
  return (
    <div className="avatar avatar-l">
      <img src={LSizeImage} alt="LIMAGE" className="image" />
    </div>
  );
}
