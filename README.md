# AMD landing pages
#### Video Demo:  https://youtu.be/PyrnOt7zi_I
#### Other version https://drive.google.com/drive/folders/1XuRUpoIdnOpLmZUtwymI0eZ3dOuMyVm0?usp=sharing
# OVERVIEW

AMD is a landing page made for a company that takes care of the social networks of several clients, one of the company's clients is called EVA which is a social project that helps women with breast cancer. To repay the help he gives to EVA I made the page, as it will help in the dissemination of the two companies

# Parts
AMD's landing page has basic parts to ensure its main function:
- Navigation bar
- Presentation
- Stages of creating a brand
- Portfolio
- Assessments
- Social media
- Footer

# Basic functionality
Some functions guarantee a Uni functionality.
1) CSS: I spent a lot of time worrying about the design details of the project to make it more accessible for various types of devices and also to bring a pleasant visual experience
2) Navigation bar: In it I put a tags to be able to browse the site through the navigation bar, in addition to having put the links to get in touch by other means (WhatsApp, Facebook and Intagram)
3) JS: I used it to get the animations done and also to create the interactive part of the portfolio

- Homepage and Responsive show case

| Homepage | Responsive Web |
| :---: | :---: | 
| <img src="https://raw.githubusercontent.com/Tiodevs/AMD_1.7v/main/img/FULL.png" width="400" /> | <img src="https://raw.githubusercontent.com/Tiodevs/AMD_1.7v/main/img/WIDTH2.png" width = "400">


### Troca de imagens na parte do perfil

Utilizando o DOM eu criei uma função para cada opção, e cada opção mudava as 6 fotos que estavam abaixo

``` Javascript
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
```


# Requirements
 - Download all files and folders.
 - To run the project, all you need to do is open the index.html of the page you downloaded

# How to use it
- Open the index.html file
- And start scrolling down
