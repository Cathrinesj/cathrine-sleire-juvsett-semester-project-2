import { baseUrl } from "../tools/data/api.js";
import { featuredProducts } from "../products/featuredProducts.js";
import createMenu from "../components/common/createMenu.js";
import heroImage from "../components/common/heroImage.js";

createMenu();
heroImage();

const url = baseUrl + "products";

async function getFeaturedProducts() {
  try {
    const response = await fetch(url);
    const products = await response.json();

    featuredProducts(products);

    if (products.error) {
      displaymessage("error", products.message, "featured");
    }
  } catch (error) {
    console.log(error);
  }
}

getFeaturedProducts();
