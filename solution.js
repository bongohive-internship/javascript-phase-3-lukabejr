// solutions to the exercises mentioned in the readme should be in this file.

//1st part solution for function to find the larger number of two numbers

function largestNumber(a, b) {
	if(a > b)
		return a;
	else if(a === b)
		return 0;
	else
		return b;
}
var firstNumber = 10;
var secondNumber = 50;

console.log("The larger number is " + largestNumber(firstNumber, secondNumber));

//2nd part for loop
for (var x = 0; x <= 15; x++) {
    if (x % 2 === 0) {
        console.log(x + ' is even');
    } else {
        console.log(x + ' is odd');
    }
}
//3rd part Sum of the Multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log("The sum of the multiples of 3 and 5 under 1000 is " + sum);

//4th part assignGrade function

function assignGrade(score) {
    if (score > 90 && score <=100) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('You got a ' + assignGrade(70));
console.log('You got a ' + assignGrade(15));
console.log('You got a ' + assignGrade(89));
console.log('You got a ' + assignGrade(67));

// 5th part Grade point range

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'F';
    }
}

for (var x = 80; x <= 100; x++) {
  console.log('For ' + x + ', you got a ' + assignGrade(x));
}
