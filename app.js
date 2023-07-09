//stop animations and transitions when first load website
window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.remove('no-transition');
    }, 100);
});

// Insert responsive menu
const header = document.querySelector('header');
header.appendChild(responsiveMenu);


let link = undefined
function scrollToSection(link) {
    window.open(link, "_self")
}
