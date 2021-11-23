let urlFeliz = "https://w7.pngwing.com/pngs/932/162/png-transparent-smiley-happiness-happy-face-face-smiley-emoticon-thumbnail.png"
let urlTriste = "https://static6.depositphotos.com/1002188/648/i/600/depositphotos_6489061-stock-photo-sad-symbol.jpg"
let imgHtml = document.querySelector("#nota")
 
numero1 = Number (prompt("Ingrese su nota"))
numero2 = Number (prompt("Ingrese su nota"))
numero3 = Number (prompt("Ingrese su nota"))
var numero4 = ((numero1 + numero2 + numero3)/3)
if (numero4 >= 6){
    imgHtml.src = urlFeliz
}else{
    imgHtml.src = urlTriste
}



