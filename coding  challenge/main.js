/*  

1. Store Mark's and John's mass and height in
variables

2. Calculate both their BMIs using the formula (you
can even implement both versions)

3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a
higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.
GOOD LUCK

*/


const massMark = 78; // in kg
const heightMark = 1.69; // in meters
const massJohn = 92; // in kg
const heightJohn = 1.95; // in meters

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);  