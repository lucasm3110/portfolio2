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

// Insert responsive menu
const header = document.querySelector('header');
header.appendChild(responsiveMenu);


//Shapes
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// generate random shape
function generateShape() {
    const container = document.getElementById('container');
    const shapeTypes = ['square', 'triangle', 'circle'];
    const shapeType = shapeTypes[getRandomNumber(0, 2)];
    const shape = document.createElement('div');
    shape.classList.add('shape', shapeType);

    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    const x = getRandomNumber(0, maxX);
    const y = getRandomNumber(0, maxY);

    shape.style.left = x + 'px';
    shape.style.top = y + 'px';

    container.appendChild(shape);
    moveShape(shape);
}

function isMobileDevice() {
    return window.innerWidth <= 768; // Adjust the value according to your needs
}

if (isMobileDevice()) {
    function moveShape(shape) {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        const x = getRandomNumber(0, maxX);
        const y = getRandomNumber(0, maxY);

        shape.style.left = x + 'px';
        shape.style.top = y + 'px';

    }
} else {
    //move the shape randomly
    function moveShape(shape) {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        const x = getRandomNumber(0, maxX);
        const y = getRandomNumber(0, maxY);

        shape.style.left = x + 'px';
        shape.style.top = y + 'px';

        setTimeout(() => {
            moveShape(shape);
        }, 5000);
    }
}



// shape numbers
const numShapes = 20;
for (let i = 0; i < numShapes; i++) {
    generateShape();
}