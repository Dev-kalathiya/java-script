import GetData from "../Api/Get.js";
import uiMaker from "../components/UiMaker.js";
import NavBar from "../components/navBar.js";
document.getElementById("navbar").innerHTML=NavBar()

const get=async()=>{
    let data=await GetData("http://localhost:3000/products")
    uiMaker(data,"container")
} 
get()

