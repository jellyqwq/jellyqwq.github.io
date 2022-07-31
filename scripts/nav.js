const navLinks = document.getElementsByClassName('nav-links')[0]

onresize = () => {
    let navWidth = document.getElementsByClassName('nav-links')[0].offsetWidth
    let screenWith = window.innerWidth

    if (navWidth >= screenWith) {
        navLinks.classList.add('nav-btn-hide')
    }
    else {
        navLinks.classList.remove('nav-btn-hide')
    }
}