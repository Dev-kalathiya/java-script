function updateTime() {
    let now = new Date();

    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let  seconds = now.getSeconds().toString().padStart(2, '0');
    let  session = "AM";
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours=hours- 12;
        session = "PM";
    }
    
    hours = ( hours< 10) ? "0" + hours : hours;
   
  
  
    const date = now.toDateString();
    const year = now.getFullYear();

    let h2=document.createElement("p");
    h2.innerHTML =date;

    let clockText = `${hours}:${minutes}:${seconds} ${session} `;
    document.getElementById('digital-clock').textContent = clockText;

    document.getElementById('digital-clock').append(h2)

}


setInterval(updateTime, 1000);
updateTime(); 