class calculator{

    constructor (a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        console.log(this.a+this.b);
    }
    sum(){
        console.log(this.a+this.b);
    }
    multi(){
        console.log(this.a*this.b);
    }
    divide(){
        console.log(this.a/this.b);
    }
    
   
}
class Calc2 extends calculator {

    constructor (a,b,c){
       super (a,b);
       this.c = c;
    }
    add(){
        console.log(this.a+this.b+this.c);
    }
    sum(){
        console.log(this.a+this.b+this.c);
    }
    multi(){
        console.log(this.a*this.b*this.c);
    }
    divide(){
        console.log(this.a/this.b/this.c);
    }
    
   
}

let add = new Calc2(5,2,2);
let sum = new Calc2(5,2,2);
let multi = new Calc2(5,4,2);
let divide = new Calc2(5,5,2);
add.add()
sum.sum()
multi.multi()
divide.divide()






 
