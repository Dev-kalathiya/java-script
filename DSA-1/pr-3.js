

//prime number
let Tarray = [];
let row = [];
let array = [[1,2,3],
            [4,5,6],
            [7,8,9]];


for (let i = 0; i < array.length; i++) {
    row.push(array[i]);
    if ((i + 1) % 3 === 0) {
        Tarray.push(row);
        row = [];
    }
}

let primeTarray = array.map(row => row.filter(isPrime));

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
iot
console.log(primeTarray);