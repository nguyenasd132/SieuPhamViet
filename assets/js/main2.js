
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
console.log(xemthem);
let soSP = 8;

xemthem.onclick = ()=>{
    let tongSP = [...document.querySelectorAll('.sale-container-1 .sale-slide-show .sp-card')];
    console.log(tongSP[1]);
    for( var i = soSP; i < soSP + 4; i++){
        tongSP[i].styles.display = 'inline-block';
    }
    soSP += 4;
    if(soSP >= tongSP.length){
        xemthem.style.display = 'none';
    }
}
