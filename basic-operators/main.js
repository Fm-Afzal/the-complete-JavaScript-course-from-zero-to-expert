const now = 2025;
const ageAfzal = now - 2000;
const sagor = now - 2009;

console.log(ageAfzal, sagor);

console.log(ageAfzal * 2, ageAfzal / 2, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Afzal';
const lastName = 'Bare';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);


// Comparison operators
console.log(ageAfzal > sagor); // >, <, >=, <=
console.log(ageAfzal <=18);

const isFullAge = ageAfzal >= 18;
console.log(now-1991 > now-2018);