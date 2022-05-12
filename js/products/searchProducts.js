import { renderProductlist } from "./renderProductlist.js";

export function searchProducts(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const searchedProduct = products.filter(function (product) {
      if (product.title.toLowerCase().includes(searchValue)) {
        return true;
      }
    });

    renderProductlist(searchedProduct);
  };
}
