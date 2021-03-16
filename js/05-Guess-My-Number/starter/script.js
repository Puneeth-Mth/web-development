'use strict';

const sercetGuessNumber = Math.round(Math.random()*20)+1
console.log(sercetGuessNumber);

let score=20
let highScore=0
// let a=document.querySelector('.message').textContent;
// console.log(a);

// document.querySelector('.message').textContent = 'Correct Number ✌'

// a=document.querySelector('.message').textContent;
// console.log(a);


document.querySelector('.score').textContent = score;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=515;
// console.log(document.querySelector('.guess').value);

// event-listener -check button

document.querySelector('.check').addEventListener('click',function(){
	console.log(document.querySelector('.guess').value);
	const userGuessNumber=Number(document.querySelector('.guess').value);
	if (userGuessNumber){
		console.log(userGuessNumber);

		if (userGuessNumber == sercetGuessNumber){
			document.querySelector('.message').textContent = 'Correct Number ✌'
			score=score+1
			
			document.querySelector('.number').textContent = sercetGuessNumber;
			document.querySelector('.score').textContent =score;
			document.querySelector('body').style.backgroundColor = 'green'
			document.querySelector('.number').style.width = '30rem'

			if(score>highScore){
					highScore=score
					console.log(highScore);
					document.querySelector(' .highscore').textContent= highScore
				}


		}
		else if (userGuessNumber < sercetGuessNumber) {
			if (score>=1){
				console.log("Number is too low");
				document.querySelector('.message').textContent = "Number is too low"
				score=score-1
				document.querySelector('.score').textContent =score;
				document.querySelector('body').style.backgroundColor = 'black'
			}
			else{
				document.querySelector('body').style.backgroundColor = 'red'
				document.querySelector('.message').textContent = "U Lost a game."
			}		
		}
		else {

			if (score>=1){
				console.log("Number is too low");
				document.querySelector('.message').textContent = "Number is too High"
				score=score-1
				document.querySelector('.score').textContent =score;
				document.querySelector('body').style.backgroundColor = 'black'
			}
			else{
				document.querySelector('body').style.backgroundColor = 'red'
				document.querySelector('.score').textContent =score;
				document.querySelector('.message').textContent = "U Lost a game."
			}	
		}
	}
	else{
		console.log('empty');
		alert('Enter the Number')
	}
})

 
 document.querySelector('.again').addEventListener('click',function(){
 	score=20
 	const sercetGuessNumber = Math.round(Math.random()*20)+1

 	document.querySelector('.score').textContent =score;
 	document.querySelector('.guess').value ='';
 	document.querySelector('body').style.backgroundColor = 'black'
 	document.querySelector('.number').textContent = '?';
 	document.querySelector('.message').textContent = 'Start guessing..'
 })