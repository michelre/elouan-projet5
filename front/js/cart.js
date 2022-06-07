// Récupération du localStorage
//JSON.parse(localStorage.getItem('cart')) // On récupère un tableau

/**
 *
 * TODO
 *  - Récupérer le localStorage pour afficher le détail des produits
 *  - Calcul le total global
 *  - On ajoute les évènements permettant de vider le panier et de supprimer chaque produit
 **/


function fetchProduct (Cart) {
    let i = 0;
    for (let j = 0; Object.keys(Cart); j++) {
        fetch(`http://localhost:3000/api/products/${Object.values(Cart)[i].product._id}`)
        .then(response => response.json())
        .then(product => {
            document
            .querySelector('#cart__items')
            .innerHTML += `
            <article class="cart__item" data-id="${product._id}" data-color="${Object.values(Cart)[j].itemColor}">
            <div class="cart__item__img">
                <img src="${product.imageUrl}" alt="${product.name}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${Object.values(Cart)[j].itemColor}</p>
                    <p>${product.price}</p>
                </div>
                <div class="cart__item__content__setting">
                    <div class="cart__item__content__setting__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${Object.values(Cart)[j].itemNumber}"
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
                </div>
            </div>
            </article>`;
        })
        i++;
}
}

function changeQuantity () {
    let itemQuantity = document.querySelectorAll('.itemQuantity');
    itemQuantity.addEventListener('change', function (e) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let id = e.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
        let color = e.target.parentNode.parentNode.parentNode.parentNode.dataset.color;
        let item = cart.find(item => item.product._id === id && item.itemColor === color);
        item.itemNumber = e.target.value;
        localStorage.setItem('cart', JSON.stringify(cart));
    })
}

function deleteButton () {
    let supprButton = document.querySelector('.deleteItem');
    supprButton.addEventListener('click', function (e) {
        e.preventDefault();
    })
}

async function init() {
    let cart = localStorage.getItem('cart');
    let Cart = JSON.parse(cart);
    let fetch = await fetchProduct(Cart);
    changeQuantity();
}

init();








/**const cart = localStorage.getItem('cart');

for (let i of cart) {
  fetch('http://localhost:3000/api/products/'+ i.id)
  .then(response => response.json())
  .then(product => {
        // .innerHTML += `${product._id} ......`
  })
} */

/**function displayProduct (product) {
    document.querySelector('#cart__items').innerHTML = `
    <article data-id="${product._id}" data-color="${product.itemColor}">
    <div class="cart__item__img">
        <img src="${product.imageUrl}" alt="${product.name}">
    </div>
    <div class="cart__item__content">
        <div class="cart__item__content__description">
            <h2>${product.name}</h2>
            <p>${Object.values(cart)[i].itemColor}</p>
            <p>${product.price}</p>
        </div>
        <div class="cart__item__content__setting">
            <div class="cart__item__content__setting__quantity">
                <p>Qté : ${product.itemNumber}</p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42"
            </div>
            <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
            </div>
        </div>
    </div>
    </article>`;
}**/