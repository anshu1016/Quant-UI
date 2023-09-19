import TextAlign from "./TextAlign";
import { TextBadge } from "./TextBadge";
import TextColor from "./TextColor";
import TextSize from "./TextSize";
import TextTransform from "./TextTransform";

export default function AllText() {
  return (
    <div>
      <TextBadge />
      <TextAlign />
      <TextSize />
      <TextTransform />
      <TextColor />
    </div>
  );
}
