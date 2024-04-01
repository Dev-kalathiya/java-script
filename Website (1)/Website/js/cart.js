let cart = JSON.parse(localStorage.getItem("cart")) || []

const handleQty=(opr,index)=>{

console.log(opr,index);
}


const objectMapper = (data) => {
    document.getElementById("box").innerHTML = ""
    data.map((ele,index) => {
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let btn1 = document.createElement("button")
        btn1.innerHTML = "-"
        let btn2 = document.createElement("button")
        btn2.innerHTML = ele.qty
        let btn3 = document.createElement("button")
        btn3.innerHTML = "+"
        btn1.setAttribute("class", "btn btn-danger")
        btn2.setAttribute("class", "btn btn-info")
        btn3.setAttribute("class", "btn btn-success")
        let div = document.createElement("div")
        div.append(img, title, price, btn1, btn2, btn3)
        document.getElementById("box").append(div)

   btn1.addEventListener("click",()=>handleQty("-",index))
       
   btn3.addEventListener("click",()=>handleQty("+",index))



    })

}
objectMapper(cart)



