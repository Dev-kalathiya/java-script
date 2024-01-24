let num1 =5;
let num2 =7;

if (num1 > num2){
   document.getElementById('text').innerHTML = `num1 is Greater`
}

else if (num2 > num1 ){

   document.getElementById('text').innerHTML = `num2 is Greater`
   
}
else{
   document.getElementById('text').innerHTML = `Same`
}