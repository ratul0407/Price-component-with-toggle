"use strict";
const toggle = document.querySelector(".slider");
const prices = document.querySelectorAll(".card > p");
// initial prices
const initalPrice = [...prices].map((price) => price.textContent);
// annual prices
const arr = ["&dollar; 199.99", "&dollar; 249.99", "&dollar; 399.99"];
// adding event listener to the toggler button
toggle.addEventListener("click", function () {
  this.classList.toggle("annually");
  if (this.classList.contains("annually")) {
    prices.forEach((price, index) => {
      price.innerHTML = arr[index];
    });
  }
  if (!this.classList.contains("annually")) {
    prices.forEach((price, index) => {
      price.innerHTML = initalPrice[index];
    });
  }
});
