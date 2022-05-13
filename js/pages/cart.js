import { renderCart } from "../checkout/renderCart.js";
import { totalCart } from "../checkout/totalCart.js";
import createMenu from "../components/common/createMenu.js";
import heroImage from "../components/common/heroImage.js";

createMenu();
heroImage();

renderCart();
totalCart();
