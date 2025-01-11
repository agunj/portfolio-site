window.addEventListener('load', function() {
    // Get the content element
    const content = document.querySelector('.content');

    // Wait for the circle animation to complete (3 seconds)
    setTimeout(() => {
        // Display the content after 3 seconds
        content.style.display = 'block';
    }, 3000); // Wait for the duration of the circle animation
});
