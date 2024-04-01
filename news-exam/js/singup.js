let user = [];
const singupuser = (e) => {
  e.preventDefault();
  let data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    country: document.getElementById("country").value,
    url: document.getElementById("url").value,
    password: document.getElementById("password").value,
  };

  if (
    data.name.length == 0 ||
    data.name == null ||
    data.email.length == 0 ||
    data.email == null ||
    data.password.length == 0 ||
    data.password == null
  ) {
    alert("you have input your data");
  } 
  
  else {
    alert("sing up user");
  }

  user.push(data);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "/index.html"
};

document.getElementById("singup").addEventListener("submit", singupuser);
