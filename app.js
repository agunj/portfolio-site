const button = document.getElementById('showCircleBtn');
const circle = document.getElementById('circle');
const contact = document.getElementById('contactButton');

button.addEventListener('click', function() {
  circle.style.visibility = 'visible'; // Make the circle visible
  circle.style.opacity = 1; // Fade in the circle
  circle.style.width = '2000px'; // Set the size of the circle
  circle.style.height = '2000px'; // Set the size of the circle

});
contact.addEventListener('click', function() {
  circle.style.visibility = 'visible'; // Make the circle visible
  circle.style.opacity = 1; // Fade in the circle
  circle.style.width = '2000px'; // Set the size of the circle
  circle.style.height = '2000px'; // Set the size of the circle
  
});
