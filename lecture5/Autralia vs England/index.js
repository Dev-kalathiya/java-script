let England =500;
let Australia =400;

if (Australia > England){
   document.getElementById('text').innerHTML = `Australia Win`
}

else if (England > Australia ){

   document.getElementById('text').innerHTML = `England Win`
   
}
else{
   document.getElementById('text').innerHTML = `Draw`
}