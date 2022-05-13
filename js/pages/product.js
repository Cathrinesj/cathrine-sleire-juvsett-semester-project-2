import { baseUrl } from "../tools/data/api.js";
import { renderProduct } from "../products/renderProduct.js";
import toggleCart from "../components/buttons/cartButton.js";
import displaymessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";
import heroImage from "../components/common/heroImage.js";

createMenu();
heroImage();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idProduct = params.get("id");

const url = baseUrl + "products/" + idProduct;

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderProduct(products);
    toggleCart();

    if (products.error) {
      displaymessage("error", products.message, "products");
    }
  } catch (error) {
    console.log(error);
  }
}

fetchProduct();
