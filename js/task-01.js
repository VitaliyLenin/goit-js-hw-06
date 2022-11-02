const allCategoriesItems = document.querySelectorAll(".item");
console.log("Number of categories:", allCategoriesItems.length);

allCategoriesItems.forEach((el) => {
  console.log("Category:", el.querySelector("h2").textContent);
  console.log("Elements:", el.querySelectorAll("li").length);
});
