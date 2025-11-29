document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.product-gallery__carousel');
  const thumbnails = document.querySelectorAll('.product-gallery__thumbnail');

  if (!carousel || thumbnails.length === 0) {
    return;
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      const mediaId = this.getAttribute('data-media-id');
      
      const carouselItems = carousel.querySelectorAll('.product-gallery__carousel-item');
      const allThumbnails = document.querySelectorAll('.product-gallery__thumbnail');
      
      carouselItems.forEach(item => {
        if (item.getAttribute('data-media-id') === mediaId) {
          item.classList.add('is-selected');
        } else {
          item.classList.remove('is-selected');
        }
      });

      allThumbnails.forEach(thumb => {
        if (thumb.getAttribute('data-media-id') === mediaId) {
          thumb.classList.add('is-nav-selected');
        } else {
          thumb.classList.remove('is-nav-selected');
        }
      });
    });
  });
});
