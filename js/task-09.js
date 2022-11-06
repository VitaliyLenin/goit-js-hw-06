function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  backColorName: document.querySelector(".color"),
  body: document.querySelector("body"),
};

refs.changeColorBtn.addEventListener("click", onChangeColorBack);

function onChangeColorBack(event) {
  const backgroundColor = getRandomHexColor();
  refs.body.style.backgroundColor = backgroundColor;
  refs.backColorName.textContent = backgroundColor;
}
