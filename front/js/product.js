id = "107fb5b75607497b96722bda5b504926"
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
    document.getElementById("image").src = value.imageUrl;
})
