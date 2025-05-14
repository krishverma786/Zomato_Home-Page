// Simple animation for header links on hover
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'scale(1)';
    });
});

// Animate the input focus
const searchInput = document.querySelector('input');
searchInput.addEventListener('focus', () => {
    searchInput.style.boxShadow = '0 0 8px #e23744';
});
searchInput.addEventListener('blur', () => {
    searchInput.style.boxShadow = 'none';
});
// Alert on Order Now button click
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert("Redirecting to the order page...");
        // Simulate navigation or add actual logic here
    });
});


// Optional: Scroll to top animation when footer is clicked
document.querySelector('footer').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
