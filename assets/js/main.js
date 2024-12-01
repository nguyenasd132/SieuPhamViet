const listImage = document.querySelector('.list-images');
const imgs = document.querySelectorAll('.list-images img');
const length = imgs.length;
let current = 0;

function showCurrentImage() {
    imgs.forEach(img => {
        img.style.display = 'none';  
    });
    imgs[current].style.display = 'block';  
}
setInterval(() => {
    current++; 
    if (current === length) {
        current = 0; 
    }
    showCurrentImage();
}, 3000); 

showCurrentImage();