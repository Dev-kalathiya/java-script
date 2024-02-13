let arr=[1,2,3,4,5,6,7,8,]

let result =[];
console.log(arr);
arr.map((ele,i)=>{
    if (ele % 2 == 0){
       
        result.push(ele);
        }
})

console.log(result);


