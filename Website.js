//Navigation bar code
let NavList = document.querySelector(".options");
NavList.style.maxHeight = "0px";
function toggleBar() {
    if (NavList.style.maxHeight == "0px"){
        NavList.style.maxHeight = "300px"
    }
    else{
        NavList.style.maxHeight = "0px"
    }
}


