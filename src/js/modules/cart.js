const cart = () => {
    const elem = document.querySelector('.element-cart'),
          cart = document.querySelector('.cart'),
          close = cart.querySelector('.cart__close');

    elem.addEventListener('click', () => {
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        cart.style.display = 'none';
        document.body.style.overflow = '';
    });
};

export default cart;