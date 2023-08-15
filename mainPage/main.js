let isBurgerMenuOpen = false;
let burgerCheckboxLabel = document.querySelector(".burger-label");
let burgerMenu = document.querySelector(".burger-menu");
let burgerCheckboxButton = document.querySelector(".burger-button");
let curtain = document.querySelector(".curtain");


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

function darkerCurtain() {
    curtain.style.opacity = "1";
    curtain.style.zIndex = "9";
}

function brighterCurtain() {
    curtain.style.opacity = "0";
    curtain.style.zIndex = "-1";
}
//burger menu end

function main(){
    switchBurgerMenu();
}

main();