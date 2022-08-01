const navLinks = document.getElementsByClassName('nav-links')[0]
const navHideBox = document.getElementById('nav-box-1')

window.onload = (event) => {
    event.preventDefault();
    let navWidth = navLinks.offsetWidth
    let screenWith = window.innerWidth

    if (navWidth >= screenWith) {
        navHideBox.style.display = 'none'
    }
    else {
        navHideBox.style.display = 'flex'
    }
}

onresize = (event) => {
    event.preventDefault();
    let navWidth = navLinks.offsetWidth
    let screenWith = window.innerWidth

    if (navWidth >= screenWith) {
        navHideBox.style.display = 'none'
    }
    else {
        navHideBox.style.display = 'flex'
    }
}



