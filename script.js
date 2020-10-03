let menuBtn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");
menuBtn.addEventListener("click", function(e) {
    this.classList.toggle("clicked");
    document.body.classList.toggle("dropdown-show");
    menu.classList.toggle("show");
});