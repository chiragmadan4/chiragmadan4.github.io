
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

document.querySelector("#start_btn").onclick = function() {
    document.querySelector("#about").scrollIntoView({behavior: "smooth"});
}

document.querySelector("#about_btn").onclick = function() {
    document.querySelector("#about").scrollIntoView({behavior: "smooth"});
}

document.querySelector("#work_btn").onclick = function() {
    document.querySelector("#work").scrollIntoView({behavior: "smooth"});
}

document.querySelector("#contact_btn").onclick = function() {
    document.querySelector("#contact").scrollIntoView({behavior: "smooth"});
}
