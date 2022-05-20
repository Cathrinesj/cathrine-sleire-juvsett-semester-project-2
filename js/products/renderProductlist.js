import displaymessage from "../components/common/displayMessage.js";

export function renderProductlist(productsToRender) {
  const productContainer = document.querySelector(".products");
  const loaderContainer = document.querySelector(".loader");

  productContainer.innerHTML = "";
  loaderContainer.innerHTML = "";

  if (productsToRender.length === 0) {
    return displaymessage("warning", "No items for this search", ".products");
  }

  productsToRender.forEach(function (product) {
    productContainer.innerHTML += `<div class="col-md-3 products__item border__green">
                                        <img src="${product.image_url}"/>
                                        <div class ="link">
                                          <a href="product.html?id=${product.id}">
                                            <h3>${product.title} <i class="fa-solid fa-angles-right"></i></h3>
                                            <h4>NOK ${product.price},-</h4>
                                          </a>
                                        </div>  
                                    <div>`;
  });
}
