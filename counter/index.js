

const show = () =>{
 let count4 = document.querySelector('#count1').innerHTML;
 let count = 0
 let fisrt = setInterval(() =>{
    count++;
       document.querySelector('#count1').innerHTML = count
      if(count4 == count){
        clearInterval(fisrt)
        show1();
      } 
 },1 ) 
}
const show1 = () =>{
    let count5 = document.querySelector('#count2').innerHTML;
    let count = 0
    let second = setInterval(() =>{
       count++;
          document.querySelector('#count2').innerHTML = count
         if(count5 == count){
           clearInterval(second)
           show2();
         } 
    },1) 
   }
   const show2 = () =>{
    let count6 = document.querySelector('#count3').innerHTML;
    let count = 0
    let third = setInterval(() =>{
       count++;
          document.querySelector('#count3').innerHTML = count
         if(count6 == count){
           clearInterval(third)
    
         } 
    },1 ) 
   }
   setTimeout(show)
