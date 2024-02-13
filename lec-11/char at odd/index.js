document.getElementById('give').addEventListener('click', function give() {
    let a = document.getElementById('inp').value

    for (let i = 0; i < a.length; i++) {

        if (i % 2 != 0) {
            console.log(a[i]);
        }
    }
    console.log(a[0]);
})

