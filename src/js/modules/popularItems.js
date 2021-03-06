const popularItems = () => {

    const getResource = async (path) => {
        const res = await fetch(path);

        if (!res.ok) {
            throw new Error(`Could not fetch ${path}, status: ${res.status}`);
        }

        return await res.json();
    };

    const createCards = (response) => {
        // console.log(response);
        // console.log(response.items);
        let items = response.items;
        items.forEach(({src, alt, subtitle, grade, price}) => {

            const elem = document.createElement('div');
            elem.classList.add('popular__item');
            elem.innerHTML = `
                <div class="popular__img">
                    <img src=${src} alt=${alt}>
                </div>
                <div class="popular__descr">
                    <div class="popular__subtitle">${subtitle}</div>
                    <div class="popular__grade"><span>&#9733;</span>${grade}</div>
                    <button class="btn btn_popular">Add To Cart</button>
                    <div class="popular__price">${price}</div>
                </div>
            `;

            document.querySelector('.popular__items').append(elem);
        });
    };

    let counter = 0;

    getResource('assets/db.json')
        .then(res => {
            // console.log(res);
            createCards(res);
            addToCart();
        });


    document.querySelector('.btn_more').addEventListener('click', (event) => {
        getResource('assets/db.json')
        .then(res => {
            // console.log(res);
            createCards(res);
            addToCart();
        });
    });

    const addToCart = () => {
        const btns = document.querySelectorAll('.btn_popular'),
              items = document.querySelectorAll('.popular__item'),
              wrapper = document.querySelector('.cart__items'),
              cart = document.querySelector('.cart');
              
        
        btns.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                let cloneItem = items[i].cloneNode(true);

                cloneItem.querySelector('.btn_popular').remove(); 
                cloneItem.querySelector('.popular__grade').remove(); 
                cloneItem.classList.add('popular__clone');

                //change styles
                cloneItem.querySelector('.popular__descr > .popular__subtitle').style.color = "#FFF";
                cloneItem.querySelector('.popular__descr > .popular__price').style.color = "#FFF";

                wrapper.append(cloneItem);
                items[i].remove();

                document.querySelector('.element-cart').style.display = 'block';
                document.querySelector('.element-cart > span').textContent = ++counter;
            });
        });
    };
};

export default popularItems;