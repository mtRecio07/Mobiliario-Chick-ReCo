document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // Manejo de Scroll para color de Header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Abrir/Cerrar menú móvil
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        header.classList.toggle('menu-open');
    });
});