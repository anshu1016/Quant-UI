import "./navigationCode.css";
export function NavigationCode() {
  return (
    <div class="navigation sm-rounded">
      <div class="nav-left logo">
        <h2 class="nav-logo">QuantUI</h2>
      </div>

      <div class="nav-center searchbar">
        <input type="search" class="input input-search" placeholder="Search" />
      </div>

      <div class="nav-right">
        <button class="btn btn-primary login-button text-md">Login</button>

        <div class="badge-container icon-badge ">
          <i class="fas fa-shopping-cart"></i>
          <span class="badge-icon-number  badge-status"> 4 </span>
        </div>

        <div class="badge-container icon-badge">
          <i class="fas fa-heart"></i>
          <span class="badge-icon-number  badge-status"> 4 </span>
        </div>
      </div>
    </div>
  );
}
