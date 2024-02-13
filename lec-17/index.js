const handlesubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let grid = document.getElementById("grid").value;
    let number = document.getElementById("number").value;
    let course = document.getElementById("course").value;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;
    let td2 = document.createElement("td");
    td2.innerHTML = grid;
    let td3 = document.createElement("td");
    td3.innerHTML = number;
    let td4 = document.createElement("td");
    td4.innerHTML = course;
    tr.append(td1, td2, td3, td4);
    document.getElementById("tbody").append(tr);
};

document.getElementById("form").addEventListener("submit", handlesubmit);
