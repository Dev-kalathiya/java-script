let count = localStorage.getItem("count") || 0;
document.querySelector("#count").innerHTML = count;

let counter = () => {
  count++;
  document.querySelector("#count").innerHTML = count;
  localStorage.setItem("count", count);
};

document.querySelector("#btn").addEventListener("click", counter);

let like = document.querySelector("#btn");

like.addEventListener("click", () => {
  alert("You have successfully Like");
});

let count2 = localStorage.getItem("count2") || 0;
document.querySelector("#count2").innerHTML = count2;

let counter2 = () => {
  count2++;
  document.querySelector("#count2").innerHTML = count2;
  localStorage.setItem("count2", count2);
};

document.querySelector("#btn2").addEventListener("click", counter2);

let count3 = localStorage.getItem("count3") || 0;
document.querySelector("#count3").innerHTML = count3;

let counter3 = () => {
  count3++;
  document.querySelector("#count3").innerHTML = count3;
  localStorage.setItem("count3", count3);
};

document.querySelector("#btn3").addEventListener("click", counter3);

let count4 = localStorage.getItem("count4") || 0;
document.querySelector("#count4").innerHTML = count4;

let counter4 = () => {
  count4++;
  document.querySelector("#count4").innerHTML = count4;
  localStorage.setItem("count4", count4);
};

document.querySelector("#btn4").addEventListener("click", counter4);

let subscribe = document.querySelector("#btn4");

subscribe.addEventListener("click", () => {
  alert("You have successfully Subscribe");
});
