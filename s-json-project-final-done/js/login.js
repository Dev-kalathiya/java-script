import foot from "../components/footer.js";
import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML = nav()
document.getElementById("footer").innerHTML= foot()

const isvalid =(email,password) => {

    fetch(`http://localhost:3000/users?email=${email}&password=${password}`)

       .then(res => res.json())
    .then(data => {

   if(data.length ==1)
   {
    alert("login success")
   }
   else{
    alert("login failed")
   }
    })
   
}


const loginUser = (e) => {
    e.preventDefault();

    // Retrieve form input values
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
     isvalid(email,password);
}

    
    

document.getElementById('form').addEventListener('submit', loginUser);

