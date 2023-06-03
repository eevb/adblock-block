var existingElement = null;

function checkHiddenElement() {
  var elements = document.querySelectorAll('[class^="63"]');
  
  if (existingElement && getComputedStyle(existingElement).display === 'none') {
    existingElement.remove();
    existingElement = null;
  }
  
  if (!existingElement) {
    var newElement = document.createElement('div');
    var randomClass = '63-' + Math.floor(Math.random() * 1000);
    
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
