import { getToken } from "../tools/storage/storage.js";
import createMenu from "../components/common/createMenu.js";
import adminMenu from "../components/common/adminMenu.js";
import { baseUrl } from "../tools/data/api.js";
import displayMessage from "../components/common/displayMessage.js";

const token = getToken();

if (!token) {
  location.href = "/login.html";
}

createMenu();
adminMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim();

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    descriptionValue.length === 0 ||
    imageValue.length === 0
  ) {
    return displayMessage(
      "warning",
      "please fill out all inputs",
      ".message-container"
    );
  }

  addProduct(titleValue, priceValue, descriptionValue, imageValue);
}

async function addProduct(title, price, description, image) {
  const url = baseUrl + "products";

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: featured,
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("success", "Product is added", ".message-container");
    }

    if (json.error) {
      displayMessage("error", json.message, ".message-container");
    }
  } catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  }
}
