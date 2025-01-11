document.addEventListener("DOMContentLoaded", function() {
    const circle = document.getElementById("circle");
    const content = document.getElementById("content");

    // Once the circle animation ends, show the content with fade-in
    circle.addEventListener("animationend", function() {
        content.classList.remove("hidden");
        content.classList.add("show");
    });
});
