// console.log ('hello world');  
// console.error('This is an error');
// console.warn('This is a warning');

// var, let, const


// let age ;
// age = 31;
// const score = 10;

// score = 10;
// console.log(age);

// String, numbers,boolean, null, undefined

// const name = 'John';
const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof x);

// let name = 'John';
// let age = 30;
// let seeya;
// let goodbye;

// // Concatenation = joining things 
// seeya = `${name}, see ya!`
// console.log (seeya);

// name = 'Miguel';
// age = 18;

// // template String
// goodbye = `${name}, Goodbye, see you soon!`
// console.log (goodbye);  

// name = 'Tony';
// age = 58;
// const hello = `My name is ${name} and i am ${age}`;

//console.log (hello);

// @@@

// let s = 'Hello World';

// console.log(`The string ${s} has a length of ${s.length}`);
// console.log('The string ' + s + ' has a length of ' + s.length);

// // s = 'goodbye world';  
// // console.log(s.length);

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(6, 11).toUpperCase());

// let x = 'This program was made by miguel';
// console.log(x.split(''));

// x = 'Tony,Ana,Annabelle,Miguel';
// console.log(x.split(','));

// THESE ARE THE ARRAYS LISTS 

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const nl_east = new Array('Atlanta','Miami','New York','Washington','Philadelphia');
// console.log(nl_east);
// const nl_wins = new Array(101,70,98,52,79);
// console.log(nl_wins);
// const nl_loss = [61,72,64,110,83];
// console.log(nl_loss);

// Amazon Shopping Cart example with Arrays

// let shoppingCart = [];
// //let shoppingCarStatus = null;

// //console.log('Miguel logs in into Amazon...')

// //console.log(`Miguel, you shopping cart has ${shoppingCart.length} items...`);
// //console.log(shoppingCarStatus);

// //console.log('Miguel adds a baseball glove to the shoping cart...')
// shoppingCart.push('Baseball Glove');
// // console.log(`Miguel, you shopping cart has ${shoppingCart.length} items...`);
// // console.log(`Shopping cart item 1 is ${shoppingCart[0]}`);

// shoppingCart.push('Baseball bat');
// // console.log(`Shopping cart item 2 is ${shoppingCart[1]}`);

// shoppingCart.push('Baseball helmet');

// shoppingCart.unshift('Baseball cap');

// shoppingCart.pop();

// console.log(Array.isArray(shoppingCart));
// console.log(Array.isArray(age));
// console.log(shoppingCart);

// console.log(shoppingCart.indexOf('Baseball bat'));





// // shoppingCart = ['Baseball Glove'];
// // shoppingCarStatus = '1 Item';

// // console.log(shoppingCart);
// // console.log(shoppingCarStatus);

// // shoppingCart = ['Baseball Glove', 'Bat'];
// // shoppingCarStatus = '2 Item';

// // console.log(shoppingCart);
// // console.log(shoppingCarStatus);


// // THESE ARE OBJECTS

// const person ={
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main st',
//         city: 'boston',
//         state: 'MA'
//     }
// }

// console.log(person.hobbies[1]);
// console.log(person.address.city);
// console.log(Array.isArray(person));

// let {firstName, lastName, address: {city}} = person;

// console.log(firstName);
// firstName = 'Miguel';
// console.log(firstName); 




const team = [
    {
        id:1, 
        position: 'Pitcher',
        ab: 50,
        hits: 10
    },
    {
        id:2, 
        position: 'Catcher',
        ab: 670,
        hits: 145
    },
    {
        id:3, 
        position: 'First base',
        ab: 724,
        hits: 191
    },
    {
        id:4, 
        position: 'Right Fielder',
        ab: 780,
        hits: 445
    },
    {
        id:5, 
        position: 'Third base',
        ab: 710,
        hits: 378
    },
    {
        id:6, 
        position: 'Short stop',
        ab: 650,
        hits: 250
    },
];

// console.log(todos);
// console.log(todos[1].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// // for
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// console.log('Finished for loop!')

// // while loop
// let i = 0;
// while (i <= 10) {
//     console.log(`The value of i is ${i}`);
//     i = i + 2;
// }

// console.log('Finished while loop!')

var battingAverage = 0;

for(let player of team) {
    battingAverage = player.hits / player.ab;
    console.log(`The batting average for the ${player.position} is ${battingAverage} (Hits: ${player.hits} At Bats: ${player.ab})`);
}






const x = 4;
const y = 11; 

if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
}





    // } else if(x > 10) {
//     console.log('x is greater than 10')
// }
// else{
//     console.log('x is less 10');
// }

