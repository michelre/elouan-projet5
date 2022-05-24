fetch("http://localhost:3000/api/products")
    .then(function(response) {
        if(response.ok) {
            return response.json();
        }
    })
.then(function(value) {
    console.log(value);
})
.catch(function(error) {
    // Une erreur est survenue
});