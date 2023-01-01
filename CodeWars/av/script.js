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

// function render() {
//     for (let car of cars) {
//         str += `<div class="card" data-price="${car.price}"style="width: 18rem;>
//         <img src="${car.img}" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h2 class="card-title">${car.brandTitle}</h2>
//           <p class="card-text">${car.modelTitle}</p>
//           <p class="card__price">${car.price}$</p>
//           <a href="#" class="btn btn-primary">Buy car</a>
//         </div>
//       </div>`
//     }
//     return app.innerHTML = str;
// }

function render() {
    const app = document.getElementById('app');

    const res = cars.reduce((prev, car) => {
        const {
            img,
            brandTitle,
            modelTitle,
            price
        } = car;

        return prev += `<div class="card" data-price="${price}"style="width: 18rem;">
                    <img src="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${brandTitle}</h5>
                        <p class="card-text">${modelTitle}</p>
                        <p class="card-text">${price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>`
    }, '');

    app.innerHTML = res;
}

document.querySelector('.sort__up').onclick = function () {
    sortToUp();
}
document.querySelector('.sort__bot').onclick = function () {
    sortToBot();
}

function sortToUp() {
     return cars.sort((a,b) => a.price - b.price);
}

function sortToBot() {
    return cars.sort((a,b) => b.price - a.price);
}
// function sortToUp() {
//     for (let i = 0; i < app.children.length; i++) {
//         for (let j = i; j < app.children.length; j++) {
//             if (+app.children[i].getAttribute('data-price') > +app.children[j].getAttribute('data-price')) {
//                 replacedNode = app.replaceChild(app.children[j], app.children[i]);
//                 insertAfter(replacedNode, app.children[i])
//             }
//         }
//     }
// }


// function sortToBot() {
//     for (let i = 0; i < app.children.length; i++) {
//         for (let j = i; j < app.children.length; j++) {
//             if (+app.children[i].getAttribute('data-price') < +app.children[j].getAttribute('data-price')) {
//                 replacedNode = app.replaceChild(app.children[j], app.children[i]);
//                 insertAfter(replacedNode, app.children[i])
//             }
//         }
//     }
// }

// function insertAfter(elem, refElem) {
//     return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
// }



function getInfo() {
    const brandTitle = document.querySelector('.brand').value;
    const modelTitle = document.querySelector('.model').value;
    const price = document.querySelector('.price').value;
    cars.push({
        brandTitle,
        modelTitle,
        price
    });
    console.log(cars);
}
getInfo()