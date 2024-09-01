
let NavList = document.querySelector(".options");
NavList.style.maxHeight = "0px";
function toggleBar() {
    if (NavList.style.maxHeight === "0px"){
        NavList.style.maxHeight = "300px"

    }
    else{
        NavList.style.maxHeight = "0px"
    }
}
const options = {
    rootMargin:"0px",
    threshold: 1
}

const observer = new IntersectionObserver(callbackFunction, options)

const header = document.getElementById("About-Me-Header");
const about_me_section = document.getElementById("About-Me-Section");
const projects_section = document.getElementById("Projects-Section");
const contacts_section = document.getElementById("Contact Section");

observer.observe(header);
observer.observe(about_me_section);
observer.observe(projects_section);
observer.observe(contacts_section);


function callbackFunction(entries){
    console.log(entries);
    entries.forEach(entry => {
        console.log(entry.target);
    })
}
