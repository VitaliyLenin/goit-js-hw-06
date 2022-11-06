const refs = {
  inputEl: document.querySelector("#font-size-control"),
  spanText: document.querySelector("#text"),
};

refs.inputEl.addEventListener("input", onChangeFontSize);

function onChangeFontSize(event) {
  refs.spanText.style.fontSize = event.currentTarget.value + "px";
}
