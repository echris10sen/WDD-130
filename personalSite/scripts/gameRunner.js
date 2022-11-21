import { deck } from "../../personalSite/scripts/deckClass.js";
import { card } from "../../personalSite/scripts/cardClass.js";

export class gameRunner {
  // variables
  initialDeck;

  // constructor
  gameRunner(params){
    this.initialDeck = new deck();
    this.initialDeck.deck();
    console.log("hello");
  }
  
  //methods
  showCards(card2, card4) {
      document.getElementsByClassName('opponentsCards')[0].innerHTML= `Your Opponents cards were ${card2.name} and ${card4.name}`;
  }

  runGame() {
    console.log("hello I work");

    let gameDeck = this.initialDeck.shuffle();
    
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
    this.showCards(card2, card4);
  }
}