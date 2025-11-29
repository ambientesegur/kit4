document.addEventListener('DOMContentLoaded', function() {
  const cartLink = document.querySelector('.header__cart-toggle');
  const searchForm = document.querySelector('.search-bar');
  const searchButton = document.querySelector('.search-bar__submit');
  const navLinks = document.querySelectorAll('.mobile-menu__nav-link, .nav-bar__link, .footer__link, a[href^="/collections"], a[href^="/pages"], a[href^="/products"]');
  const headerLogo = document.querySelector('.header__logo-link');
  
  if (cartLink) {
    cartLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }

  if (searchButton) {
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }

  navLinks.forEach((link) => {
    if (link.href && (link.href.includes('/collections/') || link.href.includes('/pages/') || link.href.includes('/products/'))) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    }
  });

  if (headerLogo && headerLogo.href === '/') {
    headerLogo.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  }
});
