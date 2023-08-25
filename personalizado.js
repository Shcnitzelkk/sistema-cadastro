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

//--- D20 ---//
function rollD20() {
    var d20Result = document.getElementById("d20Result");
    var d20 = Math.floor(Math.random()*20+1);
      d20Result.innerHTML = d20;
    };
    
    //--- D12 ---//
    function rollD12() {
    var d12Result = document.getElementById("d12Result");
    var d12 = Math.floor(Math.random()*12+1);
      d12Result.innerHTML = d12;
    };
    
    //--- D10 ---//
    function rollD10() {
    var d10Result = document.getElementById("d10Result");
    var d10 = Math.floor(Math.random()*10+1);
      d10Result.innerHTML = d10;
    };
    
    //--- D8 ---//
    function rollD8() {
    var d8Result = document.getElementById("d8Result");
    var d8 = Math.floor(Math.random()*8+1);
      d8Result.innerHTML = d8;
    };
    
    //--- D6 ---//
    function rollD6() {
    var d6Result = document.getElementById("d6Result");
    var d6 = Math.floor(Math.random()*6+1);
      d6Result.innerHTML = d6;
    };
    
    //--- D6 ---//
    function rollD4() {
    var d4Result = document.getElementById("d4Result");
    var d4 = Math.floor(Math.random()*4+1);
      d4Result.innerHTML = d4;
    };

    function myFunction(){
        document.getElementById("foto").style.backgroundColor = "blue";
    }