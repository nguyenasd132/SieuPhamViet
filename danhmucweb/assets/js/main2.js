var prevScrollpos = window.pageYOffset;
var header2 = document.getElementById("header2");
var sidebar = document.getElementById("sidebar");
var body = document.getElementById("body-1");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header2.style.transform = "translateY(0)";
        sidebar.style.transform = "translateY(0px)";
        body.style.transform = "translateY(0px)";

    } else {
        header2.style.transform = "translateY(-64px)";
        sidebar.style.transform = "translateY(-48px)";
        body.style.transform = "translateY(-64px)";
    }
    prevScrollpos = currentScrollPos;
}