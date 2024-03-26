

const uimaker=(data)=>{

data.map((ele)=>{
    let title=document.createElement("p")
    title.innerHTML=ele.title
    title.setAttribute("id", "title")
    let price=document.createElement("p")
    price.innerHTML=ele.price
    price.setAttribute("id", "price")
    let images=document.createElement("img")
   images.src = ele.thumbnail
   images.setAttribute("id", "img")

   let card=document.createElement("div")
   card.innerHTML=card.innerHTML
   card.setAttribute("id", "card")
    card.append(title,images,price)
    document.getElementById("box").append(card)
    
})
}



// fetch("https://dummyjson.com/products")
// .then((res)=>res.json())
// .then((data)=>uimaker(data.products));
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => uimaker(data.products))