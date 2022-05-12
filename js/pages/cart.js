import { getExistingCart } from "../tools/storage/storage.js";
import createMenu from "../components/common/createMenu.js";

createMenu();

const inCart = getExistingCart();
const cartContainer = document.querySelector(".cart");

if (inCart.length === 0) {
  cartContainer.innerHTML = "No items in cart";
}

inCart.forEach((product) => {
  cartContainer.innerHTML += `<div class="product">
    <img src=${product.image.url}/>
    <h3>${product.title}</h3>
    <h4>${product.price}</h4>`;
});
