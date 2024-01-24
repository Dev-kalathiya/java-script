alert (error)
let distance=100
let time =2

let speed=distance/time




if(speed>40){
   document.getElementById('text').innerHTML=`Apply Brake`
}
else{
   console.log(speed)
   document.getElementById('text').innerHTML=`Keep going`
}