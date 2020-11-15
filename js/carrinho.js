$(document).ready(function (){
    fLocalCarros();
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