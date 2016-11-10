let number = 12345768997;
let currNum = 0;
let mirror = 0;

while (number != 0) {
    currNum = number % 10;
    number = number /10 | 0;
    mirror = mirror*10 + currNum;
}

console.log(mirror);
