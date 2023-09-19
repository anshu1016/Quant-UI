import "./shadow.css";
export function ShadowCardCode() {
  return (
    <div className="productCard">
      <div className="badgeContainer">
        <span className="discountBadge">25% Off</span>
        <span className="wishlistBadge">♥ </span>
      </div>
      <img
        src="https://cdn.vectorstock.com/i/preview-1x/71/69/pressure-cooker-vector-3817169.jpg"
        alt="Product"
        className="productImage"
      />
      <h4 className="productName">Elegant Watch</h4>
      <p className="productDetails">
        Exquisite craftsmanship, reliable quality
      </p>
      <div className="productPrice">
        $199 <span className="oldPrice">$250</span>
      </div>
      <button className="addToCart">Add to Cart</button>
    </div>
  );
}
