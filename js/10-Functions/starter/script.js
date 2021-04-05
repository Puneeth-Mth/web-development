'use strict';


// const booking=[];


// const createBooking = function(flightNum,numPassengers,price){
// 	const booking_list={flightNum,numPassengers,price}

// 	console.log(booking_list);
// 	booking.push(booking_list)
// }

// createBooking('k552',222,60000)
// console.log(booking);


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer: function(){
  		
  		const data=this.options.join('\n')
  		const userNumber=Number(prompt(this.question+'\n'+data+'\n (write option number.)'))
  		console.log(data,typeof userNumber);
  		if (typeof userNumber === 'number')
  		{
  			userNumber > 4 ?  poll.registerNewAnswer() : this.answers[userNumber]++
  		}
  		},
}
poll.registerNewAnswer();
console.log(poll);
