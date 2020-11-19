var mapa;

$(document).ready(function(){
    fLocalEventosClick();
});

function initMap() {

    var configuracoes = {
        center: {lat: -25.47212754, lng: -49.25276682},
        zoom: 13
    }

    mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

    var marcador = new google.maps.Marker({
        position: {lat: -25.4517026, lng: -49.2452604},
        title: "AvTorres",
        map: mapa
    });

    var marcador2 = new google.maps.Marker({
        position: {lat: -25.5019947, lng: -49.2615328},
        title: "Xaxim",
        map: mapa
    });

    var marcador3 = new google.maps.Marker({
        position: {lat: -25.45212754, lng: -49.25276682},
        title: "CristoRei",
        map: mapa
    });
}

function fLocalEventosClick(){
    $("#home").click(function (){
        pagina("index");
    });

    $("#comprar").click(function (){
        pagina("comprar");
    });

    $("#sobreNos").click(function (){
        pagina("sobreNos");
    });

    $("#login").click(function (){
        pagina("login");
    });

    $("#faleConosco").click(function (){
        pagina("faleConosco");
    });
}

function pagina(pg){
    if (pg == "index"){
        window.location.href = "../index.html";
    }else if (pg == "comprar"){
        window.location.href = "vendas.html";
    }else if (pg == "sobreNos"){
        window.location.href = "sobreNos.html";
    }else if (pg == "login") {
        window.location.href = "login.html";
    }else if (pg == "faleConosco"){
        window.location.href = "https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=329a96d0-762b-4028-a7cc-318d5843a789&serviceInstanceID=adf692d8-228d-4152-b98a-06ee52915fa9";
    }
}