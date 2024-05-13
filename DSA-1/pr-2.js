
// sliding window and finding the minimum
let arr =[2,5,3,8,4];
 k = 3;

 const sliding_window =(arr,k) => {
    let currmax = 0;
    let max = 0;

    for (let i = 0 ; i < k; i++) {
        currmax += arr[i]
    }

    max = currmax;

    for (let i = k; i < arr.length; i++){
        currmax += arr[i] - arr[k - i];
       

        if (currmax < max){
            max= currmax;
        }
    }

    return max;
    

 }

 let ret = sliding_window(arr,k);

 console.log(ret);

