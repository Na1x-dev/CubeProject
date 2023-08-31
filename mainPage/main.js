let isBurgerMenuOpen = false;
let burgerCheckboxLabel = document.querySelector(".burger-label");
let burgerMenu = document.querySelector(".burger-menu");
let burgerCheckboxButton = document.querySelector(".burger-button");
let curtain = document.querySelector(".curtain");
let accordionClickAreas = document.getElementsByClassName("about-accordion-list-part");
let sliderItems = document.getElementsByClassName("itcss__item");
let sliderIndicator = document.querySelector(".pres-slider-indicator");
let sliderIndicatorBody = document.querySelector(".pres-slider-body");


//burger menu section start
function switchBurgerMenu() {
    burgerCheckboxLabel.onclick = function () {
        if (isBurgerMenuOpen) {
            isBurgerMenuOpen = false;
            hideBurgerMenu();
            // brighterCurtain();
        }
        else {
            isBurgerMenuOpen = true;
            showBurgerMenu();
            // darkerCurtain();
        }
    }
};

function showBurgerMenu() {
    burgerMenu.style.left = 0;
}

function hideBurgerMenu() {
    burgerMenu.style.left = "100vw";
}

// function darkerCurtain() {
//     curtain.style.opacity = "1";
//     curtain.style.zIndex = "9";
// }

// function brighterCurtain() {
//     curtain.style.opacity = "0";
//     curtain.style.zIndex = "-1";
// }

//burger menu end

//accordion start

function setClickToAccordionPart() {
    for (let accordPart of accordionClickAreas) {
        accordPart.addEventListener("mousedown", function () {

            let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
            console.log(window.getComputedStyle(accordPartContent).height);
            changeAccordionPartContent(accordPart);
        })
    }
}

function showAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    let accordPartContentText = accordPart.querySelector('.about-accordion-text-content');
    let accordPartContentImg = accordPart.querySelector('.about-accordion-image-content');
    accordPartContent.style.maxHeight = 'calc(200*var(--adapt-multiplier))';
    accordPartContentText.style.height = 'auto';
    accordPartContentText.style.opacity = '1';
    accordPartContentImg.style.maxHeight = 'calc(200*var(--adapt-multiplier))';
    accordPartContentText.style.height = 'calc(200*var(--adapt-multiplier))';
}

function hideAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    let accordPartContentText = accordPart.querySelector('.about-accordion-text-content');
    let accordPartContentImg = accordPart.querySelector('.about-accordion-image-content');
    accordPartContent.style.maxHeight = '0';
    accordPartContentText.style.height = '0';
    accordPartContentText.style.opacity = '0';
    accordPartContentImg.style.maxHeight = '0';
    accordPartContentText.style.height = '0';
}

function changeAccordionPartContent(accordPart) {
    let accordPartContent = accordPart.querySelector('.about-accordion-content-container');
    if (window.getComputedStyle(accordPartContent).height == '0px') {
        showAccordionPartContent(accordPart);
        showMinusIcon(accordPart);
    }
    else {
        hideAccordionPartContent(accordPart);
        showPlusIcon(accordPart);
    }
}

function showPlusIcon(accordPart) {
    let accordPlusIcon = accordPart.querySelector('.about-accordion-heading-icon');
    accordPlusIcon.style.clipPath = 'polygon(0 48%, 48% 48%, 48% 0, 52% 0, 52% 48%, 100% 48%, 100% 52%, 52% 52%, 52% 100%, 48% 100%, 48% 52%, 0 52%)';
    accordPlusIcon.style.transform = 'rotate(0deg)';
}

function showMinusIcon(accordPart) {
    let accordPlusIcon = accordPart.querySelector('.about-accordion-heading-icon');
    accordPlusIcon.style.clipPath = 'polygon(48% 0, 52% 0, 52% 100%, 48% 100%)';
    accordPlusIcon.style.transform = 'rotate(270deg)';
}

//accordion end

//slider start

function addSlider() {
    document.addEventListener('DOMContentLoaded', () => {
        // активация слайдера
        slider = new ItcSimpleSlider('.itcss', {
            loop: true,
            autoplay: true,
            swipe: true
        });

    });
}

function setSliderIndicatorSize(){
    sliderIndicator.style.width = window.getComputedStyle(sliderIndicatorBody).width.slice(0, -2)/3 + "px";
}

    // slider.move();

//slider end

function main() {
    switchBurgerMenu();
    setClickToAccordionPart();
    setSliderIndicatorSize();
    addSlider();
}

main();