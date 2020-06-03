window.onscroll = function() {
    var x = window.scrollY;
    var nav = document.querySelector(".nav_bar");
    if (x > 100 && x < 780) {
        nav.classList.add("hidden");
    } else {
        nav.classList.remove("hidden");
    }
    if (x > 780) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
}
