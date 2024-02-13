document.getElementById('give').addEventListener('click', function give() {
    let a = document.getElementById('inp').value
    let n = a.length
    for (let i = 0; i <n; i++) {
            console.log(a[i]);
    }
})