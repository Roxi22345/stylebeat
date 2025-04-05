const toggleBtn = document.getElementById('toggle-theme');
const body = document.body;

// Load saved theme if available
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light-mode';
  body.classList.add(savedTheme);
});

// Toggle between dark/light mode
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  const currentTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
  localStorage.setItem('theme', currentTheme);
});




// Funcția pentru a reda sau opri melodia
function playAudio() {
  var audio = document.getElementById('audio'); // Obținem elementul audio
  if (audio.paused) {
      audio.play(); // Redă melodia
  } else {
      audio.pause(); // Oprește melodia dacă e deja redată
  }
}

