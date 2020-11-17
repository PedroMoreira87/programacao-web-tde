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

    $("#login").click(function (){
        pagina("login");
    });

    $("#faleConosco").click(function (){
        pagina("faleConosco");
    });
}

function pagina(pg){
    if (pg == "comprar"){
        window.location.href = "pages/vendas.html";
    }else if (pg == "sobreNos"){
        window.location.href = "pages/sobreNos.html";
    }else if (pg == "login"){
        window.location.href = "pages/login.html";
    }else if (pg == "faleConosco"){
        window.location.href = "https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=329a96d0-762b-4028-a7cc-318d5843a789&serviceInstanceID=adf692d8-228d-4152-b98a-06ee52915fa9";
    }
}
