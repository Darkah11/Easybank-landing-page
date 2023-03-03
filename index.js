const nav = document.querySelector(".navbar");
const menuBtn = document.querySelector(".mobile-menu-btn");
const body = document.querySelector("body")

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


if (body.clientWidth >= 783) {
    nav.classList.remove("active");
 }else {
    console.log("nah")
 };

 

