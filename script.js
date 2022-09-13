const menuIcon = document.querySelector('#menuIcon');
const navLinks = document.querySelector('.navLinks');
const closeMenuBtn = document.querySelector('.closeMenuBtn');

const click = () => {
    menuIcon.addEventListener('click', () => {
        navLinks.style.display = "flex";
        closeMenuBtn.style.display = "flex";
    })
    closeMenuBtn.addEventListener('click', () => {
        navLinks.style.display = 'none';
    })
}

click();