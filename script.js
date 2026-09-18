// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add a current year to the footer
    const footer = document.querySelector('footer');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = `&copy; ${year} ANSARI IT. <a href="https://github.com/yourusername" target="_blank">GitHub</a>`;
    }

    // Example: Alert when a project card is clicked (for demonstration)
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            alert('You clicked a project card! Add your own functionality here.');
        });
    });
});