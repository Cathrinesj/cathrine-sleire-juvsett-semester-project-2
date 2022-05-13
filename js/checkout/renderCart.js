import { getCart, saveCart } from "../tools/storage/storage.js";

export function renderCart() {
  const inCart = getCart();

  const cartContainer = document.querySelector(".cart");

  cartContainer.innerHTML = "";

  inCart.forEach(function (cart) {
    cartContainer.innerHTML += `<div class="cart__item">
    <img src="${cart.image}"/> 
      <a href="product.html?id=${cart.id}">
      <h3>${cart.title}</h3>
      <h3 class="cart__price">${cart.price}</h3>  
      </a>
      <button class="cart__button--cart added" data-id="${cart.id}" data-title="${cart.title}" data-price="${cart.price}" data-image="${cart.image}"></button>
      </div>`;
  });

  const cartButton = document.querySelectorAll(
    ".cart__item .cart__button--cart"
  );

  cartButton.forEach((button) => {
    button.addEventListener("click", removeFromCart);
  });

  totalCart();
}

function removeFromCart() {
  const { id } = this.dataset;

  const inCart = getCart();

  const newCart = inCart.filter((cart) => cart.id !== id);

  saveCart(newCart);
  renderCart();
  totalCart();
}

function totalCart() {
  const total = [];
  const products = document.querySelectorAll(".cart__price");

  products.forEach(function (product) {
    total.push(parseFloat(product.textContent));
  });

  const cost = total.reduce(function (total, product) {
    total += product;
    return total;
  }, 0);

  const totalCost = cost.toFixed(2);

  const cartTotal = document.querySelector(".cart__total");

  cartTotal.innerHTML = "NOK" + totalCost;

  if (products.length === 0) {
    cartTotal.innerHTML = "No items in cart yet";
  }
}
