function toggleMenu(e) {
    e.stopPropagation()
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

const body = document.body.addEventListener('click', function() {
    document.getElementById("myLinks").style.display = 'none'
})