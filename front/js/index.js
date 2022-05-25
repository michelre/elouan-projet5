var myRequest = new Request("http://localhost:3000/api/products");
let ul = document.createElement("ul");
ul.classList.add("items__list")
document.getElementById("items").appendChild(ul);
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
            let li = document.createElement("li");
            ul.appendChild(li);
            li.classList.add("items__list__item");
            li.innerHTML = `<a>${element.name}<br>${element.description}<img src="${element.imageUrl}"></img></a>`;
            console.log(element);
            console.log(index);
    }
})
.catch(function(error) {
    // Une erreur est survenue
});