const phoneButton = document.getElementById('phone-button');

phoneButton.addEventListener('mouseover', () => {
    phoneButton.textContent = 'Clicca per chiamare';
});

phoneButton.addEventListener('mouseout', () => {
    phoneButton.textContent = '+1 123-456-7890';
});