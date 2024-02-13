document.getElementById('convert').addEventListener('click', function convert() {
    let aa = document.getElementById('inp').value
    let up = aa.toUpperCase()
    console.log(up);
    document.getElementById('ans').innerHTML = up

})