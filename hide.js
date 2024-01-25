document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  // Block F12
  if (e.keyCode === 123) {
    e.preventDefault();
  }

  // Block Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + Shift + C
  if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
      (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
      (e.ctrlKey && e.shiftKey && e.keyCode === 67)) {
    e.preventDefault();
  }

  // Block Ctrl + U
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
  }

// Block Ctrl + A, Ctrl + C, Ctrl + X
  if ((e.ctrlKey && e.keyCode === 65) ||
      (e.ctrlKey && e.keyCode === 67) ||
      (e.ctrlKey && e.keyCode === 88)) {
    e.preventDefault();
  }

  // Block Ctrl + P
  if (e.ctrlKey && e.keyCode === 80) {
    e.preventDefault();
  }

  // Block Ctrl + S
  if (e.ctrlKey && e.keyCode === 83) {
    e.preventDefault();
  }

  // Block Ctrl + Shift + R (Force Reload)
  if (e.ctrlKey && e.shiftKey && e.keyCode === 82) {
    e.preventDefault();
  }
});

// Disable drag-and-drop of images
document.addEventListener('dragstart', function (e) {
  e.preventDefault();
});

// Disable selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});
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

// Disable right-click on images
document.querySelectorAll('img').forEach(function(img) {
  img.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
});
