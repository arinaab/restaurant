import popularItems from './modules/popularItems';
import slider from './modules/slider';
import social from './modules/social';
import learnMore from './modules/learnMore';
import cart from './modules/cart';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    popularItems();
    slider('.slider__item', 'button[data-next]', 'button[data-prev]');
    social();
    learnMore('.btn_mt', '.subtitle_dn');
    cart();
});