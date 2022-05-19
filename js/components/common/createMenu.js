import { getUsername } from "../../tools/storage/storage.js";

export default function createMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".menu-container");

  const username = getUsername();

  let authLink = `<li class = "nav-item">
                    <a href= "login.html"  class = "nav-link" ${
                      pathname === "/login.html" ? "active" : ""
                    }">Login</a>
                   </li>`;

  if (username) {
    authLink = `<li class = "nav-item">
                    <a href= "add.html"  class = "nav-link> ${
                      pathname === "/add.html" ? "active" : ""
                    }">Admin</a>
                </li>`;
  }

  menuContainer.innerHTML = `<nav class="navbar navbar-expand-md navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand sevi__logo" href="index.html">
        <img src="resources/logo/HeroSeviLogo.svg"/>
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
          <a href= "/" class = "nav-link" ${
            pathname === "/" || pathname === "/index.html" ? "active" : ""
          }>Home</a>
        </li>
        <li class="nav-item">
          <a href="/productslist.html" class="nav-link ${
            pathname === "/productslist.html" ? "active" : ""
          }">Shop</a>
        </li>
        ${authLink}
        <li class="nav-item">
          <a href="/cart.html" class="nav-link ${
            pathname === "/cart.html" ? "active" : ""
          }">Cart
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;
}
