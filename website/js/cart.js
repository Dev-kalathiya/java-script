let cart = JSON.parse(localStorage.getItem("cart")) || []

const handleQty = (opr, index) => {
    if (opr == "+") {
        cart[index].qty += 1
    }
    else {

        if (cart[index].qty == 1) {
            cart.splice(index, 1)
        }
        else {
            cart[index].qty -= 1
        }
    }
    objectMapper(cart)
    localStorage.setItem("cart", JSON.stringify(cart))
}

let sum = 0
const objectMapper = (data) => {

    sum = 0
    document.getElementById("box").innerHTML = ""
    data.map((ele, index) => {

        sum += ele.price * ele.qty
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

        btn1.addEventListener("click", () => handleQty("-", index))

        btn3.addEventListener("click", () => handleQty("+", index))
    })

    let btn = document.createElement("button")
    btn.innerHTML = sum
    let div = document.createElement("div")

    div.setAttribute("id","codebox")

    let btn2 = document.createElement("button")
    btn2.innerHTML = "Checkout"

    btn2.addEventListener("click", () => {
        localStorage.removeItem("cart")
        objectMapper([])
    })

    btn.setAttribute("class", "btn btn-dark")
    btn2.setAttribute("class", "btn btn-success")
    document.getElementById("box").append(btn,div, btn2)
}
objectMapper(cart)





document.getElementById("code").addEventListener("submit",(e)=>{
 e.preventDefault()

 let val=document.getElementById("code-val").value
    console.log(val);
})



