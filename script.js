// JavaScript to handle the animation and display of content
window.addEventListener('load', function() {
    // After the circle expands, display the content
    const content = document.querySelector('.content');
    setTimeout(() => {
        content.style.display = 'block';
    }, 3000); // Wait 3 seconds (duration of the circle expansion)
});
