var prevScrollpos = window.pageYOffset;
var header2 = document.getElementById("header2");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header2.style.transform = "translateY(0)";
    } else {
        header2.style.transform = "translateY(-64px)";
    }
    prevScrollpos = currentScrollPos;
}