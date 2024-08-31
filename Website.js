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

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const header = document.getElementsByClassName(".Header");
const about_me_section = document.getElementById("About-Me-Section");
const projects_section = document.getElementById("Projects-Section");
const contacts_section = document.getElementById("Contact Section");

observer.observe(header);
observer.observe(about_me_section);
observer.observe(projects_section);
observer.observe(contacts_section);
