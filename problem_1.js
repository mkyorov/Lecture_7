let num = 3456789;
let count = 0;
let sum = 0;
let multi = 1;
let avg = 0;
let currNum = 0;

while (num != 0) {
    currNum = num % 10;
    num = num / 10 | 0;
    sum += currNum;
    multi *= currNum;
    count++;
}

avg = sum/count;

console.log(`The number of digits is ${count}\nThe sum is ${sum}\nThe multiplication is ${multi}\nThe avarage value is ${avg}`);
