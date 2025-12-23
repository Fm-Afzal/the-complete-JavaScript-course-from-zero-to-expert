const firstName = "Afzal";
const birthYear = 1997;
const year = 2024;
const job = "developer";

const afzal = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

console.log(afzal);

//es6 template literals
const afzalNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(afzalNew);

//multi-line strings
console.log("String with \n\
multiple \n\
lines");

//es6 multi-line strings
console.log(`Eafzal
sagor
masum`);