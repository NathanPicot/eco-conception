function verifyURI() {

    let pattern = /^(https?|chrome):\/\/[^\s$.?#].\S*$/gm;
    let uri = document.getElementById("uri").value;
    let result = pattern.test(uri);
    console.log(result);
    if (result === false) {

        document.getElementById('url').innerHTML = "l'url : " + uri + " est invalide";
    } else {
        document.getElementById('url').innerHTML = "url = " + uri;
        getAPI(uri).then(data => console.log());

    }


}

async function getAPI(uri) {

    fetch('http://localhost:3000/proxy?url=https://api.websitecarbon.com/site?url='+uri)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let cleanerThan = data.cleanerThan*100 ;
            console.log(parseFloat(cleanerThan.toFixed(2)));
            console.log(data.url);
            console.log( data.statistics.co2.grid.grams);
            document.getElementById('co2').innerHTML = " rejette : "+ parseFloat(data.statistics.co2.grid.grams.toFixed(2))  +" grammes de co2 a chaque chargement de page"




            google.charts.load('current', {'packages': ['corechart']});
            google.charts.setOnLoadCallback(drawChart);

            function drawChart() {

                var data = google.visualization.arrayToDataTable([
                    ['Website', '%'],
                    ['your website',  parseFloat(cleanerThan.toFixed(2))  ],
                    ['other',    100-parseFloat(cleanerThan.toFixed(2))]

                ]);

                var options = {
                    title: 'Plus propre que '+ parseFloat(cleanerThan.toFixed(2)) +' % des site'
                };

                var chart = new google.visualization.PieChart(document.getElementById('piechart'));

                chart.draw(data, options);

            }



            loader()
        })
        .catch(error => {
            document.getElementById('url').innerHTML = "l'url :" + uri + " est invalide";
            document.getElementById("piechart").innerHTML = "";
            document.getElementById('co2').innerHTML = "";

            console.error(error);
            loader()
        });


}

function loader(){

    if(document.getElementById("loader").style.display == "inline-block"){
        document.getElementById("loader").style.display = "none"
        document.getElementById('input_submit').className = "input_submit btn ";

    }else{

        document.getElementById("loader").style.display = "inline-block"
        document.getElementById('input_submit').className += " disabled ";
    }

}




