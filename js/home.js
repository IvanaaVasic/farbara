var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

carousel();


var myIndex2 = 0;
carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("newSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex2++;
    if (myIndex2 > x.length) {
        myIndex2 = 1
    }
    x[myIndex2 - 1].style.display = "block";
    setTimeout(carousel2, 2000); // Change image every 2 seconds
}