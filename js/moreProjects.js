const projectsWrapper = document.querySelector('.projects-wrapper')
const btnMore = document.querySelector('.btn-more')

const projects = [
    { name: '{Coffe Life}', url: 'https://ryazanovandrey.github.io/coffelife/', image: 'coffelife.jpg' },
    { name: '{Travel Ukraine}', url: 'https://ryazanovandrey.github.io/travel/', image: 'travel_ukr.jpg' },
    { name: '{Design Art}', url: 'https://ryazanovandrey.github.io/design/', image: 'design_art.jpg' },
    { name: '{Mstore}', url: 'https://ryazanovandrey.github.io/mstore/', image: 'mstore.jpg' },
    { name: '{FitBox}', url: 'https://ryazanovandrey.github.io/fit/', image: 'fitbox.jpg' },
    { name: '{Consult}', url: 'https://ryazanovandrey.github.io/consult/', image: 'consult.jpg' },
    { name: '{Golden-goose}', url: 'https://golden-goose-three.vercel.app/', image: 'golden.jpg"' },
    { name: '{Rentalux}', url: 'https://ryazanovandrey.github.io/rentalux/', image: 'renta.jpg' },
]

let firstIndex = 0
let lastIndex = 3

renderProjects(firstIndex, lastIndex)
showMore()

function renderProjects(firstIndex, lastIndex) {
    const currentList = projects.slice(firstIndex, lastIndex)

    currentList.forEach(item => {
        let newProject = `
            <div class="project">
                <img src="./assets/images/${item.image}" alt="" class="projects-img">
                <a href="${item.url}" class="projects-link">${item.name}</a>
            </div>
        `

        projectsWrapper.insertAdjacentHTML('beforeend', newProject)
    })
}

function showMore() {

    let countPlus = 3

    btnMore.addEventListener('click', () => {

        firstIndex = lastIndex
        lastIndex = lastIndex + countPlus

        renderProjects(firstIndex, lastIndex)

        btnMore.scrollIntoView({
            behavior: 'smooth'
        })

        if(lastIndex >= projects.length) {
            btnMore.style.display = 'none'
        }
    })
}
