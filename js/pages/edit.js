import { getToken } from "../tools/storage/storage.js";
import { baseUrl } from "../tools/data/api.js";
import deleteButton from "../components/buttons/deleteButton.js";
import displayMessage from "../components/common/displayMessage.js";
import createMenu from "../components/common/createMenu.js";
import adminMenu from "../components/common/adminMenu.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const token = getToken();

if (!id) {
  document.location.href = "/productslist.html";
}

if (!token) {
  location.href = "/login.html";
}

createMenu();
adminMenu();

const url = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");
const idInput = document.querySelector("#id");

(async function () {
  try {
    const response = await fetch(url);
    const details = await response.json();

    title.value = details.title;
    price.value = details.price;
    description.value = details.description;
    image.value = details.image;

    deleteButton(details.id);
  } catch (error) {
    console.log(error);
  } finally {
    form.style.display = "block";
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim();
  const idValue = idInput.value;

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

  editProduct(titleValue, priceValue, descriptionValue, imageValue, idValue);
}

async function editProduct(title, price, description, image, id) {
  const url = baseUrl + "products" + id;

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image: image.url,
  });

  const token = getToken();

  const options = {
    method: "PUT",
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
