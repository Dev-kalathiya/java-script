let N=800

if(N<10){
   document.getElementById('text').innerHTML = `Your Friend is at 1km`
}
else if( N >= 10 && N <=49){
   document.getElementById('text').innerHTML = `Your Friend is at 10km`
}
else if(N >= 50 && N <=99 ){
   document.getElementById('text').innerHTML = `Your Friend is at 50km`
}
else if(N >= 100){
   document.getElementById('text').innerHTML = `Your Friend is at 100km`
}