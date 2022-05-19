import logoutButton from "../buttons/logoutButton.js";

export default function adminMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".admin-menu");

  menuContainer.innerHTML = `<nav class="navbar navbar-expand-md navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
        <img href="resources/logo/HeroSeviLogo.svg"/>
    </a>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Admin Menu
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
    <div class="collapse navbar-collapse admin__navbar" id="navbarNav">
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
