import { deck } from "../Offline/deckClass.js";
import { card } from "../Offline/cardClass.js";


let initialDeck = new deck();
initialDeck.deck();

function showCards(card2, card4) {
    // Add a Reveal Button
    let revealElement = document.getElementsByClassName('home')[0];
    let newButton = document.createElement('input');
    newButton.type= "button";
    newButton.id = 'reveal'
    newButton.value = 'Reveal';
    newButton.addEventListener('click', function(event){
      document.getElementsByClassName('opponentsCards')[0].innerHTML= `Your Opponents cards were ${card2.name} and ${card4.name}`;
      revealElement.removeChild(newButton);
   })
   revealElement.appendChild(newButton);
}

function runGame() {
  console.log("hello I work");

  let gameDeck = initialDeck.shuffle();
  
  // Player Cards
  let card1 = new card();
  card1.card(gameDeck[0]);
  
  let card2 = new card();
  card2.card(gameDeck[3]);
  document.getElementsByClassName('cards')[0].innerHTML= "Welcome to Coup" + "<br>" + "your cards are " + `${card1.name} and ${card2.name}`;

  // Opponent Cards
  let card3 = new card();
  card3.card(gameDeck[2]);
  
  let card4 = new card();
  card4.card(gameDeck[4]);
  showCards(card2, card4);
}