import postdata from "../API/post.js";
import foot from "../components/footer.js";
import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML= nav()
document.getElementById("footer").innerHTML= foot()



const addproduct =(e)=>{

    e.preventDefault();
    let product ={
        title : document.getElementById("title").value,
        price : document.getElementById("price").value,
        url : document.getElementById("url").value,
        category : document.getElementById("category").value
               
    }
   postdata(product,"https://group-work-1.onrender.com/products")
}






document.getElementById("form2").addEventListener("submit",addproduct);