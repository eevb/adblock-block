var existingElement = null;

function checkHiddenElement() {
  var elements = document.querySelectorAll('[class^="64"]');
  
  // Check if the existing element exists in the DOM and is hidden
  if (existingElement && (existingElement.parentNode === null || getComputedStyle(existingElement).display === 'none')) {
    existingElement.remove();
    existingElement = null;
  }
  
  // Check if there is no existing element
  if (!existingElement) {
    var newElement = document.createElement('div');
    var randomClass = '64-' + Math.floor(Math.random() * 1000); // Change the range as needed
    
    newElement.className = randomClass;
    newElement.textContent = 'block me with ublock origin';
    document.body.appendChild(newElement);
    existingElement = newElement;
  }
}

// Observe changes to the document using MutationObserver
var observer = new MutationObserver(checkHiddenElement);
observer.observe(document.documentElement, { childList: true, subtree: true });

// Call the checkHiddenElement function initially
checkHiddenElement();
