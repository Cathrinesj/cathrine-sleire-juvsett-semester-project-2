import { baseUrl } from "../tools/data/api.js";
import { renderProductlist } from "../products/renderProductlist.js";
import { searchProducts } from "../products/searchProducts.js";
import displaymessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";
import heroImage from "../components/common/heroImage.js";

createMenu();
heroImage();

const url = baseUrl + "products";

async function getProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    renderProductlist(products);
    searchProducts(products);

    if (products.error) {
      displaymessage("error", products.message, "products");
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts();
