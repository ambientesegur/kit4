document.addEventListener('DOMContentLoaded', function() {
  const colorRadios = document.querySelectorAll('.variant-swatch__radio[name="option1"]');
  const selectedValueSpan = document.querySelector('.product-form__selected-value');
  const carousel = document.querySelector('.product-gallery__carousel');

  if (!colorRadios.length || !selectedValueSpan || !carousel) {
    return;
  }

  const colorToImageMapping = {
    'Preto': '26382685896813',
    'Vermelho': '26382685896813',
    'Prata': '26382685896813'
  };

  function updateColorSelection(radio) {
    const selectedColor = radio.value;
    
    selectedValueSpan.textContent = selectedColor;
    
    colorRadios.forEach(r => {
      r.closest('.variant-swatch').classList.remove('is-selected');
    });
    radio.closest('.variant-swatch').classList.add('is-selected');
    
    const mediaId = colorToImageMapping[selectedColor];
    if (mediaId) {
      const carouselItems = carousel.querySelectorAll('.product-gallery__carousel-item');
      const thumbnails = document.querySelectorAll('.product-gallery__thumbnail');
      
      carouselItems.forEach(item => {
        if (item.getAttribute('data-media-id') === mediaId) {
          item.classList.add('is-selected');
        } else {
          item.classList.remove('is-selected');
        }
      });
      
      thumbnails.forEach(thumb => {
        if (thumb.getAttribute('data-media-id') === mediaId) {
          thumb.classList.add('is-nav-selected');
        } else {
          thumb.classList.remove('is-nav-selected');
        }
      });
    }
  }

  colorRadios.forEach((radio) => {
    radio.addEventListener('change', function() {
      updateColorSelection(this);
    });
  });
});
