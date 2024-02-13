document.getElementById('give').addEventListener('click', function give() {
    let a = document.getElementById('inp').value
    let n = a.length
    for (let i = n - 1; i >= 0; i--) {
        console.log(a[i]);
    }
})