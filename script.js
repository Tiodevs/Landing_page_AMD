
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '315',
width: '560', // Pode ser configurado em % - por exemplo 100% para se adequar em qualquer largura de tela.
videoId: 'Tp1ZGCqqEuU',
});
}

AOS.init({
    duration: 1200,
  })


function marca1() {
    var div = document.getElementById("imagens-portifolio");
    div.src = "./img/Identidades visuais/Iris/iris 2.png"
    
    var div1 = document.getElementById("imagens-portifolio-1");
    div1.src = "./img/Identidades visuais/Iris/iris1.png"
    
    var div2 = document.getElementById("imagens-portifolio-2");
    div2.src = "./img/Identidades visuais/Iris/iris 4.png"
    
    var div3 = document.getElementById("imagens-portifolio-3");
    div3.src = "./img/Identidades visuais/Iris/iris 5.png"
    
    var div4 = document.getElementById("imagens-portifolio-4");
    div4.src = "./img/Identidades visuais/Iris/iris 6.png"
    
    var div5 = document.getElementById("imagens-portifolio-5");
    div5.src = "./img/Identidades visuais/Iris/iris 3.png"
    
}

function marca2() {
    var div = document.getElementById("imagens-portifolio");
    div.src = "./img/Identidades visuais/Clemencia/1.png"
    
    var div1 = document.getElementById("imagens-portifolio-1");
    div1.src = "./img/Identidades visuais/Clemencia/2.png"
    
    var div2 = document.getElementById("imagens-portifolio-2");
    div2.src = "./img/Identidades visuais/Clemencia/3.png"
    
    var div3 = document.getElementById("imagens-portifolio-3");
    div3.src = "./img/Identidades visuais/Clemencia/5.png"
    
    var div4 = document.getElementById("imagens-portifolio-4");
    div4.src = "./img/Identidades visuais/Clemencia/6.png"
    
    var div5 = document.getElementById("imagens-portifolio-5");
    div5.src = "./img/Identidades visuais/Clemencia/7.png"
}

function marca3() {
    var div = document.getElementById("imagens-portifolio");
    div.src = "./img/Identidades visuais/imperial magda/1.png"
    
    var div1 = document.getElementById("imagens-portifolio-1");
    div1.src = "./img/Identidades visuais/imperial magda/2.png"
    
    var div2 = document.getElementById("imagens-portifolio-2");
    div2.src = "./img/Identidades visuais/imperial magda/3.png"
    
    var div3 = document.getElementById("imagens-portifolio-3");
    div3.src = "./img/Identidades visuais/imperial magda/5.png"
    
    var div4 = document.getElementById("imagens-portifolio-4");
    div4.src = "./img/Identidades visuais/imperial magda/6.png"
    
    var div5 = document.getElementById("imagens-portifolio-5");
    div5.src = "./img/Identidades visuais/imperial magda/7.png"
}
