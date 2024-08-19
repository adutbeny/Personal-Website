let bar = document.getElementById("options");
bar.style.maxHeight = "0px";

function toggleBar() {
    if (bar.style.maxHeight == "0px"){
        bar.style.maxHeight = "300px"
    }
    else{
        bar.style.maxHeight = "0px"
    }
}

