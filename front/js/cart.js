// Récupération du localStorage
//JSON.parse(localStorage.getItem('cart')) // On récupère un tableau

/**
 *
 * TODO
 *  - Récupérer le localStorage pour afficher le détail des produits
 *  - Calcul le total global
 *  - On ajoute les évènements permettant de vider le panier et de supprimer chaque produit
 **/


async function fetchProduct (Cart) {

    for (let j = 0; j < Cart.length; j++) {
        await fetch(`http://localhost:3000/api/products/${Cart[j].product._id}`)
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
}
}

function changeQuantity (Cart) {
    let itemQuantities = document.querySelectorAll('.itemQuantity')
    itemQuantities.forEach((itemQuantity) => {
        itemQuantity.addEventListener('input', function (e) {

            e.preventDefault();
            
            let quantityClosest = e.target.closest('.cart__item');
            console.log(e.target.value);
            const retrievedCart = localStorage.getItem('cart');
            const cart = JSON.parse(retrievedCart) || [];
            console.log(cart[0].itemNumber);
            let itemQuantityElement = itemQuantity.closest('.cart__item');
            cart[0].itemNumber = e.target.value;
            const modifiedCart = JSON.stringify(cart);
            localStorage.setItem('cart', modifiedCart);    
        })
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
    changeQuantity(Cart);
}

init();


/**
 * Fetch post de la commande
 */
/*const order = {
    contact: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        email: '',
    },
    products: ['_ae98..', '...']
}*/








/**function fetchProducts (cart) {
    return Promise.all(cart.map(product => __fetchProduct(product)))
}*/

/**function __fetchProduct(data){
    return fetch(`http://localhost:3000/api/products/${data.product._id}`)
        .then(response => response.json())
        .then(product => {
            document
                .querySelector('#cart__items')
                .innerHTML += `
            <article class="cart__item" data-id="${product._id}" data-color="${data.itemColor}">
            <div class="cart__item__img">
                <img src="${product.imageUrl}" alt="${product.name}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${product.name}</h2>
                    <p>${data.itemColor}</p>
                    <p>${product.price}</p>
                </div>
                <div class="cart__item__content__setting">
                    <div class="cart__item__content__setting__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${data.itemNumber}"
                    </div>
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
                </div>
            </div>
            </article>`;
        })
}*/







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