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


let str = '';
let carPrice = '';
let app = document.getElementById('app');

function render() {
    const {
        img,
        brandTitle,
        modelTitle,
        price
    } = car
    const res = cars.reduce((prev, car) => {
        return prev += `<div class="card" data-price="${car.price}"style="width: 18rem;>
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h2 class="card-title">${brandTitle}</h2>
          <p class="card-text">${modelTitle}</p>
          <p class="card__price">${price}$</p>
          <a href="#" class="btn btn-primary">Buy car</a>
        </div>
      </div>`
    }, '')
}

a.price - b.price
