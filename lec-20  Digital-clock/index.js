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
    minutes = (minutes < 10) ? "0" + minutes: minutes;
    seconds= (seconds < 10) ? "" + seconds : seconds;
    
  
    const date = now.toDateString();
    const year = now.getFullYear();

    

    let clockText = `${hours}:${minutes}:${seconds} ${session} | ${date}`;
    document.getElementById('digital-clock').textContent = clockText;

}


setInterval(updateTime, 1000);
updateTime(); 