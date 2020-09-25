'use strict';

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 },
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = new Date().getFullYear();
const isOlderThan19 = people.some((person) => currentYear - person.year >= 19);
console.log(isOlderThan19);
// Array.prototype.every() // is everyone 19 or older?
const areAllOver19 = people.every((person) => currentYear - person.year >= 19);
console.log(areAllOver19);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const thatComment = comments.filter((comment) => comment.id === 823423);
console.log(thatComment);
// Array.prototype.findIndex()
// Find the index of the comment with this ID
const thatText = comments.findIndex((comment) => comment.id === 823423);
console.log(thatText);
// delete the comment with the ID of 823423
const deleteComments = comments.splice(1, 1);
console.log(deleteComments);
console.log(comments);
