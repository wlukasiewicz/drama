var navbar = document.getElementById("navigation");
var navList = document.getElementById("nav_list");
var initialNavbarOffsetTop = navbar.getBoundingClientRect().top;

window.onscroll = function () {
    console.log(initialNavbarOffsetTop);
    console.log(window.pageYOffset);
    stickNavbar();
};

function stickNavbar() {
    if (window.pageYOffset >= initialNavbarOffsetTop) {
        navbar.classList.add("fixed-top");
        //        navbar.classList.add("slim");
        //        navList.classList.add("sticky");
        return;
    }
    navbar.classList.remove("fixed-top");
    //    navbar.classList.remove("slim");
}
