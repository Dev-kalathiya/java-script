import Post from "../Api/post.js";
import NavBar from "../components/navBar.js";

document.getElementById("navbar").innerHTML = NavBar()


// check user exists 

const isExists = (user) => {
    try {
        fetch(`http://localhost:3000/users?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {

                if (data.length == 0) {
                    Post("http://localhost:3000/users", user)
        
                }
                else {
                    alert("User already exists")
                }
            })
    } catch (error) {
        console.log(error);
    }
}
    

const handleUser = (e) => {
    e.preventDefault()
    let user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }


    isExists(user)
}


document.getElementById("user").addEventListener("submit", handleUser)

