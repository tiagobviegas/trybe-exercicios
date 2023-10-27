// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', (target) => {
  target.preventDefault()
});

INPUT_CHECKBOX.addEventListener('click', (target) => {
  target.preventDefault();
});

INPUT_TEXT.addEventListener('keydown', (target) => {
  let key = target.key
  if (key !== 'a') {
    target.preventDefault();
  }
});