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
})