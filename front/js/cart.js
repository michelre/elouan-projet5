// Récupération du localStorage
//JSON.parse(localStorage.getItem('cart')) // On récupère un tableau

/**
 *
 * TODO
 *  - Récupérer le localStorage pour afficher le détail des produits
 *  - Calcul le total global
 *  - On ajoute les évènements permettant de vider le panier et de supprimer chaque produit
 **/

 const cart = localStorage.getItem('cart');


function fetchProduct () {
    for (let i of cart) {
        fetch('http://localhost:3000/api/products/'+ i.id)
        .then(response => response.json())
        .then(product => {
            console.log(cart);
        })
}
}

fetchProduct();

function displayProduct (cart) {
    document.querySelector('#cart__items').innerHTML = `
    <article data-id="${item.product.id}" data-color="${item.itemColor}">
    <div class="cart__item__img">
        <img src="${item.product.imageUrl}" alt="${item.product.name}">
    </div>
    <div class="cart__item__content">
        <div class="cart__item__content__description">
            <h2>${item.product.name}</h2>
            <p>${item.itemColor}</p>
            <p>${item.product.price}</p>
        </div>
        <div class="cart__item__content__setting">
            <div class="cart__item__content__setting__quantity">
                <p>Qté : ${item.itemNumber}</p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42"
            </div>
            <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
            </div>
        </div>
    </div>
    </article>`;
}



/**const cart = localStorage.getItem('cart');

for (let i of cart) {
  fetch('http://localhost:3000/api/products/'+ i.id)
  .then(response => response.json())
  .then(product => {
        // .innerHTML += `${product._id} ......`
  })
} */