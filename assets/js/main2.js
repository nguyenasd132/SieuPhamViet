
var prevScrollpos = window.pageYOffset;
var header2 = document.getElementById("header2");
var sidebar = document.getElementById("sidebar");
var body = document.getElementById("body-1");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header2.style.transform = "translateY(0)";

    } else {
        header2.style.transform = "translateY(-64px)";
    }
    prevScrollpos = currentScrollPos;
}
var xemthem = document.querySelector('#xemthem');
var containerSP = document.getElementById("body-2");
console.log(xemthem);
let soSP = 8;
let chieucao = containerSP.offsetHeight;
let chieucao2 = document.querySelector('.danhMucItem .sale-container-1 .sp-card');
let footer = document.getElementById("footer");
let container = document.querySelector('.danhMucItem .sale-container-1 .sale-slide-show');
let k = 0;

function loadmore(){
    k++;
    let chieucao3 = chieucao + 412*k;
    let tongSP = [...document.querySelectorAll('.sale-container-1 .sale-slide-show .sp-card')];
    for( var i = soSP; i < soSP + 4; i++){
        tongSP[i].style.display = 'inline-block';
    }
    soSP += 4;
    containerSP.style.height = chieucao3 + "px";
    footer.style.marginTop = 412*k + "px";
    xemthem.style.top = 50 + 412*(k+2) + "px";
    container.style.height = 812 + 412*k + "px";

    if( tongSP.length <= soSP ){
        xemthem.style.display = 'none';
    }

}
