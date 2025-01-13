const swiperWrapper = document.querySelector('.swiper-wrapper')

const sliderInfo = [
    { title: '{Design Art 1}', url: '', image: 'slider-demo.jpg' },
    { title: '{Design Art 2}', url: '', image: 'slider-demo.jpg' },
    { title: '{Design Art 3}', url: '', image: 'slider-demo.jpg' }
]

createSLider(sliderInfo)

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