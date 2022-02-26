import popularItems from './modules/popularItems';
import slider from './modules/slider';
import social from './modules/social';
import cart from './modules/cart';
import learnMore from './modules/learnMore';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    popularItems();
    slider('.slider__item', 'button[data-next]', 'button[data-prev]');
    social();
    cart();
    learnMore('.btn_mt', '.subtitle_dn');

});