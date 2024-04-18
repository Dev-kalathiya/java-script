
const postdata = (data) => {
    fetch("http://localhost:3000/student", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })

}
const Deletedata=(id)=>{
    fetch(`http://localhost:3000/student/${id}`, {
        method: "DELETE",
    //     headers: { "Content-Type": "Application/json" },
    //     body: JSON.stringify(data)
    // })
    //     .then((res) => res.json())
    //     .then((id) => {
    //         display(id)
        })
}
const upadate=(data,id)=>{
    fetch(`http://localhost:3000/student/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => {
            display(data)
        })
}
let id=-1
const updatedata=(ele)=>{
    document.getElementById("name").value=ele.name
    document.getElementById("rollno").value=ele.rollno
    document.getElementById("hindi").value=ele.hindi
    document.getElementById("English").value=ele.English
    document.getElementById("Maths").value=ele.Maths
    document.getElementById("English").value=ele.English
    document.getElementById("gujarati").value=ele.gujarati
    id=ele.id
}
const getdata = () => {
    fetch("http://localhost:3000/student")
        .then((res) => res.json())
        .then((data) => {
            display(data)
        })
}

const display = (data) => {

    document.getElementById("box").innerHTML = ""
    let sum
    data.map((ele, index) => {
        
        let th = document.createElement("td")
        th.innerHTML = index + 1;
        let name = document.createElement("td")
        name.innerHTML = ele.name
        let rollno = document.createElement("td")
        rollno.innerHTML = ele.rollno
        let hindi = document.createElement("td")
        hindi.innerHTML = ele.hindi
        let English = document.createElement("td")
        English.innerHTML = ele.English
        let Maths = document.createElement("td")
        Maths.innerHTML = ele.Maths
        let gujarati = document.createElement("td")
        gujarati.innerHTML = ele.gujarati
        
       
        sum = parseInt(ele.hindi) + parseInt(ele.English) + parseInt(ele.Maths) +parseInt (ele.gujarati)
    
        let score = document.createElement("td")
        score.innerHTML =sum
        let result=document.createElement("td")
        if(sum<250){
            result.innerHTML="Fail"
            result.style.color="red"
        
        }
        else{
            result.innerHTML="pass"
            result.style.color="green"
        }
       
        let btn1=document.createElement("td")
        btn1.innerHTML="update"
        btn1.addEventListener("click",()=>updatedata(ele))
        let btn2=document.createElement("td")
        btn2.innerHTML="Delete"
        btn2.addEventListener("click",()=>Deletedata(ele.id))
        let tr = document.createElement("tr")
        tr.append(th, name, rollno, hindi, English, Maths, gujarati, score,result,btn1,btn2)
        document.getElementById("box").append(tr)
    })
}
  
const student = (e) => {
    e.preventDefault()

    let data = {
        name: document.getElementById("name").value,
        rollno: document.getElementById("rollno").value,
        hindi: document.getElementById("hindi").value,
        English:document.getElementById("English").value,
        Maths:document.getElementById("Maths").value,
        gujarati:document.getElementById("gujarati").value
    }
    // if(data.hindi.length<0){
    //     alert("please enter more then 0")
    //     return
    // }
    if(id!=-1){
        upadate(data,id)
        alert("update sucessful....")
    }
    else{
        postdata(data)
    }
   
}
document.getElementById("data").addEventListener("submit", student)
getdata()