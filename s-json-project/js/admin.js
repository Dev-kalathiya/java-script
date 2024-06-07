import postdata from "../API/post.js";
import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML= nav()



const addproduct =(e)=>{

    e.preventDefault();
    let product ={
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        url : document.getElementById("url").value,
        category : document.getElementById("category").value
               
    }
   postdata(product,"http://localhost:3000/products")
}






document.getElementById("form2").addEventListener("submit",addproduct);