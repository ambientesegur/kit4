document.addEventListener('DOMContentLoaded', function() {
  const checkoutUrls = {
    'Preto': 'https://pagamento.appagil.shop/checkout?product=f5e7a272-c8ba-11f0-a40c-46da4690ad53',
    'Vermelho': 'https://pagamento.appagil.shop/checkout?product=65122cf8-c8bb-11f0-a40c-46da4690ad53',
    'Prata': 'https://pagamento.appagil.shop/checkout?product=22f0b4fa-c8bc-11f0-a40c-46da4690ad53'
  };

  function getSelectedColor() {
    const selectedRadio = document.querySelector('input[name="option1"]:checked');
    return selectedRadio ? selectedRadio.value : 'Preto';
  }

  function handleCheckout(e) {
    e.preventDefault();
    const selectedColor = getSelectedColor();
    const checkoutUrl = checkoutUrls[selectedColor];
    if (checkoutUrl) {
      window.location.href = checkoutUrl;
    }
  }

  // Interceptar o formulário principal
  const form = document.getElementById('product_form_7673128845421');
  if (form) {
    form.addEventListener('submit', handleCheckout);
  }

  // Interceptar o botão "COMPRAR AGORA" flutuante
  const floatingButton = document.getElementById('clicar');
  if (floatingButton) {
    floatingButton.addEventListener('click', handleCheckout);
  }

  // Também interceptar o botão principal "COMPRAR AGORA"
  const mainButton = document.querySelector('.product-form__add-button');
  if (mainButton) {
    mainButton.addEventListener('click', function(e) {
      e.preventDefault();
      handleCheckout(e);
    });
  }
});
