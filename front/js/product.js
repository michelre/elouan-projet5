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
}

function addToCart(product){
    let itemNumber = document.querySelector("#quantity").value;
    let itemColor = document.querySelector("#colors").value;
    let item = {product, itemNumber, itemColor};
    let items = JSON.parse(localStorage.getItem("cart")) || [];
    let sameItem = items.find(item => item.product._id === product._id && item.itemColor === itemColor);
    
    items.push(item);
    if (sameItem) {
        item.itemNumber = +sameItem.itemNumber + +item.itemNumber;
        items.splice(items.indexOf(sameItem), 1);
    }
    localStorage.setItem('cart', JSON.stringify(items)) // On stock une chaine
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