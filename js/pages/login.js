import displaymessage from "../components/common/displayMessage.js";
import { saveToken, saveUser } from "../tools/storage/storage.js";
import { baseUrl } from "../tools/data/api.js";
import createMenu from "../components/common/createMenu.js";

createMenu();

const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.lenght === 0 || passwordValue === 0) {
    return displaymessage("warning", "Invalid values", ".message-container");
  }

  doLogin(usernameValue, passwordValue);
}

async function doLogin(username, password) {
  const url = baseUrl + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "/add.html";
    }

    if (json.error) {
      displaymessage(
        "warning",
        "Username or password is wrong",
        ".message-container"
      );
    }
  } catch (error) {
    console.log(error);
  }
}
