var myRequest = new Request("http://localhost:3000/api/products");
fetch(myRequest)
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
        else {
            console.log('Mauvaise réponse du serveur !');
        }
    })
.then(function(value) {
    console.log(value);
    for (let index = 0; index < value.length; index++) {
            const element = value[index];
            let a = document.createElement("a");
            a.classList.add("product");
            document.getElementById("items").appendChild(a);
            let article = document.createElement("article");
            a.appendChild(article);
            article.classList.add("product__article");
            article.innerHTML = `<img src="${element.imageUrl}"></img><h3>${element.name}</h3><p>${element.description}</p>`;
            console.log(element);
            console.log(index);
    }
})
.catch(function(error) {
    // Une erreur est survenue
});