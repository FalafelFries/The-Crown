// navbar = document.querySelector('.nav-container')

homeLink = document.querySelector('#home-link')
aboutLink = document.querySelector('#about-link')
contactLink = document.querySelector('#contact-link')

homeSection = document.querySelector('#home')
aboutSection = document.querySelector('#about1')
contactSection = document.querySelector('#contact')


homeLink.addEventListener('click', function(e) {
    e.preventDefault()
    homeSection.scrollIntoView({behavior: "smooth"})
})

aboutLink.addEventListener('click', function(e) {
    e.preventDefault()
    aboutSection.scrollIntoView({behavior: "smooth"})
})

contactLink.addEventListener('click', function(e) {
    e.preventDefault()
    contactSection.scrollIntoView({behavior: "smooth"})
})