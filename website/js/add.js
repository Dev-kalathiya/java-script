let data =JSON.parse(localStorage.getItem("user"))|| []


const product=(e)=> {
    e.preventDefault();

    let name ={
        username :document.getElementById("username").value,
        img :document.getElementById("img").value,
        password :document.getElementById("password").value

    }
    
    data.push(name)
    localStorage.setItem("user",JSON.stringify(data))
    // window.location.href="/index.html"
}
 document.getElementById("signup").addEventListener("click", product)