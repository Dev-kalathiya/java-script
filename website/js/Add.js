let product = JSON.parse(localStorage.getItem("products")) || []


const handleProduct = (e) => {
    e.preventDefault()

    let data = {

        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,

    }
    product.push(data)
    localStorage.setItem("products", JSON.stringify(product))
    window.location.href = "/index.html"

}

document.getElementById("product").addEventListener("submit", handleProduct)





