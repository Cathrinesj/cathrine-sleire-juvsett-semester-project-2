import { baseUrl } from "../tools/data/api.js";
import displaymessage from "../components/common/displayMessage.js";

const url = baseUrl + "products";

export async function getFeaturedProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    const featuredContainer = document.querySelector(".featured");
    const loaderContainer = document.querySelector(".loader");

    loaderContainer.innerHTML = "";

    products.forEach(function (featured) {
      if (featured.featured === true) {
        featuredContainer.innerHTML += `<div class="col-md-3 featured__img border__green">
                                          <img src="${featured.image_url}" alt="${featured.image.alternativeText}"/>
                                          <div class="link">
                                            <a href="product.html?id=${featured.id}">
                                            <h3 class="featured__title">${featured.title} <i class="fa-solid fa-angles-right"></i></h3>
                                            </a>
                                          </div
                                      </div>`;
      }
    });

    if (products.error) {
      displaymessage("error", products.message, "featured");
    }
  } catch (error) {
    console.log(error);
  }
}
