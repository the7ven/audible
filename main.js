const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    carousel.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

prevButton.addEventListener('click', () => showSlide(currentIndex - 1));
nextButton.addEventListener('click', () => showSlide(currentIndex + 1));

// Ajout de la prise en charge du swipe pour les appareils tactiles
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        showSlide(currentIndex + 1); // Swipe gauche
    } else if (touchEndX - touchStartX > 50) {
        showSlide(currentIndex - 1); // Swipe droit
    }
}


function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150; // Seuil de visibilité avant de déclencher l'animation

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Ajouter un écouteur d'événement pour la fonction de scroll
window.addEventListener('scroll', reveal);

// Appeler la fonction pour vérifier si des éléments sont déjà visibles
reveal();