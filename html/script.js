'use strict';


let name='puneeth';
// if (name=='puneeth')alert(name+' correct name');
console.log(10-12+111,name+"raj")


let _=11;
let a$=12;

// constant datatype:
let PI=3.14;
const a=true;


// to check the type
console.log(typeof name,typeof a);

// dynamic typing
name='kumar';
console.log(name+'raj',typeof name);


let year;
console.log(typeof year ,year);
year=100
console.log(year);


if (year>2000){
	console.log('new decade =😂😂😂');
}
else{
	console.log('old ppl');
}

const bob=22
const lob=99

if(bob >lob){
	console.log(`bob is marks is ${bob} is > than lob marks ${lob}`);
}
else{
	console.log(`lob is marks is ${lob} is > than bob marks ${bob}`);
}

console.log('23'>'18','11'*'2');

// const age=prompt('enter age');
// console.log(typeof age);
// if(Number(age)===18) console.log(`ur ${18}`);

// Number(age) >= 18 ? console.log("adult") : console.log("child")


// using strict mode gives error msg identifies bugs.
// ex: like spelling mistake in variables and using reserved words
let hasDriverLicense=false;
const passTest=true;

if (passTest) hasDriverLicense=true;
if (hasDriverLicense) console.log('u can drive..'); 

// let private; error using "use strict"

let fruit;
function makeingJuice(fruit) {
	(fruit==='orange') ? console.log(` ${fruit}juice getting ready..`) : console.log('only orange juice');
}


makeingJuice(fruit='grapes');


let college=function (college_name){
	const loc=`${college_name} is in bangalore`;
	return loc
}

const loc = college('rgit');
console.log(loc);


//arrow func

const age= current_year => current_year-1997
const latest_age = age(2021);
console.log(latest_age)


// func inside func:

function cutting(extra){
	return `vanilla ${extra}`;
}

function makeingJuice(fruit,extra='') {
	const cut=cutting(extra=extra)
	return `${fruit} and ${extra} milkshake`

	}
console.log(makeingJuice('orange','ice-cream'));