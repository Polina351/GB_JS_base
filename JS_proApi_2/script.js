'use strict';

const imageBox = document.querySelector('.image-box');
const carouselBtns = document.querySelectorAll('.pagination__elem-box');
const paginationElems = document.querySelectorAll('.pagination__elem');
const leftBtn = document.querySelector('.carret-left');
const rightBtn = document.querySelector('.carret-right');
const carrets = document.querySelectorAll('.carret');


for (let i = 0; i < carouselBtns.length; i++) {
    carouselBtns[i].addEventListener('click', function() {
        imageBox.style.right = `${i * 475}px`;
        activePagination();
        inactivCarret()
    });
}

leftBtn.addEventListener('click', function() {
    let positionCarousel = parseInt(imageBox.style.right) || 0;
    if (positionCarousel > 0) {
        positionCarousel -= 475;
        imageBox.style.right = `${positionCarousel}px`;
        carouselBtns[4].classList.add('activ');
        activePagination();
        inactivCarret();
    }
});

rightBtn.addEventListener('click', function() {
    let positionCarousel = parseInt(imageBox.style.right) || 0;
    if (positionCarousel < 1900) {
        positionCarousel += 475;
        imageBox.style.right = `${positionCarousel}px`;
        activePagination()
        inactivCarret()
    }
});

function activePagination() {
    let positionCarousel = parseInt(imageBox.style.right) || 0;
    for (let i = 0; i < paginationElems.length; i++) {
        paginationElems[i].classList.remove('activ');
        carouselBtns[i].classList.remove('disabled');
    }
    const index = positionCarousel / 475;
    paginationElems[index].classList.add('activ');
    carouselBtns[index].classList.add('disabled');
}
function inactivCarret() {
    let positionCarousel = parseInt(imageBox.style.right) || 0;
    for (let i = 0; i < carrets.length; i++) {
        carrets[i].classList.remove('inactiv');
        carrets[i].disabled = false;
    }
    if (positionCarousel <= 0) {
        leftBtn.classList.add('inactiv');
        leftBtn.disabled = true;
    } else if (positionCarousel >= 1900) {
        rightBtn.classList.add('inactiv');
        rightBtn.disabled = true;
    }
}
