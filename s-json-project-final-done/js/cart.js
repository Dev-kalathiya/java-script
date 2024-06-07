import foot from "../components/footer.js";
import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML = nav();
document.getElementById("footer").innerHTML= foot();




const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
        deleteItem(id); // Remove the item if the new quantity is less than 1
        return;
    }
    fetch(`https://group-work-1.onrender.com/cart/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ quy: newQuantity })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
       
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
}




const deleteItem = (id) => {
    fetch(`https://group-work-1.onrender.com/cart/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
}


const adddata= (res)=>{
  console.log(res);
    res.map ((ele)=>{
      
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.src = ele.url;
         td1.append(img);
         let td2 = document.createElement("td");
         td2.innerHTML = ele.title;

         let increaseBtn = document.createElement("button");
         increaseBtn.innerHTML = "+";

         increaseBtn.addEventListener("click", () => updateQuantity(ele.id, ele.quy + 1));
 
         let decreaseBtn = document.createElement("button");
         decreaseBtn.innerHTML = "-";
         decreaseBtn.addEventListener("click", () => updateQuantity(ele.id, ele.quy- 1));
 
         let td3 = document.createElement("td");
         td3.append(increaseBtn, ele.quy, decreaseBtn); // Assuming ele.quantity is the current quantity

        let td4 = document.createElement("td");
         td4.innerHTML = ele.price*ele.quy;

         let deleteBtn = document.createElement("button");
         deleteBtn.innerHTML = "Delete";
         deleteBtn.addEventListener("click", () => deleteItem(ele.id)); // Call deleteItem function on click
 
         let td5 = document.createElement("td");
         td5.appendChild(deleteBtn);
        

         let tr =document.createElement("tr")
         tr.append(td1,td2,td3,td4,td5)

         document.getElementById("productList").append(tr)

         console.log(tr);
    })

}





const data = () => {
    fetch('https://group-work-1.onrender.com/cart')
        .then(res => res.json())
        .then(data => adddata(data))


}

data()


document.getElementById("none").style.display = "none"