import logoutButton from "../buttons/logoutButton.js";

export default function adminMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".admin-menu");

  menuContainer.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
        <img href="resources/logo/HeroSeviLogo.svg"/>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a href= "/add.html" class = "nav-link" ${
            pathname === "/" || pathname === "/add.html" ? "active" : ""
          }>Add Product</a>
        </li>
        <li class="nav-item">
          <a href="/edit.html" class="nav-link ${
            pathname === "/edit.html" ? "active" : ""
          }">Edit Product</a>
        </li>
        <button id="logout" class="logout">Logout</button>
      </ul>
    </div>
  </div>
</nav>`;

  logoutButton();
}
