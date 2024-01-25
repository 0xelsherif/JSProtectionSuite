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
