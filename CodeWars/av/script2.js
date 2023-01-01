const cars = [{
    id: '',
    brandTitle: 'Audi',
    modelTitle: 'Description audi',
    img: 'https://avatars.mds.yandex.net/i?id=80578fe0019613e0dbc72c22ea33c62f-5132286-images-thumbs&ref=rim&n=33&w=337&h=188',
    price: '5000',
}, {
    brandTitle: 'BMW',
    modelTitle: 'Description BMW',
    img: 'https://cdn.izap24.ru/images/prodacts/sourse/88718/88718856_bmw-e34-e36-nakleyka-znachok-emblema-rulevogo-kolesa.jpg"',
    price: '7000',
}, {
    brandTitle: 'Mercedes',
    modelTitle: 'Description mercedes',
    img: 'https://i.ebayimg.com/images/g/iqEAAOSwyQtVjDf1/s-l400.jpg',
    price: '10000',
}, {
    brandTitle: 'Volkswagen',
    modelTitle: 'Description volkswagen',
    img: 'https://5.allegroimg.com/original/0115bc/a6e4b1a64ccc8ef656dd1561fa35/CWIARTKA-Blotnik-Prawy-TYL-VW-Passat-B6-Sedan-LD5Q-Typ-samochodu-Samochody-osobowe',
    price: '3000',
}];


document.querySelector('.render').onclick = function () {
    render();
}

document.querySelector('.sort__up').onclick = function () {
    sortToUp();
}
document.querySelector('.sort__bot').onclick = function () {
    sortToBot();
}

function render() {
    const app = document.getElementById('app');

    const res = cars.reduce((prev, car) => {
        const {
            img,
            name,
            discription,
            prise
        } = car;

        return prev += `<div class="card" style="width: 18rem;">
                    <img src="${img}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${brand}</h5>
                        <p class="card-text">${discription}</p>
                        <p class="card-text">${prise}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
    }, '');

    app.innerHTML = res;
}


function sortToUp() {
    const {
        img,name,
    }
}




a.price - b.price