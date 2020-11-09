var array_filmes = [
    ['Resgate', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Ação', false],
    ['O Preço da Verdade', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Ação', false],
    ['Rambo', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Ação', false],
    ['Coringa', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Ficção', false],
    ['Projeto Gemini', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Ficção', false],
    ['Milagre na Cela 7', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Drama', false],
    ['Dunkirk', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Guerra', false],
    ['A Garota no Trem', 'https://i.pinimg.com/originals/dd/a3/4d/dda34d07221b67fcb46817bdcb5de360.jpg', 'Suspense', false]
];

var array_carrinho = [];

$(document).ready(function (){

    fLocalListaFilmes();

});

function fLocalListaFilmes(){

    $(".div-filmes").html("");

    $(".div-filmes")

    for(var i = 0; i < array_filmes.length; i++){

        var conteudo = "";

        conteudo += '   <div class="div-card">';
        conteudo += '   <div class="div-poster">';
        conteudo += '       <img src=" '+ array_filmes[i][1] +' " />';
        conteudo += '   </div>';
        conteudo += '   <div class="div-titulo">';
        conteudo += '       <h3>'+ array_filmes[i][0] +'</h3>';
        conteudo += '   </div>';
        conteudo += '   <div class="div-descricao">';
        conteudo += '       <b>Diretor:</b>'+ array_filmes[i][2] +'<br>';
        conteudo += '       <b>Gênero:</b>'+ array_filmes[i][2] +'<br>';
        conteudo += '       <b>Ano:</b>'+ array_filmes[i][2] +'<br>';
        conteudo += '   </div>';
        conteudo += '   <div class="div-rodape">';

        if(array_filmes[i][3] == false)
        {
            conteudo += '<button class="bCOMPRAR" id_filme="' + i + '" >Comprar</button>';
        }
        else
        {
            conteudo += '<button class="bCOMPRAR bCOMPRADO" id_filme="' + i + '">Comprado</button>';
        }

        conteudo += '</div>';
        conteudo += '</div>';

        $(".div-filmes").append(conteudo);

    }

    $(".bCOMPRAR").click(function (){

        var id = $(this).attr("id_filme");

        array_filmes[id].splice(3,1,true);

        array_carrinho.push(array_filmes[id]);

        console.log(array_carrinho);

        fLocalListaFilmes();

    });
}