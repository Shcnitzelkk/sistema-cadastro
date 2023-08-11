var nome_aluno = "Ryan Gosling";
var idade_aluno = 42;
var curso1 = "motorista";
function alterarCont(){
    document.getElementById("exemplo").innerHTML = "Hello world";
}

//document.getElemenntById - método retonar um elemento com valor especificado
//InnerHTML - propriedade define ou retorna o conteúdo HTML (Html interno de um elemtno)


function nome_funcao(){
    alert ("login ou senha incorreto");
}
function somar(a, b){
    var total = a + b;
    alert("Valor da soma: " + total);
}

function desconto(a, b){
    var totalDesc = a - b;
    return totalDesc;
}
var resultTotalDesc = desconto (7, 5);
document.write("Valor final com desconto: " + resultTotalDesc);

var listaAudios = [];

$(document).ready(function () {
    //já que você quer fazer o carregamento antecipado de tudo, pode fazer isso quando 
    //a página for carregada. Pode ser ruim fazer isso se forem muitos
    //arquivos e muito grandes.

    $('.btnPlayAudio').each(function (e) {
        var url = $(this).attr('data-audiourl');
        var audioPlay = new Audio(url);
        audioPlay.preload = "auto";

        var audioData = {
            'url': $(this).attr('data-audiourl'),
            'audioPlayObj': audioPlay
        };

        listaAudios.push(audioData);
    });
});

$('.btnPlayAudio').click(function () {
    var url = $(this).attr('data-audiourl');
    for (var i = 0; i < listaAudios.length; i++) {
        if (listaAudios[i].url == url) {
            var audio = listaAudios[i].audioPlayObj;                        
            audio.currentTime = 0;
            audio.volume = 1;
            audio.play();
            break;
        }
    }
});

function stopAll() {
    for (var i = 0; i < listaAudios.length; i++) {
        listaAudios[i].audioPlayObj.pause();
    }
}