export function totalCart() {
  const total = [];
  const products = document.querySelectorAll(".cart__price");

  products.forEach(function (product) {
    total.push(parseFloat(product.textContent));
  });

  const cost = total.reduce(function (total, product) {
    total += product;
    return total;
  }, 0);

  const totalCost = cost.toFixed(2);

  const cartTotal = document.querySelector(".cart__total");

  console.log(totalCost);

  cartTotal.innerHTML = "NOK" + totalCost;

  if (products.length === 0) {
    cartTotal.innerHTML = "No items in cart yet";
  }
}
