class calculator{

    constructor (a,b){
        this.a=a;
        this.b=b;
        this.result = result;
    }
    setClearResult(){
        console.clear();
    }
    GetResult(){
        this.setClearResult();
        console.log(this.result);
    }
    add(){
        this.result = this.a + this.b;
        console.log(this.a+this.b);
        this.GetResult();
    }
    sub(){
        this.result = this.a - this.b;
        console.log(this.a-this.b);
        this.GetResult();
    }
    multi(){
        this.result = this.a * this.b;
        console.log(this.a*this.b);
        this.GetResult();
    }
    divide(){
        this.result = this.a / this.b;
        console.log(this.a/this.b);
        this.GetResult();
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

class calc3 extends Calc2{
    constructor (a ){
        super (a[0],a[1],a[2],result)
        this.a = a;
    };
    add(){
        for(let i=0 ; i<this.a.length;i++){
    }
}
}

let add = new calculator(5,2,2);
let sum = new calculator(5,2,);
let multi = new calculator(5,4,2);
let divide = new calculator(5,10,3);
add.add()
sum.sum()
multi.multi()
divide.divide()


