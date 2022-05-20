const tokenKey = "token";
const userKey = "user";
const favouritKey = "cart";

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return null;
  }

  return JSON.parse(value);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function getUsername() {
  const user = getFromStorage(userKey);

  if (user) {
    return user.username;
  }

  return null;
}

function removeFromStorage(key, value) {
  localStorage.removeItem(key, JSON.stringify(value));
}

export function clearUser(user, token) {
  removeFromStorage(userKey, user);
  removeFromStorage(tokenKey, token);
}

export function clearStorage() {
  localStorage.clear();
}

export function getCart() {
  const inCart = localStorage.getItem(favouritKey);

  if (!inCart) {
    return [];
  } else {
    return JSON.parse(inCart);
  }
}

export function saveCart(inCart) {
  localStorage.setItem(favouritKey, JSON.stringify(inCart));
}
