
var prevScrollpos = window.pageYOffset;
var header2 = document.getElementById("header2");
var sidebar = document.getElementById("sidebar");
var body = document.getElementById("body-1");

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header2.style.transform = "translateY(0)";
        sidebar.style.transform = "translateY(0px)";
        body.style.transform = "translateY(-30px)";

    } else {
        header2.style.transform = "translateY(-64px)";
        sidebar.style.transform = "translateY(-48px)";
        body.style.transform = "translateY(-64px)";
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
console.log(chieucao2.offsetHeight);
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
    xemthem.style.top = 412*(k+1) + "px";

    
    if( soSP >= tongSP.length - 2){
        xemthem.style.display = 'none';
    }

}
