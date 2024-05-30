// Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Portfolio Section
const galleryImages = document.querySelectorAll('.gallery img');
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.backgroundColor = 'white';
    });
    image.addEventListener('mouseleave', () => {
        image.style.backgroundColor = '';
    });
});

// Contact Section
const submitButton = document.getElementById('submit');
submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = 'green';
});
submitButton.addEventListener('mouseleave', () => {
    submitButton.style.backgroundColor = '#000000dc';
});

// Hobbies Section
const hobbyItems = document.querySelectorAll('.hobby');
hobbyItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
});
