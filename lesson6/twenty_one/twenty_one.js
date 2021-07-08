let readline = require('readline-sync');

const ACE_LOW = 1;
const ACE_HIGH = 11;
const ACE_REDUCE = ACE_HIGH - ACE_LOW;
const PERFECT_SCORE = 21;
const HIT_MAX = 16;

let deck = [
  {face: "Ace", suit: "Heart", value: 11, dealt: false},
  {face: "Ace", suit: "Diamond", value: 11, dealt: false},
  {face: "Ace", suit: "Spade", value: 11, dealt: false},
  {face: "Ace", suit: "Club", value: 11, dealt: false},
  {face: 2, suit: "Heart", value: 2, dealt: false},
  {face: 2, suit: "Diamond", value: 2, dealt: false},
  {face: 2, suit: "Spade", value: 2, dealt: false},
  {face: 2, suit: "Club", value: 2, dealt: false},
  {face: 3, suit: "Heart", value: 3, dealt: false},
  {face: 3, suit: "Diamond", value: 3, dealt: false},
  {face: 3, suit: "Spade", value: 3, dealt: false},
  {face: 3, suit: "Club", value: 3, dealt: false},
  {face: 4, suit: "Heart", value: 4, dealt: false},
  {face: 4, suit: "Diamond", value: 4, dealt: false},
  {face: 4, suit: "Spade", value: 4, dealt: false},
  {face: 4, suit: "Club", value: 4, dealt: false},
  {face: 5, suit: "Heart", value: 5, dealt: false},
  {face: 5, suit: "Diamond", value: 5, dealt: false},
  {face: 5, suit: "Spade", value: 5, dealt: false},
  {face: 5, suit: "Club", value: 5, dealt: false},
  {face: 6, suit: "Heart", value: 6, dealt: false},
  {face: 6, suit: "Diamond", value: 6, dealt: false},
  {face: 6, suit: "Spade", value: 6, dealt: false},
  {face: 6, suit: "Club", value: 6, dealt: false},
  {face: 7, suit: "Heart", value: 7, dealt: false},
  {face: 7, suit: "Diamond", value: 7, dealt: false},
  {face: 7, suit: "Spade", value: 7, dealt: false},
  {face: 7, suit: "Club", value: 7, dealt: false},
  {face: 8, suit: "Heart", value: 8, dealt: false},
  {face: 8, suit: "Diamond", value: 8, dealt: false},
  {face: 8, suit: "Spade", value: 8, dealt: false},
  {face: 8, suit: "Club", value: 8, dealt: false},
  {face: 9, suit: "Heart", value: 9, dealt: false},
  {face: 9, suit: "Diamond", value: 9, dealt: false},
  {face: 9, suit: "Spade", value: 9, dealt: false},
  {face: 9, suit: "Club", value: 9, dealt: false},
  {face: 10, suit: "Heart", value: 10, dealt: false},
  {face: 10, suit: "Diamond", value: 10, dealt: false},
  {face: 10, suit: "Spade", value: 10, dealt: false},
  {face: 10, suit: "Club", value: 10, dealt: false},
  {face: "Jack", suit: "Heart", value: 10, dealt: false},
  {face: "Jack", suit: "Diamond", value: 10, dealt: false},
  {face: "Jack", suit: "Spade", value: 10, dealt: false},
  {face: "Jack", suit: "Club", value: 10, dealt: false},
  {face: "Queen", suit: "Heart", value: 10, dealt: false},
  {face: "Queen", suit: "Diamond", value: 10, dealt: false},
  {face: "Queen", suit: "Spade", value: 10, dealt: false},
  {face: "Queen", suit: "Club", value: 10, dealt: false},
  {face: "King", suit: "Heart", value: 10, dealt: false},
  {face: "King", suit: "Diamond", value: 10, dealt: false},
  {face: "King", suit: "Spade", value: 10, dealt: false},
  {face: "King", suit: "Club", value: 10, dealt: false}
];

let hands = {
  human: [],
  dealer: []
};

function welcomeAndExplainGame() {
  while (true) {
    console.clear();
    console.log("Welcome to 21!");
    console.log("");
    let response = requestEnterOrHelp();
    if (response !== 'help') break;
  }
}

function instructionsRules() {
  console.log("---HELP MENU---\n");
  console.log("RULES:\n");
  console.log("Your primary objective is to get closer to 21 than the dealer without going over.\n");
  console.log("1. Deal: Each player starts with two cards");
  console.log("2. Hit or Stay: player makes a choice to draw a card (hit) or to stop drawing cards (stay).");
  console.log("3. Bust: If a player exceeds 21 points, they lose.");
  console.log("4. If no player busts and both stay, the score closest to 21 wins.\n");
  requestEnter();
}

function instructionsTurns() {
  console.log("---HELP MENU---\n");
  console.log("YOUR TURN:\n");
  console.log("Options:\n");
  console.log("Hit: Draw another card and add its value to your total score.");
  console.log("Stay: Resign from drawing any additional cards.");
  console.log("Bust: If your score exceeds 21, you lose.\n");
  requestEnter();

  console.log("---HELP MENU---\n");
  console.log("DEALER'S TURN:\n");
  console.log("Hit: Dealer will always hit until their score reaches 17 or higher.");
  console.log("Bust: If the dealer's score exceeds 21 and you have selected to stay, you win.\n");
  requestEnter();
}

function instructionsPointValues() {
  console.log("---HELP MENU---\n");
  console.log("POINT VALUES:\n");
  console.log("2-10: face value");
  console.log("Jack, Queen, King: 10");
  console.log("Ace: 1 or 11\n");
  console.log("NOTE: Ace values change based on your total score.\n");
  console.log("Example:");
  console.log("1. Ace (11) and 5 in hand => 16 points");
  console.log("2. You hit and receive a King (10)");
  console.log("3. Ace (now 1), King (10), and 5 in hand => 16\n");
  requestEnter();
}

function displayInstructions() {
  console.clear();
  instructionsRules();
  instructionsTurns();
  instructionsPointValues();
}

function requestEnter() {
  readline.question('\nPress "enter" to continue..');
  console.clear();
}

function requestEnterOrHelp() {
  let response = readline.question('\nPress "enter" to continue or "help" for instructions\n').toLowerCase();
  if (response === 'help') {
    displayInstructions();
  }
  console.clear();
  return response;
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
    displayCardsPlayerTurn();
    let response = readline.question(`Your score is ${calculateScore('human')}\nHit or Stay?\n`).toLowerCase();
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

function displayCardsPlayerTurn() {
  let numberOfDealerCards = hands.dealer.length;
  console.log(`Dealer has: ${hands['dealer'][0].face} and ${numberOfDealerCards - 1} unknown card(s)`);
  let humanCards = [];
  for (let card in hands['human']) {
    humanCards.push(hands['human'][card].face);
  }
  console.log(`You have: ${humanCards.join(' and ')}\n`);
}
function displayCards() {
  let dealerCards = [];
  for (let card in hands['dealer']) {
    dealerCards.push(hands['dealer'][card].face);
  }
  console.log(`Dealer has: ${dealerCards.join(' and ')}`);

  let humanCards = [];
  for (let card in hands['human']) {
    humanCards.push(hands['human'][card].face);
  }
  console.log(`You have: ${humanCards.join(' and ')}\n`);
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
  console.log(`Your Score was: ${humanScore}\n`);
  requestEnter();
}

function dealerTurn() {
  while (true) {
    console.log("---DEALER TURN---\n");
    displayCards();
    console.log(`Your score is ${calculateScore('human')}\nDealer score is ${calculateScore('dealer')}`);
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
  while (true) {
    hands.human.splice(0);
    hands.dealer.splice(0);

    for (let card = 0; card < 2; card++) {
      hands['human'].push(dealCard());
      hands['dealer'].push(dealCard());
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

