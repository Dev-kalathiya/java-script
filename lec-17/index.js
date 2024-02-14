const handlesubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let grid = document.getElementById("grid").value;
    let number = document.getElementById("number").value;
    let course = document.getElementById("course").value;
    let Delete = document.getElementById("course").value;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;
    let td2 = document.createElement("td");
    td2.innerHTML = grid;
    let td3 = document.createElement("td");
    td3.innerHTML = number;
    let td4 = document.createElement("td");
    td4.innerHTML = course;


    let td5 = document.createElement("td");
    td5.innerHTML = "Delete";

    td5.addEventListener("click", (e) => {
        e.targate.parentNode.remove();
    });

    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("tbody").append(tr);
};

document.getElementById("form").addEventListener("submit", handlesubmit);

document.getElementById("del").addEventListener("click", () => {
    document.getElementById("tbody").innerHTML = "";
    document.getElementById("del").addEventListener("click", () => {
    });
    document.getElementById("tbody").innerHTML = ""
});
