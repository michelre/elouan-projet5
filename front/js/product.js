var myRequest = new Request("http://localhost:3000/api/products", {
    method: "GET",
});
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
    if (value.length > 0) {
        for (let index in value) {
            let values = value[index];
            document.getElementById("title").innerHTML = values.name;
        }
    }
})

