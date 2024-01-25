// Disable copying content via clipboard
document.addEventListener('copy', function (e) {
  e.preventDefault();
});

// Disable pasting content via clipboard
document.addEventListener('paste', function (e) {
  e.preventDefault();
});

// Disable cut operation via clipboard
document.addEventListener('cut', function (e) {
  e.preventDefault();
});

// Disable print screen
document.addEventListener('keydown', function (e) {
  // Block Print Screen
  if (e.keyCode === 44) {
    e.preventDefault();
  }
});
