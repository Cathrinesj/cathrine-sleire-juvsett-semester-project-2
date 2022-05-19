import { getCart, getUsername } from "../tools/storage/storage.js";

export function renderProduct(product) {
  const inCart = getCart();

  const productContainer = document.querySelector(".product");

  productContainer.innerHTML = "";

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
    loggedIn = `<button class = "">
                             <a href= "edit.html?id=${product.id}" class = "">Edit item </a>
                          </button>`;
  }

  productContainer.innerHTML += `<div class="col-md-4 product__item product__item--img border__green">
                                        <img src="${product.image.formats.small.url}"/>
                                    </div>
                                    <div class="col-md-6 product__item border__green background__light">         
                                        <h3>${product.title}</h3>
                                        <h4>NOK ${product.price},-</h4>
                                        <p>${product.description}</p>
                                        <button class="product__button--cart ${cartClass}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image.formats.small.url}"></button>
                                        ${loggedIn}
                                  </div>`;
}
