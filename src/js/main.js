import popularItems from './modules/popularItems';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    popularItems();
    slider('.slider__item', 'button[data-next]', 'button[data-prev]');
});