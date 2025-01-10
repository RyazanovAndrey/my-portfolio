const header = document.querySelector('.header')
const swiperWrapper = document.querySelector('.swiper-wrapper')
const themeBtn = document.querySelector('.theme-btn')
const btnUp = document.querySelector('.btn-up')

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

const sliderInfo = [
    { title: '{Design Art 1}', url: '', image: 'slider-demo.jpg' },
    { title: '{Design Art 2}', url: '', image: 'slider-demo.jpg' },
    { title: '{Design Art 3}', url: '', image: 'slider-demo.jpg' }
]

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY

    headerEffect(currentScroll)
    showUpBtn(currentScroll)
})

createSLider(sliderInfo)

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

function createSLider(slider) {
    slider.forEach(item => {
        const newSlider = `
        <div class="swiper-slide">
            <div class="works-slider">
                <div class="work-slider-wrapper">
                    <img src="assets/images/${item.image}" alt="" class="works-slider-img">
                    <a href="${item.url}" class="works-slider-demo">Live Demo</a>
                </div>
                <div class="works-slider-title">${item.title}</div>
                <div class="works-slider-desc">Business card website Irina Boyko furniture designer</div>
            </div>
        </div>
    `

        swiperWrapper.insertAdjacentHTML('beforeend', newSlider)
    })
}

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});