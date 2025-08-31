const humberger = document.querySelector('.humberger');
const nav = document.querySelector('.nav');
const navv = document.querySelector('nav');

humberger.addEventListener('click', () => {
    nav.classList.toggle('deactive');
    navv.classList.toggle('off');
});


const slider = document.getElementById('slider');
const boxes = document.querySelectorAll('.box');
const totalBoxes = boxes.length;
let index = 0;
    
function updateSlide() {
    const boxWidth = boxes[0].offsetWidth + 20; 
    slider.style.transform = `translateX(${-index * boxWidth}px)`;
}

function nextSlide() {
    if (index < totalBoxes - 1) {
        index++;
        updateSlide();
    }
}

function prevSlide() {
    if (index > 0) {
        index--;
        updateSlide();
    }
}


setInterval(() => {
    if (index < totalBoxes - 1) {
        index++;
    } else {
        index = 0;
    }
    updateSlide();
}, 3000);

window.addEventListener("resize", updateSlide);