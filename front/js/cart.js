// Récupération du localStorage
//JSON.parse(localStorage.getItem('cart')) // On récupère un tableau

/**
 *
 * TODO
 *  - Récupérer le localStorage pour afficher le détail des produits
 *  - Calcul le total global
 *  - On ajoute les évènements permettant de vider le panier et de supprimer chaque produit
 **/


function fetchProduct (Carts) {
    for (i in Object.keys(Carts)) {
        fetch(`http://localhost:3000/api/products/${Object.keys(Carts_id)[i]}`)
        .then(response => response.json())
        .then(product => {
            displayProduct(product)
        })
}
}

function displayProduct (Carts) {
    document.querySelector('#cart__items').innerHTML = `
    <article data-id="${product._id}" data-color="${product.itemColor}">
    <div class="cart__item__img">
        <img src="${product.imageUrl}" alt="${product.name}">
    </div>
    <div class="cart__item__content">
        <div class="cart__item__content__description">
            <h2>${product.name}</h2>
            <p>${product.itemColor}</p>
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
}


async function init() {
    let Cart = localStorage.getItem('cart');
    let Carts = JSON.parse(Cart);
    let Carts_id = Carts.find(Cart => Cart.product._id === product._id);
    let product = await fetchProduct(Carts_id);
    fetchProduct(Carts);
    console.log(Carts);
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