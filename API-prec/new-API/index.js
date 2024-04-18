const getWeather = async (city) => {
    let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=ef1d242ce06199f4deaab11400f26247&units=matric&q=${city}`)
    let data = await res.json()
}

console.log(getWeather);

const handleData = (e) => {

    e.preventDefault()
 
    let cityName = document.getElementById("search").value
    getWeather(cityName)
}

`   <div id="box">
    
</div>`




document.getElementById("form").addEventListener("submit" , handleData)

