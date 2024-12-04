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


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
});


