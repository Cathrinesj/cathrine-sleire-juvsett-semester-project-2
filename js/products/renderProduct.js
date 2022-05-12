import { getExistingCart, getUsername } from "../tools/storage/storage.js";

export function renderProduct(product) {
  const inCart = getExistingCart();

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

  productContainer.innerHTML += `<div class="product__item">
                                                <div> 
                                                
                                                </div
                                                <div>
                                                <h3>${product.title}</h3>
                                                <h4>${product.price}</h4>
                                                <p>${product.description}</p>
                                                <button class="button--cart ${cartClass}" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}"></button>
                                                ${loggedIn}
                                                </div> 
                                                `;
}
