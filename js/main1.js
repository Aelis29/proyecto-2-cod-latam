const button = document.querySelector(".button");
const nav = document.querySelector(".nav");

button.addEventListener("click", () => {
  nav.classList.toggle("active");
});



const menu= document.querySelector(".menu").querySelectorAll("a");
console.log(menu)
menu.forEach((element) => {
  element.addEventListener("click", function () {
    menu.forEach(menu => menu.classList.remove("activo"));

    this.classList.add("activo");
  });
});
