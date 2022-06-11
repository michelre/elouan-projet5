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

function changeQuantity () {
    let itemQuantities = document.querySelectorAll('.itemQuantity')
    itemQuantities.forEach((itemQuantity) => {
        itemQuantity.addEventListener('change', function (e) {
            e.preventDefault();
            const retrievedCart = localStorage.getItem('cart');
            let cart = JSON.parse(retrievedCart) || [];
            const quantity = itemQuantity.closest('.cart__item');
            let id = quantity.dataset.id;
            id = cart.find(item => item.product._id === id);
            productQuantity = id.itemNumber;
            productQuantity = e.target.value;
            id.itemNumber = productQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
        })
    })
}

function deleteButton () {
    let supprButtons = document.querySelectorAll('.deleteItem')
    supprButtons.forEach((supprButton) => {
        supprButton.addEventListener('click', function (e) {
            e.preventDefault();
            const retrievedCart = localStorage.getItem('cart');
            let cart = JSON.parse(retrievedCart) || [];
            const suppr = supprButton.closest('.cart__item');
            let id = suppr.dataset.id;
            id = cart.find(item => item.product._id === id);
            cart.splice(cart.indexOf(id), 1);
            console.log(id);
            localStorage.setItem('cart', JSON.stringify(cart));
    })
})
}

function TotalPrice () {
    let cart = localStorage.getItem('cart');
    let Cart = JSON.parse(cart);
    let totalPrice = 0;
    let totalQuantity = 0;
    for (let i = 0; i < Cart.length; i++) {
        totalPrice += Cart[i].product.price * Cart[i].itemNumber;
        totalQuantity += +Cart[i].itemNumber;
        
    }
    console.log(totalPrice);
    console.log(totalQuantity);
    let totalPriceSpan = document.querySelector('#totalPrice').innerText = totalPrice;
    let totalQuantitySpan = document.querySelector('#totalQuantity').innerText = totalQuantity;
}

async function init() {
    let cart = localStorage.getItem('cart');
    let Cart = JSON.parse(cart);
    let fetch = await fetchProduct(Cart);
    changeQuantity();
    deleteButton();
    TotalPrice();
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
