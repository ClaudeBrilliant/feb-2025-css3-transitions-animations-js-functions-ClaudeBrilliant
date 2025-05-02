const bgColorPicker = document.getElementById('bgColor');
const animateBtn = document.getElementById('animateButton');

// Load saved color from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedColor = localStorage.getItem('bgColor');
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    bgColorPicker.value = savedColor;
  }
});

// Save color when user selects one
bgColorPicker.addEventListener('input', function () {
  const color = this.value;
  document.body.style.backgroundColor = color;
  localStorage.setItem('bgColor', color);
});

// Add animation on button click
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate');
  
  // Remove class after animation ends
  setTimeout(() => {
    animateBtn.classList.remove('animate');
  }, 500);
});
