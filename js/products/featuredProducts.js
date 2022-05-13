export function featuredProducts(productsToRender) {
  const featuredContainer = document.querySelector(".featured");

  featuredContainer.innerHTML = "";

  productsToRender.forEach(function (featured) {
    if (featured.featured === true) {
      featuredContainer.innerHTML += `<div class="featured">
                                        <img src="${featured.image.formats.small.url}"/>
                                        <a href="product.html?id=${featured.id}" class="featured__button">
                                        <h3>${featured.title}</h3>
                                        </a>
                                    <div>`;
    }
  });
}
