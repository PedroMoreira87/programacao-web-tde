$(document).ready(function (){
    fLocalEventosClick();
});

function fLocalEventosClick(){
    $("#comprar").click(function (){
        pagina("comprar");
    });

    $("#sobreNos").click(function (){
        pagina("sobreNos");
    });

    $("#contato").click(function (){
        pagina("contato");
    });

    $("#login").click(function (){
        pagina("login");
    });
}

function pagina(pg){
    if (pg == "comprar"){
        window.location.href = "vendas.html";
    }else if (pg == "sobreNos"){
        window.location.href = "sobreNos.html";
    }else if (pg == "contato"){
        window.location.href = "contato.html";
    }else if (pg == "login"){
        window.location.href = "login.html";
    }
}
