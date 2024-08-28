

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

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

