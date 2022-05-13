import displaymessage from "../components/common/displayMessage.js";

export function renderProductlist(productsToRender) {
  const productContainer = document.querySelector(".products");

  if (productsToRender.length === 0) {
    return displaymessage("warning", "No items for this search", ".products");
  }

  productContainer.innerHTML = "";

  productsToRender.forEach(function (product) {
    productContainer.innerHTML += `<div class="products-item">
                                        <img src="${product.image.formats.small.url}"/>
                                        <h3>${product.title}</h3>
                                        <h4>${product.price}</h4>
                                        <a href="product.html?id=${product.id}">View more</a>
                                    <div>`;
  });
}
