
function verifyURI(){
    let pattern = /^(https?|chrome):\/\/[^\s$.?#].\S*$/gm;
    let uri = document.getElementById("uri").value;
    let result = pattern.test(uri);
    console.log(result);
    if(result === false){

        document.getElementById('url').innerHTML="l'url : " + uri + " est invalide" ;
    }else{
        document.getElementById('url').innerHTML="url = " + uri ;
        getAPI(uri);
    }


}

function getAPI(uri){
    fetch('https://api.websitecarbon.com/site?url='+ uri)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
}



