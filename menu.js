document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.querySelector('.navbar-collapse'); // Select the collapsible menu
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link'); // Select all navigation links

    // Add a click event listener to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                // If the navbar is open, collapse it
                const navbarToggler = document.querySelector('.navbar-toggler'); // Select the hamburger button
                navbarToggler.click(); // Simulate a click on the hamburger button to close the menu
            }
        });
    });
});
