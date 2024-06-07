import postdata from "../API/post.js";
import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML = nav()

const buy = (e)=>{

    postdata(e,"http://localhost:3000/cart")


}
const adddata = (data) => {

    data.map((ele) => {

        let title = document.createElement("h1");
        title.innerHTML = ele.title;

        let img = document.createElement("img");
        img.src = ele.url;

        let price = document.createElement("h2");
        price.innerHTML = ele.price;

        let category = document.createElement("div");
        category.innerHTML = ele.category;

        let buynow = document.createElement("button");
        buynow.innerHTML = "Buy Now";
        buynow.addEventListener ("click", () => {
            ele.quy = 1
            buy(ele)

        })

        let div = document.createElement("div");
        div.append(img, title, price, category, buynow);
        div.setAttribute("class", "box")
        document.getElementById("products").append(div);
    })



}





const data = () => {
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(data => adddata(data))


}

data()