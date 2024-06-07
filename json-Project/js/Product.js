import GetData from "../Api/Get.js";
import uiMaker from "../components/UiMaker.js";
import NavBar from "../components/navBar.js";
document.getElementById("navbar").innerHTML=NavBar()

const get=async()=>{
    let data=await GetData("https://group-work-1.onrender.com/products")
    uiMaker(data,"container")
} 
get()

