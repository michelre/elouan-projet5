const urlParams = new URLSearchParams(window.location.search);
const pageId = urlParams.get('id');
id = pageId;

fetch(`http://localhost:3000/api/products/${id}`)
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
    document.getElementById("title").innerText = value.name;
    document.getElementById("description").innerText = value.description;
    document.getElementById("price").innerText = value.price;
    let img = document.createElement("img");
    document.querySelector(".item__img").appendChild(img);
    img.src = value.imageUrl;
    for (let index = 0; index < value.colors.lenght; index++) {
            document.getElementById("colors").innerHTML += `<option value="${value.colors[index]}">${value.colors[index]}</option>`;
            console.log(value.colors);
    }
})
