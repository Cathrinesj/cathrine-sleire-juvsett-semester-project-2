import { getCart, saveCart } from "../tools/storage/storage.js";

export function renderCart() {
  const inCart = getCart();

  const cartContainer = document.querySelector(".cart");

  cartContainer.innerHTML = "";

  inCart.forEach(function (cart) {
    cartContainer.innerHTML += `<div class="cart__item">
      <a href="product.html?id=${cart.id}">
      <h3>${cart.title}</h3>
      <h3 class="cart__price">${cart.price}</h3>  
      <button class="cart__button--cart added" data-id="${cart.id}" data-title="${cart.title}" data-price="${cart.price}" data-image="${cart.image.formats.small.url}"></button>
      </a>
      <img src="${cart.image.formats.small.url}"/> 
      </div>`;
  });

  const cartButton = document.querySelectorAll(
    ".cart__item .cart__button--cart"
  );

  cartButton.forEach((button) => {
    button.addEventListener("click", removeFromCart);
  });
}

function removeFromCart() {
  const { id } = this.dataset;

  const inCart = getCart();

  const newCart = inCart.filter((cart) => cart.id !== id);

  saveCart(newCart);

  renderCart();
}
