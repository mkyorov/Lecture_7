let num = 0;

for (var i = 1; i <= 100; i++) {
    num = i*i;
    if (num >= 12) {
        break;
    }
    console.log(num);
}
