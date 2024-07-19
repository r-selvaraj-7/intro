// Get the pop-up and button elements
const popup = document.getElementById('popup');
const openPopupButton = document.getElementById('openPopup');
const closeBtn = document.querySelector('.close-btn');

// Open the pop-up
openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

// Close the pop-up when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the pop-up if the user clicks anywhere outside of the pop-up
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
