
let datas = []
let Del=0;
let target;
let n = datas.length;

const cal= (e) => {
    let DELETE=e.target.parentNode.rowIndex;
    DELETE=DELETE-1;
    datas.splice(DELETE,1)
    e.target.parentNode.remove();
    
  
}
document.getElementById('dl_alll').innerHTML(' ');
const sub = (e) => {
    
    e.preventDefault();
    
    let count=1;


    let Name = document.getElementById('name').value;
    let Role = document.getElementById('role').value;
    let Depart = document.getElementById('depart').value;
    let Salary = parseInt(document.getElementById('salary').value);
    let Exp = parseInt(document.getElementById('exp').value);
    let Email = document.getElementById('email').value;
    let Role_Type;
    
    if(Name==""){
        alert('Please Enter Name properly')
    }
    else if(Role==0){
        alert('Please Enter Job Role properly')
    }
    else if(Depart==0){
        alert('Please Enter Department properly')
    } 
    else if(Salary==""){
        alert('Please Enter Salary properly')
    } 
    else if(Exp==""){
        alert('Please Enter Experience properly')
    } 
    else if(Email==""){
        alert('Please Enter Email properly')
    }  
    else{
    if (Exp > 5) {
        Role_Type = "Senior"
    }
    else {
        Role_Type = "Junior"
    }


    let tr = document.createElement('tr');
    tr.setAttribute('id', Del);
    let td1 = document.createElement('td');
    td1.innerHTML = Name;
    let td2 = document.createElement('td');
    td2.innerHTML = Role;
    let td3 = document.createElement('td');
    td3.innerHTML = Depart;
    let td4 = document.createElement('td');
    td4.innerHTML = Salary;
    let td5 = document.createElement('td');
    td5.innerHTML = Exp;
    let td6 = document.createElement('td');
    td6.innerHTML = Role_Type;
    let td7 = document.createElement('td');
    td7.innerHTML = Email;
    let td8 = document.createElement('td');
    td8.innerHTML = "Delete";
    td8.classList.add('table-dta-8');
    td8.addEventListener("click", cal);
    td8.addEventListener("click", dis)

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    let data = {
        Name: Name,
        Role: Role,
        Depart: Depart,
        Salary: Salary,
        Exp: Exp,
        Email: Email,
    }

    datas.push(data);
    Del=Del+1;
    document.getElementById('tb-main').append(tr);

}
    
};

const dis = () => {
    let t_salary = 0;
    let n = datas.length;
    for (let i = 0; i < n; i++) {
        t_salary += datas[i].Salary
    }
    document.getElementById('temp').innerHTML = `Total:- ${n}`;
    document.getElementById('tsal').innerHTML = `Total:- ${t_salary}`;
    console.log(datas);
}
document.getElementById('dl_alll').addEventListener('click',(e)=>{
    document.getElementById('tb-main').innerHTML="";
    datas= [];
   
})
document.getElementById('dl_alll').addEventListener('click',dis);

document.getElementById('card-body').addEventListener('submit', sub);
document.getElementById('card-body').addEventListener('submit', dis);


console.log("4e5ryvgujkl;");