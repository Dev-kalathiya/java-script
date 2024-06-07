let user = JSON.parse(localStorage.getItem("user")) || [];

const Login = (e) => {

    e.preventDefault();

   let Email = document.querySelector("#email").value;
   let Password = document.querySelector("#password").value;


    let user_1 = user.filter((ele)=>ele.email==Email && ele.password==Password )
    localStorage.setItem("userdata", JSON.stringify(user_1));



    if(user_1.length==1)
    {
        alert("log in ")
     
    }
    else
    {

        return
    }


  window.location.href="/index.html"  
}




document.querySelector("#login").addEventListener("submit",Login);