document.addEventListener('DOMContentLoaded', function() {
  const increaseButton = document.querySelector('.qty-up');
  
  if (increaseButton) {
    increaseButton.disabled = true;
    increaseButton.style.opacity = '0.4';
    increaseButton.style.cursor = 'not-allowed';
    increaseButton.style.pointerEvents = 'none';
    
    increaseButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }
});
