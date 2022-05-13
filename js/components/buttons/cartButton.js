import { getCart, saveCart } from "../../tools/storage/storage.js";

export default function toggleCart() {
  const cartButton = document.querySelector(
    ".product__item .product__button--cart"
  );

  cartButton.addEventListener("click", handleClick);

  function handleClick() {
    this.classList.toggle("added");

    const id = this.dataset.id;
    const title = this.dataset.title;
    const price = this.dataset.price;
    const image = this.dataset.image;

    const currentCart = getCart();
    const productExist = currentCart.find(function (product) {
      return product.id === id;
    });

    if (productExist === undefined) {
      const cart = { id: id, title: title, price: price, image: image };
      currentCart.push(cart);
      saveCart(currentCart);
    } else {
      const newCart = currentCart.filter((cart) => cart.id !== id);
      saveCart(newCart);
    }
  }
}
