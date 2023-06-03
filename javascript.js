var existingElement = null;

function checkHiddenElement() {
  var elements = document.querySelectorAll('[class^="63"]');
  
  if (existingElement && getComputedStyle(existingElement).display === 'none') {
    existingElement.remove();
    existingElement = null;
  }
  
  if (!existingElement) {
    var newElement = document.createElement('div');
    var randomClass = '63-' + Math.floor(Math.random() * 1000); // Change the range as needed
    
    newElement.className = randomClass;
    newElement.textContent = 'block me with ublock origin';
    document.body.appendChild(newElement);
    existingElement = newElement;
  }
}

setInterval(checkHiddenElement, 100);
