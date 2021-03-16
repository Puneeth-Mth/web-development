'use strict';

// #player-1 score
const score1=document.querySelector('#score--0')
// #player-2 score
const score2=document.getElementById('score--1')

score1.textContent=0
score2.textContent=0

const player_1=document.querySelector('.player--0')
const player_2=document.querySelector('.player--1')

const dice=document.querySelector('.dice')
dice.classList.add('hidden')

const randomNumber = Math.random()

const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnhold=document.querySelector('.btn--hold')

let userCurrentScore=0;

let activePlayer=0
let finalScore=[0,0]

btnRoll.addEventListener('click',function(){

	const randomNumber = Math.trunc(Math.random()*6)+1
	
	dice.classList.remove('hidden')
	dice.src =`dice-${randomNumber}.png`

	if (randomNumber!=1) {
		userCurrentScore+=randomNumber
		// console.log(document.getElementById(`current--${activePlayer}`));
		document.getElementById(`current--${activePlayer}`).textContent=userCurrentScore
	}
	else{
		console.log('dice roll is 1.make score 0');
		document.getElementById(`current--${activePlayer}`).textContent=0
		userCurrentScore=0
		activePlayer= activePlayer === 0 ? 1 :0
		player_1.classList.toggle('player--active')
		player_2.classList.toggle('player--active')

	}
	
})