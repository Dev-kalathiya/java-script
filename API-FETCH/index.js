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
    
       let cards=document.createElement("div")
       cards.innerHTML=cards.innerHTML
       cards.setAttribute("id", "cards")

        cards.append(title,images,price)
        document.getElementById("box").append(cards)
    
    })
    }
    
    
    // fetch("https://dummyjson.com/products")
    // .then((res)=>res.json())
    // .then((data)=>uimaker(data.products));
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => uimaker(data.products))