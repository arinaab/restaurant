import popularItems from './modules/popularItems';
import slider from './modules/slider';
import social from './modules/social';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    popularItems();
    slider('.slider__item', 'button[data-next]', 'button[data-prev]');
    social();
});