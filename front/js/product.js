function fetchProduct(id){
        return fetch(`http://localhost:3000/api/products/${id}`)
            .then(res => res.json())
}

function displayProduct(product){
    const value = product;
    document.querySelector("#title").innerText = value.name;
    document.getElementById("description").innerText = value.description;
    document.getElementById("price").innerText = value.price;
    let img = document.createElement("img");
    document.querySelector(".item__img").appendChild(img);
    img.src = value.imageUrl;
    for (let index = 0; index < value.colors.length; index++) {
        document.getElementById("colors").innerHTML +=
            `<option value="${value.colors[index]}">${value.colors[index]}</option>`;
    }
    let itemNumber = document.getElementById("quantity");
// itemNumber.addEventListener("input", function() {});
    const itemColor = document
        .getElementById("colors")
        .getElementsByTagName('option')[value.colors];

}

function addToCart(product){
    /**TODO:
     *  - Récupérer les informations sélectionnées du formulaire
     *  - Créer l'objet produit avec ses informations + la couleur sélectionnée et la quantité
        - Ajouter l'objet produit au localStorage dans un key cart par exemple (Attention: Le localStorage doit être un tableau de produit)
        - Note: Si j'ajoute plusieurs fois le meme produit (meme id + meme couleur), j'incrémente sa quantité
        - Note pour plus tard: On ne stocke pas le prix dans le localStorage
     **/

    // Mettre à jour le localStorage
    //localStorage.setItem('cart', JSON.stringify([])) // On stock une chaine

    // Récupération du localStorage
    //JSON.parse(localStorage.getItem('cart')) // On récupère un tableau
}

function initEvents(product){
    const buttonCart = document.querySelector("#addToCart");
    buttonCart.addEventListener("click", () => addToCart(product));
}

async function init(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const product = await fetchProduct(id)
    displayProduct(product)
    initEvents(product)
}

init();
