let sum = 0;
let finalSum = 0;

for (var i = 1; i < 1000; i++) {
    if (i % 3 == 0){
        sum += i;
        if (sum >= 150) {
            sum -= i;
            break;
        }
    }
}
console.log(sum);
