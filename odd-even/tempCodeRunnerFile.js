let odd = 0;

for (let [key, val] of map){

    if(val %2!=0){
        odd++;
    }
}


if (odd === 0 || odd == 1){

    console.log(">>>>>> : palindrom can be possible : <<<<<<< ")

}
else {
    console.log(">>>>>>> : palindro can not be piossible : <<<<<<< ")
}