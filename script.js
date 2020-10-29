let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
let body = document.body;
menuBtn.addEventListener("click", function(e) {
    menuBtn.classList.toggle("clicked");
    menu.classList.toggle("show");
    body.classList.toggle("dropdown-show");
});