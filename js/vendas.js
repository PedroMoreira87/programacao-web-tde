var carros = [{
    foto: "carros/2008_1.jpg",
    titulo: "PEUGEOT 2008 (AUTOMATICO)",
    am: "ANO: 2018 / MODELO: 2018",
    preco: 79000.00
},{
    foto: "carros/Argo_1.jpg",
    titulo: "FIAT ARGO (MANUAL)",
    am: "ANO: 2016 / MODELO: 2017",
    preco: 59000.00
},{
    foto: "carros/C4_1.jpg",
    titulo: "CITROEN C4 CACTUS (AUTOMATICO)",
    am: "ANO 2018 / MODELO: 2018",
    preco: 62000.00
},{
    foto: "carros/Captur_1.jpg",
    titulo: "RENAULT CAPTUR (AUTOMATICO)",
    am: "ANO: 2016 / MODELO: 2016",
    preco: 55000.00
},{
    foto: "carros/Compass_1.jpg",
    titulo: "JEEP COMPASS (AUTOMATICO)",
    am: "ANO: 2018 / MODELO: 2019",
    preco: 78000.00
},{
    foto: "carros/Corolla_1.jpg",
    titulo: "TOYOTA COROLLA (AUTOMATICO)",
    am: "ANO: 2017 / MODELO: 2017",
    preco: 71540.00
},{
    foto: "carros/Duster_1.jpg",
    titulo: "RENAULT DUSTER (MANUAL)",
    am: "ANO: 2016 / MODELO: 2016",
    preco: 42000.00
},{
    foto: "carros/Fiorino_1.jpg",
    titulo: "FIAT FIORINO (MANUAL)",
    am: "ANO: 2012 / MODELO: 2012",
    preco: 29000.00
},{
    foto: "carros/Jetta_1.jpg",
    titulo: "VOLKSWAGEN JETTA (AUTOMATICO)",
    am: "ANO: 2019 / MODELO: 2019",
    preco: 89000.00
},{
    foto: "carros/Kwid_1.jpg",
    titulo: "RENAULT KWID (MANUAL)",
    am: "ANO: 2016 / MODELO: 2016",
    preco: 38000.00
},{
    foto: "carros/Mobi_1.jpg",
    titulo: "FIAT MOBI (AUTOMATICO)",
    am: "ANO: 2016 / MODELO: 2017",
    preco: 39000.00
},{
    foto: "carros/Onix_1.jpg",
    titulo: "CHEVROLET ONIX (MANUAL)",
    am: "ANO: 2015 / MODELO: 2015",
    preco: 29000.00
},{
    foto: "carros/Polo_1.jpg",
    titulo: "VOLKSWAGEN POLO (AUTOMATICO)",
    am: "ANO: 2017 / MODELO: 2017",
    preco: 41780.00
},{
    foto: "carros/Sandero_1.jpg",
    titulo: "RENAULT SANDERO (MANUAL)",
    am: "ANO: 2016 / MODELO: 2017",
    preco: 33000.00
},{
    foto: "carros/Saveiro_1.jpg",
    titulo: "VOLKSWAGEN SAVEIRO (MANUAL)",
    am: "ANO: 2012 / MODELO: 2013",
    preco: 39000.00
},{
    foto: "carros/Toro_1.jpg",
    titulo: "FIAT TORO (AUTOMATICO)",
    am: "ANO: 2017 / MODELO: 2017",
    preco: 68000.00
},{
    foto: "carros/Virtus_1.jpg",
    titulo: "VOLKSWAGEN VIRTUS (AUTOMATICO)",
    am: "ANO: 2019 / MODELO: 2019",
    preco: 48000.00
},{
    foto: "carros/Voyage_1.jpg",
    titulo: "VOLKSWAGEN VOYAGE (MANUAL)",
    am: "ANO: 2015 / MODELO: 2015",
    preco: 29000.00
}
];

var carrinho = [];

$(document).ready(function (){

    fLocalEventosClick();
    fLocalCarros();

    $("body").on("click","#btn-comprar",function (){
        var father = $(this).parents(".div-cardsVeiculos").index();
        var carro = carros[father];
        carrinho.push(carro);
        localStorage.setItem("car",JSON.stringify(carrinho));
        alert("Veiculo adicionado ao carrinho!");
    });

    $("#btn-carrinho").click(function (){
       window.location.href = "carrinho.html";
    });

});

function fLocalCarros(){

    $(".div-listaVeiculos").html("");

    for(var i = 0; i < carros.length; i++){

        var conteudo = "";
        conteudo += '<div class="div-cardsVeiculos">';
        conteudo +=     '<div class="div-imageVeiculo">';
        conteudo +=         '<img src="'+carros[i]['foto']+'">';
        conteudo +=     '</div>';
        conteudo +=     '<div class="div-descricaoVeiculo">';
        conteudo +=         '<p style="font-size: 20px;font-family: Verdana">'+carros[i]['titulo']+'</p>';
        conteudo +=         '<p>'+carros[i]['am']+'</p>';
        conteudo +=     '</div>';
        conteudo +=     '<div class="div-precoVeiculo">';
        conteudo +=         'R$'+carros[i]['preco']+',00';
        conteudo +=     '</div>';
        conteudo +=     '<div class="div-btnComprar">';
        conteudo +=         '<button id="btn-comprar" type="button" class="btn btn-success">COMPRAR</button>';
        conteudo +=     '</div>';
        conteudo += '</div>';

        $(".div-listaVeiculos").append(conteudo);
    }
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
    }
}
