const button = document.getElementById('cheat');
const message = document.getElementById('message');
const cheatMessage = document.getElementById('cheat-message');
const features = document.getElementsByName('features[]');
const nameInput = document.getElementById('name');
const cityInput = document.getElementById('city');

button.addEventListener('click', () => {
  let messageText = '';
  for (let i = 0; i < features.length; i++) {
    if (features[i].checked) {
      messageText += features[i].value + '<br>';
    }
  }
  if (messageText) {
    cheatMessage.innerHTML = `<p>Cheat Actived<br>${nameInput.value}, ${cityInput.value}</p>`;
    message.style.display = 'none';
    cheatMessage.style.display = 'block';
  }
});