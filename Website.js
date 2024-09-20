let Nav = document.querySelector(".options");
Nav.style.maxHeight = "0px";
function toggleBar() {
    if (Nav.style.maxHeight === "0px"){
        Nav.style.maxHeight = "300px"

    }
    else{
        Nav.style.maxHeight = "0px"
    }
}


const options = {
    rootMargin:"0px",
    threshold: 0.1
}

const observer = new IntersectionObserver(callbackFunction, options)

const header = document.getElementById("About-Me-Header");
const about_me_section = document.getElementById("About-Me-Section");
const projects_section = document.getElementById("Projects-Section");
const contacts_section = document.getElementById("Contacts-Section");

function callbackFunction(entries){
    console.log(entries);
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target.id)
            if (entry.target.id === 'About-Me-Header'){
                entry.target.classList.add('show');
                document.body.style.backgroundColor = 'white';
            }
            else if (entry.target.id === 'About-Me-Section'){
                entry.target.classList.add('show');
                document.body.style.backgroundColor = 'antiquewhite';
                document.body.style.transition = '1.0s ease';
            }
            else if (entry.target.id === 'Projects-Section'){
                entry.target.classList.add('show');
                document.body.style.backgroundColor = 'cadetblue';
                document.body.style.transition = '1.0s ease';

            }
            else if (entry.target.id === 'Contacts-Section'){
                entry.target.classList.add('show');
                document.body.style.backgroundColor = 'cornsilk';
                document.body.style.transition = '1.0s ease';
            }
        }

    })
}

observer.observe(header);
observer.observe(about_me_section);
observer.observe(projects_section);
observer.observe(contacts_section);

