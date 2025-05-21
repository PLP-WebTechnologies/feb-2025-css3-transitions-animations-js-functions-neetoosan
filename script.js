document.addEventListener('DOMContentLoaded', function() {
  const animateButton = document.getElementById('animateButton');
  const animatedImage = document.getElementById('animatedImage');
  const themeSelect = document.getElementById('theme');

  // Load user preferences from localStorage
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    themeSelect.value = storedTheme;
    applyTheme(storedTheme);
  }

  // Event listener for button click to trigger animation
  animateButton.addEventListener('click', function() {
    animatedImage.classList.add('animated');
    setTimeout(() => {
      animatedImage.classList.remove('animated');
    }, 500); // Remove the class after the animation duration
  });

  // Event listener for theme selection
  themeSelect.addEventListener('change', function() {
    const selectedTheme = this.value;
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
  });

  // Function to apply the selected theme
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#333';
      document.body.style.color = '#fff';
    } else {
      document.body.style.backgroundColor = '#f4f4f4';
      document.body.style.color = '#333';
    }
  }
});
