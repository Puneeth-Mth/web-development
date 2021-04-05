// 'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.starterMenu[mainIndex]]
  },
  orderDelivery:function({starterIndex,mainIndex,time,address}){
     console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
//using spread-operator
  orderPasta:function(ing1,ing2,ing3){
          console.log(`here are the delicious pasta with ${ing1} ,${ing2} ,${ing3}`);
  },
  //using rest-pattern
 orderPizza:function(mainIng,...otherIng){
          console.log('==>',mainIng,otherIng);
 }
};


 restaurant.orderDelivery({
     starterIndex:2,
     mainIndex:2,
     time:'22:30',
     address:'bangalore-hebbal'
  })

restaurant.orderPizza('onion','tomato')

// const ingredients = [
//             prompt('let\'s make pasta..! ingredients1'),
//             prompt('let\'s make pasta..! ingredients2'),
//             prompt('let\'s make pasta..! ingredients3')          
//               ] 
// console.log(ingredients);
// restaurant.orderPasta(...ingredients)

// const place={
//               a:'bangalore',
//               b:'mysore'
//           };

// const  {a:city_1,b:city_2} = place
// console.log(city_1,city_2);

const {name:restaurantName,openingHours:hours,categories:tags} = restaurant
// console.log(name,'\n',openingHours,'\n',categories);
// console.log(restaurantName,hours,tags);
// console.log(hours.thu.open);

const {menu1=null,starterMenu:starters=[]} = restaurant
console.log(menu1,starters);

// const [first,,second] = restaurant.categories

// console.log(first,second);

const [starter,main]=restaurant.order(1,2)
console.log(starter,main);


// let a=100,b=200
// console.log(a,b)
// let name = {a:'apple',b:'ball'};

// ({a,b} = name)
// console.log(a,b);


const {fri:{open:o,close:c}} = restaurant.openingHours
console.log(o,c);


//spread-operator:
// const a=[1,2]
// const b=[...a,3,4,5]
// console.log(b); 

const newMenu=[...restaurant.mainMenu,'dosa','palav']
console.log(newMenu);

const menu = [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(menu);



const newRes={founder:'puneeth',...restaurant}
console.log(newRes);


const restaurantCopy={...restaurant}
restaurantCopy.name='KFC'

console.log(restaurantCopy.name);
console.log(restaurant.name);

//rest-pattern

// const aa=[1,2,3,...[33,22]]
// console.log(aa);

// const [a,b,...others]=aa

// console.log(a,b,others);

const [pizza,pasta,...othersFood] = [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza,pasta,othersFood);

const {sat,...weeekdays} = restaurant.openingHours
console.log(sat,weeekdays);

// //using rest-pattern pack them in n
// const add=function(...n){
//   console.log(n);
// }

// add(1)
// add(1,2)
// add(55,66,33,55,77,44,11)


// const x=[14,15,16,78]
// //using spread-operator does(1,2,23,..) equal to [...x], we unpack
// add(...x)