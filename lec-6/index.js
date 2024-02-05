 
 let a=5 
let odd=0
let even=0


for(let i=1; i<=5; i++) {

    if(i%2==0) {
        console.log(i + " number is even")
        even+=i;
    }
    else {
        console.log(i + " number is odd")
        odd+=i;
    }

}
console.log ( "Even :- ", even)
console.log ( "Odd :- ", odd)
 if(even> odd){
    console.log ( "EVEN IS GREATER THAN ODD")
 }

 else{
    console.log ( "ODD IS GREATER THAN EVEN")
 }