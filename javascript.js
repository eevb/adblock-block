var existingElement = null;

function checkHiddenElement() {
  var elements = document.querySelectorAll('[class^="45"]');
  
  if (existingElement && getComputedStyle(existingElement).display === 'none') {
    existingElement.remove();
    existingElement = null;
  }
  
  if (!existingElement) {
    var newElement = document.createElement('div');
    var randomClass = '45-' + Math.floor(Math.random() * 1000);
    
    newElement.className = randomClass;
    newElement.textContent = 'block me with ublock origin';
    document.body.appendChild(newElement);
    existingElement = newElement;
    
    // Add an event listener to detect changes in the element
    newElement.addEventListener('DOMSubtreeModified', function() {
      // If the element is modified, add a new element
      if (existingElement === newElement) {
        existingElement = null; // Reset the existing element variable
      }
    });
  }
}

setInterval(checkHiddenElement, 100);



// ---------------------------------

// Event listener for the keydown event
document.addEventListener('keydown', function(event) {
  // Check if the pressed key is F12 (key code 123)
  if (event.keyCode === 123) {

    event.preventDefault();
  }
});


document.addEventListener('contextmenu', function(event) {

  event.preventDefault();
});

document.addEventListener('keydown', function(event) {
  // Check if the pressed keys are Ctrl+Shift+I (key codes 17, 16, 73)
  if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {

    event.preventDefault();
  }
});

// Event listener for the keydown event
document.addEventListener('keydown', function(event) {
  // Check if the pressed keys are Shift+F5 (key codes 16, 116)
  if (event.shiftKey && event.keyCode === 116) {
    // Prevent the default action of Shift+F5
    event.preventDefault();

  }
});
