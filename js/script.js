"use strict";


navEventListener();
sliderScript();

const scrollUp = document.querySelector(".scroll-up");
scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// <-----_________________Функция обработчика событий для кнопок___________
function navEventListener() {
    const scrollNavArr = document.querySelectorAll(".scroll-to"); // Добавление кнопок в массив
    let scrollHeight;
    for (let i = 0; i < scrollNavArr.length; i++) { // Навешиваем обработчик событий на все кнопки в массиве
        scrollNavArr[i].addEventListener("click", () => {
            scrollHeight = collectSections(i);
            scrollToGeneral(scrollHeight);
        });
    }
}

// _____________________Функция обработчика событий для кнопок------>

function scrollToGeneral(scrollHeight) { // Общая функция с описанием скролла
    event.preventDefault();
    window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
    });
}
// <-----_________________Функция вычисления высоты скролла_________________
function collectSections(button = 0) {
    /*Собираем массив из основных секций сайта. 
                                           Передаем переменную button (индекс кнопки), 
                                           которую используем для подсчёта необходимой высоты скролла.*/
    let height = 0;
    const headerHeight = document.querySelector(".header__top").offsetHeight;
    /*Вычисляем высоту шапки. 
                                                                                   Вычитаем ёё, чтобы шапка 
                                                                                   не перекрывала блок после скролла.*/
    const sectionsArr = document.getElementsByClassName("section-block");
    let i;
    if (button === 0) { // С помощью if / else if подсчитываем высоту скролла для каждой кнопки в шапке.
        return height;
    } else if (button === 1) {
        for (i = 0; i < 1; i++) {
            height += sectionsArr[i].offsetHeight;
        }
        height -= headerHeight;
        return height;
    } else if (button === 2) {
        for (i = 0; i < 4; i++) {
            height += sectionsArr[i].offsetHeight;
        }
        height -= headerHeight;
        return height;
    } else if (button === 3) {
        for (i = 0; i < 8; i++) {
            height += sectionsArr[i].offsetHeight;
        }
        height -= headerHeight;
        return height;
    } else if (button === 4) {
        for (i = 0; i < 9; i++) {
            height += sectionsArr[i].offsetHeight;
        }
        height -= headerHeight;
        return height;
    } else if (button === 5) {
        for (i = 0; i < 10; i++) {
            height += sectionsArr[i].offsetHeight;
        }
        height -= headerHeight;
        return height;
    }
}
//________________Функция вычисления высоты скролла------>

//<---------------Блок кода для слайдера________________

function sliderScript() {
    const sliderArrows = document.querySelectorAll(".slider__arrow-button");
    const sliderContainer = document.querySelector(".slider__content");
    const arrowImgs = document.querySelectorAll(".slider__arrow-img");
    const dots = document.querySelectorAll(".slider__dot-img");
    const dotsChosen = document.querySelectorAll(".slider__dot-img-chosen");

    let lastSlide = 0;
    let currentSlide = 0;
    dotsToggle();

    function dotsToggle() {
        dots[currentSlide].classList.toggle("slider__dot-img--inactive");
        dotsChosen[currentSlide].classList.toggle("slider__dot-img--active");
    }

    function lastDotToggle() {
        dots[lastSlide].classList.toggle("slider__dot-img--inactive");
        dotsChosen[lastSlide].classList.toggle("slider__dot-img--active");
    }

    sliderArrows[0].addEventListener("click", () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = 5;
            dotsToggle();
            lastDotToggle();
        } else {
            dotsToggle();
            lastDotToggle();
        }
        sliderContainer.style.left = -100 * currentSlide + "vw";
        lastSlide = currentSlide;
    });
    sliderArrows[1].addEventListener("click", () => {
        currentSlide++;
        if (currentSlide > 5) {
            currentSlide = 0;
            lastDotToggle();
            dotsToggle();
        } else {
            dotsToggle();
            lastDotToggle();
        }
        sliderContainer.style.left = -100 * currentSlide + "vw";
        lastSlide = currentSlide;
    });

    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => {
            currentSlide = i;
            dotsToggle();
            sliderContainer.style.left = -100 * currentSlide + "vw";
            dots[lastSlide].classList.toggle("slider__dot-img--inactive");
            dotsChosen[lastSlide].classList.toggle("slider__dot-img--active");
            lastSlide = currentSlide;
        });
    }

    sliderArrows[0].addEventListener("mouseover", () => {
        arrowImgs[0].style.left = "-40%";
        sliderArrows[0].style.opacity = "100%";
    });
    sliderArrows[0].addEventListener("mouseout", () => {
        arrowImgs[0].style.left = "0";
        sliderArrows[0].style.opacity = "35%";
    });
    sliderArrows[1].addEventListener("mouseover", () => {
        arrowImgs[1].style.left = "40%";
        sliderArrows[1].style.opacity = "100%";
    });
    sliderArrows[1].addEventListener("mouseout", () => {
        arrowImgs[1].style.left = "0";
        sliderArrows[1].style.opacity = "35%";
    });
}
//_________Блок кода для слайдера_______------->
