export default function displaymessage(messageType, message, targetElement) {
  const element = document.querySelector(targetElement);

  element.innerHTML = `<div class="message ${messageType}"><h3>${message}<h/3></div>`;
}
