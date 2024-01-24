let num1=10
let num2=15
let num3=20

if(num1>num2 && num1>num3 ){
   document.getElementById('text').innerHTML = `num1 is Largest`
}
else if (num2<num3){
   document.getElementById('text').innerHTML = `num3 is Largest`
}
else{
   document.getElementById('text').innerHTML = `num2 is Largest`
}