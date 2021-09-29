let grayBookmark = document.getElementById('gray-bookmark');
let greenBookmark = document.getElementById('green-bookmark');
let bookmarkColor = document.getElementById('bookmark-color');
var bookmarked = document.createTextNode("ed");
let firstSelcted = document.getElementById('selcted-section');
let productsLeft = document.getElementById('products-left');
let backProject = document.getElementById('back-project');
let backgroundImage = document.getElementById('background-image');
let aboutSection = document.getElementById('about-this');
let logo = document.getElementById('logo');
let blackeditionLeft = document.getElementById('blackedition-left');
let secondSection = document.getElementById('second-section');
let mahogany = document.getElementById('mahogany-selcted');
let mahoganyLeft = document.getElementById('mahogany-left');
function bookMark() {
    if (greenBookmark.classList.contains('d-none')) {
        grayBookmark.classList.add('d-none');
        greenBookmark.classList.remove('d-none');
        bookmarkColor.classList.add('text-darkCyan');
        bookmarkColor.appendChild(bookmarked);
    } else {
        grayBookmark.classList.remove('d-none');
        greenBookmark.classList.add('d-none');
        bookmarkColor.classList.remove('text-darkCyan');
        bookmarkColor.removeChild(bookmarked);
    }
}
function checked() {
    firstSelcted.classList.remove('d-none');
    productsLeft.classList.add('bamboostand-left-opened');
    productsLeft.classList.remove('bamboostand-left');
    blackeditionLeft.classList.add('blackedition-left-opened');
}
function backThisProject() {
    if (backProject.classList.contains('d-none')) {
        backProject.classList.remove('d-none');
        backgroundImage.classList.add('opacity-50');
        aboutSection.classList.add('opacity-50');
        logo.classList.add('d-none');
    }
}
function closeModal() {
    if (backgroundImage.classList.contains('opacity-50')) {
        backProject.classList.add('d-none');
        backgroundImage.classList.remove('opacity-50');
        aboutSection.classList.remove('opacity-50');
        logo.classList.remove('d-none');
    }
}
function blackedition() {
    secondSection.classList.remove('d-none');
}
function mahoganySpecial(){
    mahogany.classList.remove('d-none');
    mahoganyLeft.classList.add('mahogany-left-opened');
}

