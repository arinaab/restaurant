const social = () => {
    const items = document.querySelectorAll('.social__item');

    items.forEach(item => {
        item.addEventListener('mouseover', function() {
            let src = this.firstElementChild.firstElementChild.src; //находим тег img и src внутри него
            let newSrc = src.replace(/.svg/, 'Copy.svg');
            
            this.firstElementChild.firstElementChild.setAttribute('src', newSrc);
            this.style.backgroundColor = '#F16214';
            
        });

        item.addEventListener('mouseout', function() {
            let src = this.firstElementChild.firstElementChild.src;
            let newSrc = src.replace(/copy.svg/i, '.svg');

            this.firstElementChild.firstElementChild.setAttribute('src', newSrc);
            this.style.backgroundColor = 'rgba(241, 98, 20, 0.15)';
        });
    });
};

export default social;