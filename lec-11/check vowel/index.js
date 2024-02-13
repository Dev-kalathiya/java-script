document.getElementById('count').addEventListener('click', function count() {
    let a = document.getElementById('cv').value
    let count = 0;
    let n = a.length
    for (let j = 0; j < n; j++) {
        if (a[j] == 'a' || a[j] == 'A' || a[j] == 'O' || a[j] == 'o' || a[j] == 'u' || a[j] == 'U' || a[j] == 'i' || a[j] == 'I' || a[j] == 'e' || a[j] == 'E') {
            count++
        }
    }
    if (count <= 0) {
        document.getElementById('ans').innerHTML = False
    }
    else {
        document.getElementById('ans').innerHTML = True
    }

})