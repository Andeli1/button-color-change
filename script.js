let originalColor = '#fofofo';
// Previous background color
let prevColor = originalColor;
// Function to change background color
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    prevColor = originalColor;
    originalColor = color;
  }
  // Event listener for button clicks
document.querySelectorAll('button').forEach(item => {
    item.addEventListener('click', event => {
      changeBackgroundColor(event.target.style.backgroundColor);
    });
  });
  


