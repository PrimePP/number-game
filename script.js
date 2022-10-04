'use strict';

//targeting html elements
const scoreOne = document.getElementById('score--0');
const scoreTwo = document.getElementById('score--1');
const dicePic = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScoreOne = document.getElementById('current--0');
const currentScoreTwo = document.getElementById('current--1');
const playerOne = document.querySelector('.player--0');
const playerTwo = document.querySelector('.player--1');

//array for player scores
let playerScore = [0, 0];
scoreOne.innerHTML = 0;
scoreTwo.textContent = 0;
dicePic.classList.add('hidden');
//helps to change the active player
let activePlayer = 0;
let playingStatus = true;

//calculates current score
let currentScore = 0;

const switchPayer = function () {
  //switch player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 1 ? 0 : 1;
  //toggle --> adds the class if not there and if class is there removes it
  playerOne.classList.toggle('player--active');
  playerTwo.classList.toggle('player--active');
  //resetting both player's score
  playerScore = [0, 0];
};

btnRoll.addEventListener('click', function () {
  if (playingStatus) {
    //generates random dice value
    //getting the random dice value
    const diceVal = Math.floor(Math.random() * 6 + 1);
    console.log(diceVal);
    //Display the dice according to value
    dicePic.classList.remove('hidden');
    dicePic.src = `dice-${diceVal}.png`;
    //Check for rolled value == 1, then switch player
    if (diceVal !== 1) {
      currentScore += diceVal;
      //changes dynamically the players currentScore
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPayer();
    }
  }
});

//holdBtn event handler
btnHold.addEventListener('click', function () {
  if (playingStatus) {
    playerScore[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      playerScore[activePlayer];
    //check player score >= 100,declare player as winner
    if (playerScore[activePlayer] >= 100) {
      document
        .querySelector(`player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch player
      switchPayer();
    }
  }
});

//new game button event handler
btnNew.addEventListener('click',function(){
    document.getElementById('current--0').textContent=0;
    document.getElementById('current--1').textContent=0;
    document.getElementById('score--0').textContent=0;
    document.getElementById('score--1').textContent=0;
    activePlayer = 0;
    playingStatus = true;
    playerScore = [0, 0];
    dicePic.classList.add('hidden');
    playerOne.classList.remove('player--winner');
    playerTwo.classList.remove('player--winner');
    playerOne.classList.remove('player--active');
    playerTwo.classList.remove('player--active');
    playerOne.classList.add('player--active');
}) 