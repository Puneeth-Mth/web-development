'use strict';
// // 

// let name='puneeth';
// // if (name=='puneeth')alert(name+' correct name');
// console.log(10-12+111,name+"raj")


// let _=11;
// let a$=12;

// // constant datatype:
// let PI=3.14;
// const a=true;


// // to check the type
// console.log(typeof name,typeof a);

// // dynamic typing
// name='kumar';
// console.log(name+'raj',typeof name);


// let year;
// console.log(typeof year ,year);
// year=100
// console.log(year);


// if (year>2000){
// 	console.log('new decade =😂😂😂');
// }
// else{
// 	console.log('old ppl');
// }

// const bob=22
// const lob=99

// if(bob >lob){
// 	console.log(`bob is marks is ${bob} is > than lob marks ${lob}`);
// }
// else{
// 	console.log(`lob is marks is ${lob} is > than bob marks ${bob}`);
// }

// console.log('23'>'18','11'*'2');

// // const age=prompt('enter age');
// // console.log(typeof age);
// // if(Number(age)===18) console.log(`ur ${18}`);

// // Number(age) >= 18 ? console.log("adult") : console.log("child")


// // using strict mode gives error msg identifies bugs.
// // ex: like spelling mistake in variables and using reserved words
// let hasDriverLicense=false;
// const passTest=true;

// if (passTest) hasDriverLicense=true;
// if (hasDriverLicense) console.log('u can drive..'); 

// // let private; error using "use strict"

// let fruit;
// function makeingJuice(fruit) {
// 	(fruit==='orange') ? console.log(` ${fruit}juice getting ready..`) : console.log('only orange juice');
// }


// makeingJuice(fruit='grapes');


// let college=function (college_name){
// 	const loc=`${college_name} is in bangalore`;
// 	return loc
// }

// const loc = college('rgit');
// console.log(loc);


// //arrow func

// const age= current_year => current_year-1997
// const latest_age = age(2021);
// console.log(latest_age)


// // func inside func:

// function cutting(extra){
// 	return `vanilla ${extra}`;
// }

// function makeingJuice(fruit,extra='') {
// 	const cut=cutting(extra=extra)
// 	return `${fruit} and ${extra} milkshake`

// 	}
// console.log(makeingJuice('orange','ice-cream'));


// function describeCountry(country,population,captialCity){
// 	const info=`${country} has ${population} and its city is ${captialCity}`;
// 	return info
// }

// // console.log(describeCountry('india','50 million','Dehli'));
// const populationInfo = population => {
//     const population_in_percent = (population / 7900) * 100;
//     return population_in_percent

// }

// console.log(populationInfo(1441));


// // const names=['peter','kajal',121,true,''];
// // console.log(names);
// // console.log(names.length);

// const names=new Array(121,11);
// names.push('sun')
// console.log(names.indexOf(121));
// console.log(names);

// const calcTip=function (bill){
// 	return 50>=bill<=300 ? bill *0.15 : bill * 0.2;

// }

// const bill =[111,300,22,560];
// const tips =[calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2]),calcTip(bill[3])]
// console.log(tips);


// let total=[];
// for (var i = 0; i <=bill.length; i++) {
// 	let value=bill[i]+tips[i]
// 	total.push(value);
	
// }
// total.pop();
// console.log(total);

// //objects

// const student={
// 	name:'arun',
// 	age:'11',
// 	section:'A',
// 	marks:[111,200,354,53],
// 	total_marks:function(){
// 		let total=0;
// 		for (var i = 0; i <this.marks.length; i++) {
// 			total+=this.marks[i];
// 			// console.log('====',this.marks[i],total);
// 		}
// 		return total
// 	}
// 	// total_marks:function(){return 1},
// };

// // console.log(student.total_marks());
// const marks=student.total_marks();
// student['total_marks']=marks
// // console.log(student['age']);
// student.age=22;
// student.status='pass'
// student['location']='india  '
// console.log(student);



// const p1={
// 	fullName:'Marks Miller',
// 	mass:120,
// 	height:5.1,
// 	weight:function(){
// 		return (this.mass / this.height)**2;
// 	}
// };

// const p2={
// 	fullName:'John Smith',
// 	mass:20,
// 	height:6.1,
// 	weight:function(){
// 		return (this.mass / this.height)**2;
// 	}
// };
// console.log(p1.weight());
// console.log(p2.weight());

// const marks_wg=p1.weight();
// const john_wg=p2.weight();

// p1.weight=marks_wg;
// p2.weight=john_wg;
// console.log(p1);
// console.log(p2);


// if (marks_wg > john_wg) {
// 	console.log(`${p1.fullName} ${marks_wg} is higher than ${p2.fullName}${john_wg}`);
// }else{
// 	console.log(`${p2.fullName} ${john_wg} is higher than ${p1.fullName}${marks_wg}`);

// }


// function temp_operation(temp_values){
// 	let temp_sentence='';
// 	for (let i = 0; i < temp_values.length; i++) {
// 		let j=1+i;
// 		temp_sentence+=`...${temp_values[i]}-C in ${j} days`

// 	}
// 	return temp_sentence;
// }

// console.log(temp_operation([12,5,1,37]));



// function check(n){
// 	let sum=0
// 	sum+=n
// 	console.log(name);
// 	return sum
// }

// const name='aaa'

// console.log(check(11))



// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };


// for (let i=0 ;i< game.scored.length;i++){
// 	let key='goal'+(i+1)
// 	let player=game.scored[i]
// 	console.log(key,':',player)
// }

// let avg=0
// for (const odd of Object.values(game.odds)){
// 	console.log(odd);
// 	avg+=odd
// 	avg/=Object.values(game.odds).length
// }
// console.log(avg);

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


const events = [...new Set(gameEvents.values())]
console.log(events);

gameEvents.delete(64);



