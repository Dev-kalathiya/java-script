import Post from "../Api/post.js";
import NavBar from "../components/navBar.js";
document.getElementById("navbar").innerHTML = NavBar()




const handleData = (e) => {
    e.preventDefault();
    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("url").value,
        category: document.getElementById("Category").value
    }
    Post("http://localhost:3000/products", data)
}


document.getElementById("form").addEventListener("submit", handleData)