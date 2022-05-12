const tokenKey = "token";
const userKey = "user";

export function savetoken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }

  return null;
}

export function clearStorage() {
  localStorage.clear();
}

export function clearUser() {
  localStorage.clear(userKey);
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

export function getExistingCart() {
  const cart = localStorage.getItem("addedToCart");

  if (cart === null) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}
