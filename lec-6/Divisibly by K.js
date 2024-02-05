/*you have to take  two numbers stored in the variable with the following names,

num, K
﻿﻿You have to print all the numbers in the range [1, num], such that for each number, the operation I % K == 0, where I refers to the numbers present in that range
﻿﻿Print each number on a new line
Sample Input 
7 2
Sample Output
2
4
6*/

let num=7;
let k=2;
for(let i=1; i<=num; i++){
    if(i%k==0){
        console.log(i);
    }
}
console.log("\n")
for(let i=1; i<=num; i++){
        console.log(i);
}