const cars = [{
    id: 1,
    brandTitle: 'Audi',
    modelTitle: 'Description audi',
    img: 'https://avatars.mds.yandex.net/i?id=80578fe0019613e0dbc72c22ea33c62f-5132286-images-thumbs&ref=rim&n=33&w=337&h=188',
    price: '5000',
}, {
    id: 2,
    brandTitle: 'BMW',
    modelTitle: 'Description BMW',
    img: 'https://cdn.izap24.ru/images/prodacts/sourse/88718/88718856_bmw-e34-e36-nakleyka-znachok-emblema-rulevogo-kolesa.jpg"',
    price: '7000',
}, {
    id: 3,
    brandTitle: 'Mercedes',
    modelTitle: 'Description mercedes',
    img: 'https://i.ebayimg.com/images/g/iqEAAOSwyQtVjDf1/s-l400.jpg',
    price: '10000',
}, {
    id: 4,
    brandTitle: 'Volkswagen',
    modelTitle: 'Description volkswagen',
    img: 'https://5.allegroimg.com/original/0115bc/a6e4b1a64ccc8ef656dd1561fa35/CWIARTKA-Blotnik-Prawy-TYL-VW-Passat-B6-Sedan-LD5Q-Typ-samochodu-Samochody-osobowe',
    price: '3000',
}];


const app = document.querySelector('#app');
const render = document.querySelector('.render');
const sortToUp = document.querySelector('.sort__up');
const sortToBot = document.querySelector('.sort__bot');
const setInfoBtn = document.querySelector('.btn');

const card = document.querySelector('.card');

const getDataId = (e) => {
    let target = e.target.parentNode;
    let clone = target.cloneNode(e.target);
    localStorage.setItem('id', e.target.dataset.id)
    console.log(e.target.dataset.id);
    card.appendChild(clone);
}

const createEl = () => {
    const div = document.createElement('div');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const price = document.createElement('p');
    const btn = document.createElement('button');
    div.appendChild(h5);
    h5.innerText = `${car.brandTitle}`;
    div.appendChild(p);
    p.innerText = `${car.modelTitle}`;
    div.appendChild(price);
    price.innerText = `${car.price}`;
    div.appendChild(btn);
    btn.innerText = 'Buy now';
    btn.setAttribute('data-id', `${car.id}`);
    btn.onclick = getDataId;
    app.appendChild(div);
}

const renderFunc = () => {
    for (car of cars) {
        createEl(car)
    }
    localStorage.setItem('cars', JSON.stringify(cars));
}

render.addEventListener('click', renderFunc);

sortToUp.addEventListener('click', () => {
    cars.sort((a, b) => a.price - b.price);
    renderFunc();
})

sortToBot.addEventListener('click', () => {
    cars.sort((a, b) => b.price - a.price);
    renderFunc();
})

setInfoBtn.addEventListener('click', () => {
    const brandTitle = document.querySelector('.brand').value;
    const modelTitle = document.querySelector('.model').value;
    const price = document.querySelector('.price').value;
    cars.push({
        brandTitle,
        modelTitle,
        price
    });
    renderFunc();
})





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