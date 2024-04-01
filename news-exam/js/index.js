let News = JSON.parse(localStorage.getItem("news")) || [];
let userdata =JSON.parse(localStorage.getItem("userdata")) || [];

function createElement(ele, i) {
  console.log(ele);

}
const profile = () => {
  let h1 = document.createElement('h1');
  h1.innerHTML = userdata.name;
  let img = document.createElement('img');
  img.src = userdata.img;
  let country = document.createElement('h6');
  country.innerHTML = userdata.country;

  let div = document.createElement('div');
  div.append(img, h1, country);



  document.getElementById("profiles").append(div)

}

ui(News);

function ui(products) {
  document.getElementById("ui").innerHTML = "";
  products.map((ele, i) => {
    let h1 = document.createElement("h1");
    h1.innerHTML = ele.titel;
    let img = document.createElement("img");
    img.src = ele.img;
    let content = document.createElement("h3");
    content.innerHTML = ele.content;
  
    let country = document.createElement("h6");
    country.innerHTML = ele.country;
  
    let div = document.createElement("div");
    div.append(h1, img, content, country);
   
    document.getElementById("ui").append(div);
  });
}

const Filter = (val) => {
  let temp = News.filter((ele) => ele.country == val);
  ui(temp);
};

const Serach_Filter = (val) => {
  let add_temp = products.filter((ele) => ele.titel.includes(val));
  ui(add_temp);
};
const serach = (e) => {
  e.preventDefault();
  let Serach_Title = document.querySelector("#Search_2").value;
  Serach_Filter(Serach_Title);
};

document
  .querySelector("#india")
  .addEventListener("click", () => Filter("india"));
document
  .querySelector("#australia")
  .addEventListener("click", () => Filter("australia"));
document
  .querySelector("#germany")
  .addEventListener("click", () => Filter("germany"));
document
  .querySelector("#america")
  .addEventListener("click", () => Filter("america"));
// document.querySelector("#serach_1").addEventListener("submit", serach);
