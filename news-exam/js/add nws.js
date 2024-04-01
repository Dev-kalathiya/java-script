let News = JSON.parse(localStorage.getItem("news")) || []

const wow = (e) => {

    e.preventDefault()

    let news = {
        titel : document.getElementById("titel").value,
        img:document.getElementById("img").value,
        content: document.getElementById("content").value,
        country: document.getElementById("country").value
    }
    News.push(news);
    localStorage.setItem("news", JSON.stringify(News))
     window.location.href = "/index.html"

}




document.getElementById("form").addEventListener("submit", wow)