function isChecked(element) {
  if (element.checked) {
    element.value = "true";
  } else {
    element.value = "false";
  }
}
