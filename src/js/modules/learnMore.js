const learnMore = (btnSelector, textSelector) => {
    const btn = document.querySelector(btnSelector),
          text = document.querySelector(textSelector);

    btn.addEventListener('click', (e) => {
        e.target.remove();
        text.style.display = 'block';
    });
};

export default learnMore;