export function featuredProducts(productsToRender) {
  const featuredContainer = document.querySelector(".featured");

  featuredContainer.innerHTML = "";

  productsToRender.forEach(function (featured) {
    if (featured.featured === true) {
      featuredContainer.innerHTML += `<div class="products__featured">
                                        <img src=${featured.image.url}/>
                                        <a href="product.html?id=${featured.id}">
                                        <h3>${featured.title}</h3>
                                        </a>
                                    <div>`;
    }
  });
}
