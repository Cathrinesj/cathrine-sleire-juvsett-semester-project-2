import logoutButton from "../buttons/logoutButton.js";

export default function adminMenu() {
  const { pathname } = document.location;

  const menuContainer = document.querySelector(".admin-menu");

  menuContainer.innerHTML = `
  <nav class="navbar navbar-expand-sm navbar-light">
    <div class="container-fluid background__light border__green">
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
  </nav>`;

  logoutButton();
}
