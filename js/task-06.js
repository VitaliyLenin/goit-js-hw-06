const refs = {
  inputEl: document.querySelector("#validation-input"),
};

const inputSymbolLength = Number(refs.inputEl.dataset.length);
console.log(inputSymbolLength);

refs.inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === inputSymbolLength) {
    refs.inputEl.classList.add("valid");
    refs.inputEl.classList.remove("invalid");
  } else {
    refs.inputEl.classList.add("invalid");
    refs.inputEl.classList.remove("valid");
  }
}
