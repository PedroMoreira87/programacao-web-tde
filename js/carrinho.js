var mapa;

$(document).ready(function (){
    fLocalEventosClick();
    fLocalCarros();
    initMap();
});

function fLocalCarros(){
    var listaCarros = JSON.parse(localStorage["car"]);
    $(".div-carrinho").html("<p style=\"font-size: 30px\" align=\"center\">Veículos adicionados ao carrinho:</p>");

    $(".div-carrinho")

    for(var i = 0; i < listaCarros.length; i++){

        var conteudo = "";


        conteudo += '<div class="div-cardsVeiculos">';
        conteudo +=     '<div class="div-imageVeiculo">';
        conteudo +=         '<img src="'+listaCarros[i]['foto']+'">';
        conteudo +=     '</div>';
        conteudo +=     '<div class="div-descricaoVeiculo">';
        conteudo +=         '<p style="font-size: 20px;font-family: Verdana">'+listaCarros[i]['titulo']+'</p>';
        conteudo +=         '<p>'+listaCarros[i]['am']+'</p>';
        conteudo +=     '</div>';
        conteudo +=     '<div class="div-precoVeiculo">';
        conteudo +=         'R$'+listaCarros[i]['preco']+',00';
        conteudo +=     '</div>';
        conteudo += '</div>';

        $(".div-carrinho").append(conteudo);
    };
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

    $("#contato").click(function (){
        pagina("contato");
    });
    $("#faleConosco").click(function (){
        pagina("faleConosco");
    });
}

function pagina(pg){
    if (pg == "index"){
        window.location.href = "index.html";
    }else if (pg == "comprar"){
        window.location.href = "vendas.html";
    }else if (pg == "sobreNos"){
        window.location.href = "sobreNos.html";
    }else if (pg == "contato"){
        window.location.href = "contato.html";
    }else if (pg == "faleConosco"){
        window.location.href = "https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=329a96d0-762b-4028-a7cc-318d5843a789&serviceInstanceID=adf692d8-228d-4152-b98a-06ee52915fa9";
    }
}

function initMap() {

    var configuracoes = {
        center: {lat: -25.47212754, lng: -49.25276682},
        zoom: 12
    }

    mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

    var marcador = new google.maps.Marker({
        position: {lat: -25.45212754, lng: -49.25276682},
        title: "TORRES",
        map: mapa
    });

    var marcador2 = new google.maps.Marker({
        position: {lat: -25.5019947, lng: -49.2615381},
        title: "XAXIM",
        map: mapa
    });

    var marcador3 = new google.maps.Marker({
        position: {lat: -25.434277, lng: -49.2459323},
        title: "CristoRei",
        map: mapa
    });

}