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
});
