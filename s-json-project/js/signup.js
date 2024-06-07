import postdata from "../API/post.js";
import nav from "../components/navbar.js";

console.log(nav());
document.getElementById("navbar").innerHTML= nav()

const isexist = (data) => {
  //check email 
    fetch(`http://localhost:3000/users?email=${data.email}`)
        .then((response) => response.json())
        .then((response) => {
            if (response.length == 1) {
                alert("user already exist")
            }
            else {
              
                postdata(data, "http://localhost:3000/users")
            }
        });
}

const form = (e) => {
    e.preventDefault();

    // Regular expressions for email and password validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    // Retrieve form input values
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('mail').value;
    let password = document.getElementById('password').value;

    // Check if email and password match the regex patterns
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number.");
        return;
    }

    // If validation passes, proceed with further checks
    let data = {
        Name: name,
        Number: number,
        email: email,
        password: password
    }

    isexist(data);
}

document.getElementById('form').addEventListener('submit', form);




// const form = (e) => {

//     e.preventDefault();

// //apend data
//     let data = {
//         Name: document.getElementById('name').value,
//         Number: document.getElementById('number').value,
//         email: document.getElementById('mail').value,
//         password: document.getElementById('password').value

//     }
//     // postdata(data,"http://localhost:3000/users")
//     isexist(data)

// }

// document.getElementById('form').addEventListener('submit', form)