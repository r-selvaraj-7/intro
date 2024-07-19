document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeButton = document.getElementById('close-btn');

  // Show the popup immediately upon page load
  popup.style.display = 'flex';

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
  });

  // Optional: Hide the popup if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });
});
