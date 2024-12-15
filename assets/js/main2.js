
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
let chieucao2 = document.querySelector('.danhMucItem .sale-container-1 .sp-card').offsetHeight;
console.log(chieucao2);
let footer = document.getElementById("footer");
let container = document.querySelector('.danhMucItem .sale-container-1 .sale-slide-show');
containerSP.style.height = 125 + chieucao2 * 2 + "px";
let chieucao = containerSP.offsetHeight;

footer.style.marginTop = 64 + "px";
container.style.height = chieucao2*2 + "px";
xemthem.style.top = 50 + chieucao2*(2) + "px";
let k = 0;

function loadmore(){
    k++;
    let chieucao3 = chieucao + chieucao2*k;
    let tongSP = [...document.querySelectorAll('.sale-container-1 .sale-slide-show .sp-card')];
    for( var i = soSP; i < soSP + 4; i++){
        tongSP[i].style.display = 'inline-block';
    }
    soSP += 4;
    containerSP.style.height = chieucao3 + "px";
    footer.style.marginTop = 64 + chieucao2*k + "px";
    xemthem.style.top = 50 + chieucao2*(k+2) + "px";
    container.style.height = chieucao2*(k+2) + "px";

    if( tongSP.length -2 <= soSP  ){
        xemthem.style.display = 'none';
    }

}
