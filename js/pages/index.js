import { baseUrl } from "../tools/data/api.js";
import createMenu from "../components/common/createMenu.js";
import heroImage from "../components/common/heroImage.js";

createMenu();
heroImage();

const url = baseUrl + "products";

async function getFeaturedProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    const featuredContainer = document.querySelector(".featured");

    featuredContainer.innerHTML = "";

    products.forEach(function (featured) {
      if (featured.featured === true) {
        featuredContainer.innerHTML += `<div class="featured">
                                          <img src=${featured.image.url}/>
                                          <a href="product.html?id=${featured.id}" class="featured__button">
                                          <h3>${featured.title}</h3>
                                          </a>
                                      <div>`;
      }
    });

    if (products.error) {
      displaymessage("error", products.message, "featured");
    }
  } catch (error) {
    console.log(error);
  }
}

getFeaturedProducts();
