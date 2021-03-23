let cardValue = document.querySelector('.cardValue');
let suit = document.querySelectorAll('.suit');
let newCard = document.querySelector('.button');

let possibleCardValues = ['1','2','3','4','5','6','7','8','9','10','<img class="image" src="images/king.png" alt="">','<img class="image" src="images/queen.jpeg" alt="">','J',]
let possibleSuitValues = ['♦','♥','♠','♣'];

function cambiarCarta () {
    let randomSuit = Math.floor(Math.random() * possibleSuitValues.length);
    let randomCardValue = Math.floor(Math.random() * possibleCardValues.length);
    
    cardValue.innerHTML = possibleCardValues[randomCardValue];
    for(let i of suit){
        i.innerHTML = possibleSuitValues[randomSuit];
        if(i.innerHTML === '♥' || i.innerHTML === '♦'){
            i.style.color = "red";
        } else {
            i.style.color = "black";
        }
    }

}

window.addEventListener('load', (e) => {
    cambiarCarta()

})

 newCard.addEventListener('click', (e) =>{
    cambiarCarta()
 })

 setInterval(() =>{
     cambiarCarta()
 }, 5000);