

var ishighlighted = false;

function highlight(){
    var section1 = document.getElementById("fimage")
    var section2 = document.getElementById("f")
    var currentColor1 = section1.style.borderColor;
    var currentColor2 = section2.style.backgroundColor.tos;
    console.log(currentColor1);
    if(!ishighlighted){
        section1.style.borderColor = "#ffffff"
        section2.style.backgroundColor = "#ffffff";
        
        
    } else{
        section1.style.borderColor = "#deb887";
        section2.style.backgroundColor = "#ffe4c4";
        
    }
    ishighlighted = !ishighlighted;
}

