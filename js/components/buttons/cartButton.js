import { getExistingCart } from "../../tools/storage/storage.js";

export function toggleCart() {
  const cartButton = document.querySelector(".product__item button--cart");

  cartButton.addEventListener("click", handleClick);

  function handleClick() {
    this.classList.toggle("added");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;

    const currentCart = getExistingCart();
    const productExist = currentCart.find(function (product) {
      return product.id === id;
    });

    if (productExist === undefined) {
      const cart = { id: id, title: title, price: price };
      currentCart.push(cart);
      saveFavs(currentCart);
    } else {
      const newCart = currentCart.filter((cart) => cart.id !== id);
      saveFavs(newCart);
    }
  }

  function saveFavs(cart) {
    localStorage.setItem("addedToCart", JSON.stringify(cart));
  }
}
