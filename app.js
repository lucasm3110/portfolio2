//stop animations and transitions when first load website
window.addEventListener('load', function () {
    setTimeout(function () {
        document.body.classList.remove('no-transition');
    }, 100);
});


// Responsive hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const responsiveMenu = document.createElement('div');
responsiveMenu.classList.add('responsive-menu');

// Create responsive menu
const navItems = document.querySelectorAll('nav ul li');
navItems.forEach(item => {
    const link = item.querySelector('a');
    const clone = link.cloneNode(true);
    responsiveMenu.appendChild(clone);
});

// Toggle responsive menu on click
hamburger.addEventListener('click', () => {
    if (responsiveMenu.style.display === 'block') {
        responsiveMenu.style.display = 'none';
    } else {
        responsiveMenu.style.display = 'block';
    }
});

// Insert responsive menu into the DOM
const header = document.querySelector('header');
header.appendChild(responsiveMenu);
