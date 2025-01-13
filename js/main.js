const header = document.querySelector('.header')
const themeBtn = document.querySelector('.theme-btn')
const btnUp = document.querySelector('.btn-up')
const sectionBox = document.querySelectorAll('section')
const linkMenu = document.querySelectorAll('.link')
const burgerBtn = document.querySelector('.burger')
const navMenu = document.querySelector('.nav-menu')


if(localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark')
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    if(document.body.matches('.dark')) {
        localStorage.setItem('theme', 'dark')
    }else {
        localStorage.setItem('theme', 'light')
    }
})

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active')
    navMenu.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY

    headerEffect(currentScroll)
    showUpBtn(currentScroll)
    activeLink(currentScroll)
})

function headerEffect(currentScroll) {
    if (currentScroll > 0) {
        header.classList.add('stop-header')
    } else {
        header.classList.remove('stop-header')
    }
}

function showUpBtn(currentScroll) {
    if(currentScroll > document.documentElement.clientHeight + 500) {
        btnUp.classList.add('show-btn')
    }else {
        btnUp.classList.remove('show-btn')
    }
}

function activeLink(currentScroll) {
    sectionBox.forEach(item => {
        if(currentScroll > item.offsetTop - 700) {
            let currentId = item.getAttribute('id')
            linkMenu.forEach(link => link.classList.remove('active'))
            document.querySelector(`[href="#${currentId}"]`).classList.add('active')
        }
    })
}