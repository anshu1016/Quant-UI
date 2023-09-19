import Cards from "./Cards";
import HorizontalCard from "./HorizontalCard";
import OverlayCard from "./OverlayCard";
import ProductCard from "./ProductCard";
import ShadowCard from "./ShadowCard";
import VerticalCard from "./VerticalCard";

export default function AllCards() {
  return (
    <div>
      <Cards />
      <VerticalCard />
      <OverlayCard />
      <ProductCard />
      <HorizontalCard />
      <ShadowCard />
    </div>
  );
}
