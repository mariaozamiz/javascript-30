'use strict';

// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Meri';
let name2 = name;
console.log(name, name2);
name = 'María';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// however what happens when we update that array?
team[3] = 'Lux'; // both players and team will be updated because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
team2[3] = 'Nox';

// or another
const team3 = Array.from(players);

// or create a new array and concat the old one in
const team4 = [].concat(players);

// or use the new ES6 Spread
const team5 = [...players];

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'María Ozámiz',
    age: 35,
};

// and think we make a copy:
const developer = person;
console.log(person);
developer.age = 100;
console.log(person, developer); // 100, 100

// how do we take a copy instead?
const developer2 = Object.assign({}, person, { age: 25 });
console.log(developer2, person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const maria = {
    name: 'María',
    age: 35,
    social: {
        twitter: '@mariaozamiz',
        instagram: 'maria.ozamiz',
    },
};

console.clear();
console.log(maria);

const dev = Object.assign({}, maria); //clonning only at first level, social will be reassigned

const dev2 = JSON.parse(JSON.stringify(maria)); // deep clonning but not recommended

console.log(dev);
