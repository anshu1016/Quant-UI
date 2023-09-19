import "./horizontal.css";
export function HorizontalProductCard() {
  return (
    <div class="images-card horizontal-cart-card ">
      <img
        class="card-img"
        src="https://cdn5.vectorstock.com/i/1000x1000/71/69/pressure-cooker-vector-3817169.jpg"
      />

      <div class="card-content">
        <h3 class="card-title">Premium Shirt</h3>
        <h1 class="card-price">₹ 9999/-</h1>
        <p class="card-text">
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </p>

        <div class="card-footer">
          <div class="move-cart-buttons">
            <button class="btn btn-secondary btn-move-cart">
              Move to cart
            </button>
            <button class="btn btn-secondary-outline btn-move-cart">
              Save to wishlist{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
