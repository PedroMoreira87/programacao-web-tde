$(document).ready(function(){ //serve para rodar a página toda para depois rodar a função

    fLocalEventosClick();

});

function fLocalEventosClick(){
    $("#home").click(function (){
        pagina("index");
    });

    $("#comprar").click(function (){
        pagina("index");
    });

    $("#vender").click(function (){
        pagina("index");
    });

    $("#sobreNos").click(function (){
        pagina("index");
    });

    $("#contato").click(function (){
        pagina("index");
    });
}

function pagina(pg){
    if (pg == "index"){
        window.location.href = "index.html";
    }else if (pg == "comprar"){
        window.location.href = "comprar.html";
    }else if (pg == "vender"){
        window.location.href = "vender.html";
    }else if (pg == "sobreNos"){
        window.location.href = "sobreNos.html";
    }else if (pg == "contato"){
        window.location.href = "contato.html";
    }
}
