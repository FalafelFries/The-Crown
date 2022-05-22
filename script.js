navigation = document.querySelector('.nav-container')

menuLinks = document.querySelectorAll('ul li')
homeLink = document.querySelector('#home-link')
aboutLink = document.querySelector('#about-link')
contactLink = document.querySelector('#contact-link')

homeSection = document.querySelector('#home')
aboutSection = document.querySelector('#about1')
contactSection = document.querySelector('#contact')

navHeight = navigation.offsetHeight+'px'
const menuToggle= document.querySelector(".menu-bars")
const nav = document.querySelector("nav ul");
const menuCheckbox = document.querySelector('input[name="menu-toggle-check"]');

menuToggle.addEventListener("click", () => {
    // console.log(menuCheckbox.checked);
    nav.classList.toggle("slide")
    nav.style.top = navHeight
    menuLinks.forEach(link => {
        // console.log(link);
        link.addEventListener("click", () => {
            nav.classList.toggle("slide")
            menuCheckbox.checked = false
        })
    })
})

homeLink.addEventListener('click', (e) => {
    e.preventDefault()
    homeSection.scrollIntoView({behavior: "smooth"})
})

aboutLink.addEventListener('click', (e) => {
    e.preventDefault()
    aboutSection.scrollIntoView({behavior: "smooth"})
})

contactLink.addEventListener('click', (e) => {
    e.preventDefault()
    contactSection.scrollIntoView({behavior: "smooth"})
})


