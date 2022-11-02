const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const createLi = (element) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = element;
  ingredientItem.classList.add("item");

  // console.log(ingredientItem);
  return ingredientItem;
};

const list = ingredients.map((ingredient) => createLi(ingredient));

ingredientsList.append(...list);

// console.log(list);
