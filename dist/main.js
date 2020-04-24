//Active link


var menu = document.querySelector(".navbar__menu");
var link = menu.querySelector(".navbar__link");
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("navbar__link--active");
        current[0].className = current[0].className.replace(" navbar__link--active", "");
        this.className += " navbar__link--active";
    });
}