const popularItems = () => {

    const getResourse = async (path) => {
        const res = await fetch(path);

        if (!res.ok) {
            throw new Error(`Could not fetch ${path}, status: ${res.status}`);
        }

        return await res.json();
    };

    const createCards = (response) => {
        // console.log(response);
        console.log(response.items);
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
                    <button class="btn btn_popular">Add To Card</button>
                    <div class="popular__price">${price}</div>
                </div>
            `;

            document.querySelector('.popular__items').append(elem);
        });
    };

    getResourse('../assets/db.json')
        .then(res => {
            console.log(res);
            createCards(res);
        });


    document.querySelector('.btn_more').addEventListener('click', (event) => {
        getResourse('../assets/db.json')
        .then(res => {
                console.log(res);
                createCards(res);
        });
    });
};

export default popularItems;