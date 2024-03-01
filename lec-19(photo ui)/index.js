let products = []

const uiMaker = () => {
    document.getElementById("box").innerHTML = ""
    products.map((ele,i) => {
        let title = document.createElement("h3")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("p")
        price.innerHTML = ele.price
        let div = document.createElement("div")

        let btn=document.createElement("button")
        btn.innerHTML ="Delete"
        div.append(img, title, price,btn)



// delete 

btn.addEventListener("click", () => {
   products.splice(i,1)

   console.log(products);
   uiMaker()

})




        console.log(div);
        title.setAttribute("class", "title")
        document.getElementById("box").append(div)
    })
}


const handleSubmit = (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let img = document.getElementById('img').value;
    let price = document.getElementById('price').value;


    let product = {
        title: title,
        img: img,
        price: price
    }

    products.push(product);
    uiMaker()
}


document.getElementById("form").addEventListener("submit", handleSubmit);