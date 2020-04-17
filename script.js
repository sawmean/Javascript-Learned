//Variable Mutation and Type Coercion
/*
var firstName = 'John';
var age = 27;

//Type Coercion
console.log(firstName + '' + age);


var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old'
+job+'. Is he Married? ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old'
  +job+'. Is he Married? ' + isMarried);

var lastName =prompt('What is his last Name?');
console.log(firstName + '' + lastName);
*/
/*
//Basic operators
var year,yearJohn,yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;
//Math Operators
yearJohn = now -ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical Operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof Operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*
//Operator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiply Operators
var isFullage = now - yearJohn >= fullAge; // true
console.log(isFullage);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/
/*
//// Code Challenge 1 ////
var massJohn,massMark,heightJohn,heightMark,BMIJohn,BMIMark;
massJohn = 70,
massMark = 75,
heightJohn = 1.80,
heightMark = 1.82,
BMIJohn = (massJohn / (heightMark * heightMark)),
BMIMark = massMark / (heightMark * heightMark);

if (BMIMark > BMIJohn){
  console.log('Mark\' BMI is higher than John\'s.');
}else {
  console.log('John\'s BMI higher than Mark\'s');
}

//If Statements
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName +' is married!');
} else{
  console.log(firstName +' is single!');
}

var isMarried = true;
if (isMarried){
  console.log(firstName +' is married!');
} else{
  console.log(firstName +' will hopefully marry soon :)');
}
*/
/*
//Boolean Logic

var firstName = 'John';
var age = 22;
if (age < 13){
  console.log(firstName + ' is a boy.');
}else if(age >= 13  && age < 28){ //Between 13 and 20 === age >= 13 AND age < 20
  console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
  console.log(firstName + ' is a young man.');
} else{
  console.log(firstName + ' is a man.');
}
*/

// The Ternary Operator
/*var firstName = 'John';
var age = 14;

age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/
/* if (age >= 18){
  var drink = 'beer';
} else {
  var drink = 'juice';
}*/


/*// Switch Statement

var job = 'instructor';
switch (job){
  case 'teacher':
  case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
  case 'driver':
    console.log(firstName + ' drives an uber in Boston.');
    break;
  case 'designer':
    console.log (firstName + ' designs beautiful websites.');
    break;
  default:
    console.log(firstName + ' does something else.');
}
age = 22;
switch (true) {
  case age < 13:
    console.log(firstName + ' is a boy.');
    break;
  case age >= 13 && age < 20:
      console.log(firstName + ' is a teenager.');
      break;
  case age >= 20 && age <30:
    console.log(firstName + ' is a young man.');
    break;
  default:
    console.log(firstName + ' is a man.');
}
*/

/*Truthy and Falsy Values and Equality Operators */
// Falsy values: undefined, null, 0, '',NaN
// Truthy Values: NOT Falsy Values
// Ways to check : -
/*var height;

height = 23;

if (height || height === 0){
  console.log('Variable is defined');
} else {
  console.log('Variable has NOT been defined');
}

// Equality Operators
if (height == '23'){
  console.log('The == operator does type coercion!');
}
*/
/*
//Code Challenge 2
var scoreJohn,scoreMike
scoreJohn = (89 + 120 + 103);
scoreMike = (89 + 120 + 103);
scoreMary = (89 + 120 + 103);

var averageJohn = scoreJohn / 3;
  console.log(averageJohn);
var averageMike = scoreMike / 3;
  console.log(averageMike);
var averageMary = scoreMary / 3;
console.log(averageMary);

if (averageJohn > averageMike && averageJohn > averageMary)
{
  console.log('John\'s team wins with ' + averageJohn + ' points');
}
else if (averageMike > averageJohn && averageMary > averageMary){
  console.log('Mike\'s team wins with ' + averageMike + ' points');
} else if (averageMary > averageJohn && averageMary > averageMike){
  console.log('Mary\'s team wins with ' + averageMary + ' points');
}
else {
  console.log('There is a draw');
}
*/

/// Functions
/*
function calculateAge(birthYear) {
  return 2018 - birthYear;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageJane, ageMike);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;

  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years. ');
  } else {
    console.log(firstName + ' is already retired.')
  }
}
  yearsUntilRetirement(1990,'John');

  yearsUntilRetirement(1948,'Mike');

  yearsUntilRetirement(1969,'Jane');

  */

/////**** Function Statements and Expressions****///
///**Function Declaration
//function whatDoYouDo(job, firstName){}
/*
//Function Expression
var whatDoYouDo = function(job, firstName) {
  switch(job){
    case 'teacher':
      return firstName + ' teaches kids how to code';
    case 'driver':
      return firstName + ' drives a cab in Boston.';
    case 'designer':
      return firstName + ' designs beautiful websites';
    default:
      return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));
*/

///**Arrays***///
/*
// Initialize New Array
var names = ['John','Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate Array Data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different Data Types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('desinger') === -1 ?
  'John is Not a designer' : 'John is a desinger';
console.log(isDesigner);
*/

///**Code Challenge 3 **///
/*
function tipCalculator(bill){
  var percentage;
  if (bill < 50) {
    percentage = .2;
  }
    else if ( bill >= 50 && bill < 200){
      percentage = .15
    } else {
      percentage = .1
    }
    return percentage * bill;
}
var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];
console.log(tips, finalValues);
*/

///*** Objects and Properties ***///

// Object Literal
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: 'False'
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

//New Object Syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

///*** Methods ***///
/*
var john = {
  firstName: 'John',
  lastName: 'Smith',
  birthYear: 1992,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: 'False',
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

john.calcAge();
console.log(john);
*/

///*** Code Challenge 4 ***///
/*
var john = {
  fullName: 'John Smith',
  mass: 70,
  height: 1.80,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
  return this.bmi;
  }
}

var mark = {
  fullName: 'Mark Watson',
  mass: 778,
  height: 1.90,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

if (john.calcBMI() > mark.calcBMI()){
  console.log(john.fullName + ' has a higher BMI of '+ john.bmi);
  }
else if (mark.bmi > john.bmi){
  console.log(mark.fullName + ' has a higher BMI of '+ mark.bmi);
  } else {
  console.log('They have the same BMI');
}
*/

///***Loops and Iteration***///
/*
for (var i = 1; i <= 20; i += 2){
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//..
//i = 9, 9 < 10 true, log i to the console, i++
//i = 10,10 < 10 false, log i to the console, i ++

var john = ['John', 'Smith', 1990, 'designer', false];
for (var i = 0; i < john.length; i++){
  console.log(john[i]);
  }

//While Loop
var i = 0;
while (i < john.lenght){
  console.log(john[i]);
  i++;
}
*/
/*
//// Continue and Break Statments
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++){
  if(typeof john[i] !== 'string') continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
  if(typeof john[i] !== 'string') break;
  console.log(john[i]);
}

// Looping Backwards
for (var i = john.length - 1; i >= 0; i--){
  console.log(john[1]);
}
*/

///***Coding Challenge for Basic One***///
var john = {
  fullName: 'John Smith',
  bill: [124, 48, 268, 180, 42],
  calcTips: function() {
  this.tips = [];
  this.finalValues = [];

    for (var i = 0; i < this.bill.length; i++)
    {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bill[i];
      if (bill< 50) {
        percentage = .2;
      }
      else if ( bill >= 50 && bill < 200){
        percentage = .15
      } else {
        percentage = .1
      }
      // Add results to the corresping arrays
    this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}
var mark = {
  fullName: 'Mark Miller',
  bill: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bill.length; i++)
    {
      // Determine percentage based on tipping rules
      var percentage;
      var bill = this.bill[i];
      if (bill< 100) {
        percentage = .2;
      }
      else if ( bill >= 100 && bill < 300){
        percentage = .1;
      } else {
        percentage = .25;
      }
      // Add results to the corresping arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  }
}

function calcAverage(tips){
  var sum = 0;
  for (var i = 0; i < tips.length; i++){
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
//Results: {2, 6, 4} -> 0 / 2 / 8 / 12

//Do the Calculations
john.calcTips();
mark.calcTips()

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john,mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'has more average tips of :' + john.average);
} else if (mark.average > john.average){
  console.log(mark.fullName + '\'has more average tips of :'+ mark.average);

}
