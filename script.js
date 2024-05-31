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

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal if user clicks outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
