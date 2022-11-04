const refs = {
  valueEl: document.querySelector("#value"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};
console.log(refs);

const counterValue = {
  value: 0,
  decrementFn() {
    this.value -= 1;
    return (refs.valueEl.textContent = this.value);
  },
  incrementFn() {
    this.value += 1;
    return (refs.valueEl.textContent = this.value);
  },
};

refs.decrementBtn.addEventListener(
  "click",
  counterValue.decrementFn.bind(counterValue)
);
refs.incrementBtn.addEventListener(
  "click",
  counterValue.incrementFn.bind(counterValue)
);

console.log(refs.valueEl, refs.decrementBtn, refs.incrementBtn);
console.log(counterValue);
