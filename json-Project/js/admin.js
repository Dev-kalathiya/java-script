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
    Post("https://group-work-1.onrender.com/products", data)
}


document.getElementById("form").addEventListener("submit", handleData)