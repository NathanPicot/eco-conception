<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"
            integrity="sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V"
            crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <title>Site</title>
    <link rel="stylesheet" href="css/StyleSearch.css">


    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
    </script>
    <script src="src/scriptNavbar.js"></script>


</head>
<body>

<?php
require 'navbar/navbar.php';
?>

<div>
    <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img src="images/logofinal.png" class="logo" height="55" alt="Ecoflow" loading="lazy"/>
    </a>
</div>



<div class="form">

    <div>
        <input type="text" class="input_search" id="uri" name="url">
    </div>
    <div>
        <button id="input_submit" class="input_submit btn " onclick="loader(); verifyURI();">Submit</button>
    </div>
</div>


<div class="lds-ring" id="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>


<div>
    <label id="resultat"></label>
</div>
<div class='result'>
    <label id="url"> url : </label>
</div>

<div class='result'>
    <div id="piechart"></div>
</div>
<div class='result'>
    <label id="co2"></label>
</div>


</body>
<script src="src/scriptSearch.js"></script>
</html>

