document.addEventListener('DOMContentLoaded', function() {
  const qtyInput = document.getElementById('number');
  
  if (qtyInput) {
    qtyInput.disabled = true;
    qtyInput.readOnly = true;
    
    qtyInput.addEventListener('change', function(e) {
      e.preventDefault();
      return false;
    });
    
    qtyInput.addEventListener('keydown', function(e) {
      e.preventDefault();
      return false;
    });
    
    qtyInput.addEventListener('input', function(e) {
      e.preventDefault();
      return false;
    });
  }
});
