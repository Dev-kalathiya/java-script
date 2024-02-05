/*You  have to take an input number, stored in a variable with the name num

Find the sum of all even numbers greater than zero and less than or equal to the value stored in the num
For example, if the value stored in num = 5, then all the even numbers smaller than or equal to 5, and greater than zero are
2
4
Therefore, the sum becomes, sum = 2 + 4 = 6, which is the required output

Sample Input 
6
Sample Output
12
In the sample test case, the value stored in num = 6

even num 2,4,6
sum=2+4+6=12*/ 


let num=prompt("Enter a number");
let sum=0;
for (let i=0; i<=num; i++){
    if(i>=0 && i<=num){
        if(i%2==0){
            sum+=i
            console.log(`Even Number is:- ${i}`)
        }
    }
}
console.log("sum:-",sum)


