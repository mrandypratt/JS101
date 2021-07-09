let readline = require('readline-sync');
const MESSAGES = require('./messages.json');

const ACE_LOW = 1;
const ACE_HIGH = 11;
const ACE_REDUCE = ACE_HIGH - ACE_LOW;
const PERFECT_SCORE = 21;
const HIT_MAX = 16;
const DECK_SIZE = 52;

const deck = [];
const faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const faceValue = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const suits = ['Heart', 'Diamond', 'Spade', 'Club'];
let faceIndex = 0;
let suitIndex = 0;

function generateDeck() {
  for (let card = 0; card < DECK_SIZE; card++) {
    deck[card] = {};
    deck[card].face = faces[faceIndex];
    deck[card].suit = suits[suitIndex];
    deck[card].value = faceValue[faceIndex];
    deck[card].dealt = false;
    faceIndex = (faceIndex === 12) ? 0 : faceIndex + 1;
    suitIndex = (suitIndex === 3) ? 0 : suitIndex + 1;
  }
}

let hands = {
  human: [],
  dealer: []
};

function requestEnter() {
  readline.question('\nPress "enter" to continue..');
  console.clear();
}

function welcomeAndExplainGame() {
  while (true) {
    console.clear();
    console.log(MESSAGES.welcome);
    let response = requestEnterOrHelp();
    if (response !== 'help') break;
  }
}

function requestEnterOrHelp() {
  let response = readline.question('\nPress "enter" to continue or "help" for instructions\n').toLowerCase();
  if (response === 'help') {
    displayInstructions();
  }
  console.clear();
  return response;
}

function displayInstructions() {
  for (let message in MESSAGES.instructions) {
    console.clear();
    console.log(MESSAGES.instructions[message]);
    requestEnter();
  }
}

function dealCard() {
  while (true) {
    let cardIndex = Math.floor(Math.random() * 52);
    if (deck[cardIndex].dealt === false) {
      deck[cardIndex].dealt = true;
      return deck[cardIndex];
    }
  }
}

function humanTurn() {
  while (true) {
    console.log("---PLAYER TURN---\n");
    displayCards('human');
    let response = readline.question(`\nYour score is ${calculateScore('human')}\n\nHit or Stay?\n`).toLowerCase();
    console.clear();
    if (['hit', 'h'].includes(response)) {
      hands.human.push(dealCard());
      if (isBust(calculateScore('human'))) {
        return calculateScore('human');
      }
    } else if (['stay', 's'].includes(response)) {
      return calculateScore('human');
    } else {
      console.log(`${response} is not a valid response.`);
      requestEnter();
    }
  }
}

function displayCards(player) {

  if (player !== 'human') {
    console.log(`-DEALER HAND-`);
    for (let card in hands.dealer) {
      console.log(`${hands.dealer[card].face} of ${hands.dealer[card].suit}s`);
    }
  } else {
    console.log(`-DEALER HAND-\n${hands.dealer[0].face} of ${hands.dealer[0].suit}s\nUnknown Card`);
  }

  console.log(`\n-YOUR HAND-`);
  for (let card in hands.human) {
    console.log(`${hands.human[card].face} of ${hands.human[card].suit}s`);
  }
}

function calculateScore(player) {
  let score = 0;
  let numOfAces = 0;
  hands[player].forEach(card => {
    if (card.face === "Ace") {
      numOfAces++;
    }
    score += card.value;
  });

  while (true) {
    if (!isBust(score) || numOfAces === 0) return score;
    score -= ACE_REDUCE;
    numOfAces--;
  }
}

function isBust(score) {
  return score > PERFECT_SCORE;
}

function displayWinnerHumanBusted(humanScore) {
  console.log('---DEALER WINS---\n');
  console.log("You Busted.");
  console.log(`\nYour Score was: ${humanScore}\n`);
  requestEnter();
}

function dealerTurn() {
  while (true) {
    console.log("---DEALER TURN---\n");
    displayCards();
    console.log(`\nYour score is ${calculateScore('human')}\nDealer score is ${calculateScore('dealer')}`);
    requestEnter();

    let score = calculateScore('dealer');
    if (isBust(score) || (score > HIT_MAX)) {
      return score;
    } else {
      hands.dealer.push(dealCard());
    }
  }
}

function displayWinnerDealerBusted() {
  console.log('---PLAYER WINS---\n');
  console.log("The Dealer Busted.");
  requestEnter();
}

function displayWinnerHumanHighScore(humanScore, dealerScore) {
  console.log('---PLAYER WINS---\n');
  displayCards();
  displayFinalScore(humanScore, dealerScore);
}

function displayWinnerDealerHighScore(humanScore, dealerScore) {
  console.log('---DEALER WINS---\n');
  displayCards();
  displayFinalScore(humanScore, dealerScore);
}

function displayDraw(humanScore, dealerScore) {
  console.log('---DRAW---\n');
  displayCards();
  displayFinalScore(humanScore, dealerScore);
}

function displayFinalScore(humanScore, dealerScore) {
  console.log(`You Scored ${humanScore} and Dealer Scored ${dealerScore}`);
}

function requestToPlayAgain() {
  while (true) {
    let response = readline.question("Play again? (y/n)\n").toLowerCase();
    console.clear();
    if (['y', 'yes'].includes(response)) return true;
    if (['n', 'no'].includes(response)) return false;
    console.log(`${response} is not a valid response.`);
  }
}

welcomeAndExplainGame();
let playAgain = true;

while (playAgain) {
  generateDeck();

  while (true) {
    hands.human.splice(0);
    hands.dealer.splice(0);

    for (let card = 0; card < 2; card++) {
      hands.human.push(dealCard());
      hands.dealer.push(dealCard());
    }

    let humanScore = humanTurn();

    if (isBust(humanScore)) {
      displayWinnerHumanBusted(humanScore);
      break;
    }

    let dealerScore = dealerTurn();

    if (isBust(dealerScore)) {
      displayWinnerDealerBusted();
      break;
    }

    if (humanScore > dealerScore) {
      displayWinnerHumanHighScore(humanScore, dealerScore);
    } else if (humanScore < dealerScore) {
      displayWinnerDealerHighScore(humanScore, dealerScore);
    } else {
      displayDraw(humanScore, dealerScore);
    }

    requestEnter();

    playAgain = requestToPlayAgain();

    break;
  }
}

