function fetchProducts() {
    return fetch("http://localhost:3000/api/products")
        .then((response) => response.json())
}

function displayProducts(products){
    const value = products
    for (let index = 0; index < value.length; index++) {
        const element = value[index];
        let a = document.createElement("a");
        a.href = "product.html?id=" + element._id;
        document.querySelector("#items").appendChild(a);
        let article = document.createElement("article");
        a.appendChild(article);
        article.innerHTML = `
            <img src="${element.imageUrl}"/>
            <h3>${element.name}</h3>
            <p>${element.description}</p>`;
    }
}

async function init(){
    //fetchProducts().then(products => displayProducts(products))
    const products = await fetchProducts()
    displayProducts(products)
}

init()




/*fetch("http://localhost:3000/api/products")
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            console.log('Mauvaise réponse du serveur !');
        }
    })
    .then(function (value) {
        console.log(value);
        for (let index = 0; index < value.length; index++) {
            const element = value[index];
            let a = document.createElement("a");
            a.href = "product.html?id=" + element._id;
            document.getElementById("items").appendChild(a);
            let article = document.createElement("article");
            a.appendChild(article);
            article.innerHTML = `<img src="${element.imageUrl}"></img><h3>${element.name}</h3><p>${element.description}</p>`;
            console.log(element);
            console.log(index);
        }
    })
    .catch(function (error) {
        // Une erreur est survenue
    });*/
