//Div das imagens dos tenis 
var shoes1 = document.getElementById('shoes1');
var shoes2 = document.getElementById('shoes2');
var shoes3 = document.getElementById('shoes3');
var shoes4 = document.getElementById('shoes4');
var shoes5 = document.getElementById('shoes5');
var shoes6 = document.getElementById('shoes6');

function card1(){   
    //Peguei a imagem 
    var imagem1 = document.createElement('img')
    imagem1.src=tenis[0].imagem;//passei o caminho pelos sneakers.js

    var nome = document.getElementById("nome_card1");
    var marca = document.getElementById("marca_card1");
    var preco = document.getElementById("preco_card1");

    shoes1.appendChild(imagem1)
    nome.innerHTML = tenis[0].Nome
    marca.innerHTML = tenis[0].Marca
    preco.innerHTML = tenis[0].Preco
    
}
function card2(){

    var imagem2 = document.createElement('img')
    imagem2.src = tenis[1].imagem

    var nome = document.getElementById("nome_card2");
    var marca = document.getElementById("marca_card2");
    var preco = document.getElementById("preco_card2");

    shoes2.appendChild(imagem2)
    nome.innerHTML = tenis[1].Nome
    marca.innerHTML = tenis[1].Marca
    preco.innerHTML = tenis[1].Preco
}
function card3(){

    var imagem3 = document.createElement('img')
    imagem3.src= tenis[2].imagem

    var nome = document.getElementById("nome_card3");
    var marca = document.getElementById("marca_card3");
    var preco = document.getElementById("preco_card3");
    
    shoes3.appendChild(imagem3)
    nome.innerHTML = tenis[2].Nome
    marca.innerHTML = tenis[2].Marca
    preco.innerHTML = tenis[2].Preco
}
function card4(){

    var imagem4 = document.createElement('img')
    imagem4.src = tenis[3].imagem

    var nome = document.getElementById("nome_card4");
    var marca = document.getElementById("marca_card4");
    var preco = document.getElementById("preco_card4");

    shoes4.appendChild(imagem4)
    nome.innerHTML = tenis[3].Nome
    marca.innerHTML = tenis[3].Marca
    preco.innerHTML = tenis[3].Preco
}
function card5(){

    var imagem5 = document.createElement('img')
    imagem5.src = tenis[4].imagem

    var nome = document.getElementById("nome_card5");
    var marca = document.getElementById("marca_card5");
    var preco = document.getElementById("preco_card5");

    shoes5.appendChild(imagem5)
    nome.innerHTML = tenis[4].Nome
    marca.innerHTML = tenis[4].Marca
    preco.innerHTML = tenis[4].Preco
}
function card6(){

    var imagem6 = document.createElement('img')
    imagem6.src=tenis[5].imagem

    var nome = document.getElementById("nome_card6");
    var marca = document.getElementById("marca_card6");
    var preco = document.getElementById("preco_card6");

    shoes6.appendChild(imagem6)
    nome.innerHTML = tenis[5].Nome
    marca.innerHTML = tenis[5].Marca
    preco.innerHTML = tenis[5].Preco
}


card1()
card2()
card3()
card4()
card5()
card6()