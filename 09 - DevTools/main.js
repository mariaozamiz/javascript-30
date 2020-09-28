'use strict';

const dogs = [
    { name: 'Snickers', age: 2 },
    { name: 'hugo', age: 8 },
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// clearing
console.clear();

// Interpolated
console.log('I am a %s string!', '🌀');

// Styled
console.log('%c I am some big blue text', 'font-size:40px; color:blue');

// warning!
console.warn('Watch out!');

// Error :|
console.error('Error here!');

// Info
console.info('An info icon is missing here');

// Testing --- nothing will happend if the answer is true
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Maria');
console.count('Maria');
console.count('Maria');
console.count('Maria');
console.count('Ainhoa');
console.count('Maria');
console.count('Maria');
console.count('Maria');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd('fetching data');
        console.log(data);
    });

// table

console.table(dogs);
