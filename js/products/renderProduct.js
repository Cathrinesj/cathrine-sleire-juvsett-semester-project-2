import { getCart, getUsername } from "../tools/storage/storage.js";

export function renderProduct(product) {
  document.title = `SeVi | ${product.title}`;

  const inCart = getCart();

  const productContainer = document.querySelector(".product");
  const loaderContainer = document.querySelector(".loader");

  loaderContainer.innerHTML = "";

  let cartClass = "";

  const doesProductExist = inCart.find(function (cart) {
    return parseInt(cart.id) === product.id;
  });

  if (doesProductExist) {
    cartClass = "added";
  }

  const username = getUsername();

  let loggedIn = ``;

  if (username) {
    loggedIn = `<button>
                             <a href= "edit.html?id=${product.id}" class = "">Edit item </a>
                          </button>`;
  }

  productContainer.innerHTML += `<div class="col-md-4 product__item product__item--img border__green">
                                        <img src="${product.image_url}" alt="${product.image.alternativeText}"/>
                                    </div>
                                    <div class="col-md-6 product__item border__green background__light">         
                                        <h1>${product.title}</h1>
                                        <h2>NOK ${product.price},-</h2>
                                        <p>${product.description}</p>
                                        <button class="product__button--cart ${cartClass}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image_url}" data-alt="${product.image.alternativeText}"></button>
                                        ${loggedIn}
                                  </div>`;
}
