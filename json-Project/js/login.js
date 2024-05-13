import NavBar from "../components/navBar.js";
document.getElementById("navbar").innerHTML = NavBar()
const isExists = (user) => {

    try {
        fetch(`http://localhost:3000/users?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {

                if (data.length == 0) {
                    alert("user not found")

                }
                else {
                    alert("User exists check your password")
                }
            })
    } catch (error) {
        console.log(error);
    }

    return flag;
}
const isValid = (user) => {

    fetch(`http://localhost:3000/users?email=${user.email}&password=${user.password}`)
        .then((res) => res.json())
        .then((data) => {
            if (data.length == 1) {
                alert("logged in successfully ")
            }
            else {
                isExists(user)
            }
        })
}
const handleUser = (e) => {
    e.preventDefault()
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }


    isValid(user)
}
document.getElementById("user").addEventListener("submit", handleUser)