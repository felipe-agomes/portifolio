const button = document.querySelector('.menuButton')
const navegarionMenu = document.querySelector('.navegationMenu')
const myNameSelector = document.querySelector('#myName')
const arrayProjects = document.querySelectorAll('.projectCard')
const boxProjectCard = document.querySelector('.boxProjectCard')
const classListBoxProject = boxProjectCard.classList
const myName = 'felipe de almeida gomes'
const arrayMyName = myName.split('')
const arrProjectVideo = [
	{
		title: 'Portfólio',
		aboutTitle: 'Sobre Portfólio',
		aboutContent:
			'Meu próprio portfólio é o primeiro dos projetos criados por mim, nele tentei ser o mais minimalista possível, e ao mesmo tempo utilizando algumas tecnicas que conheci durante meu aprendizado',
		src: '../video/MyPortfolio.mp4',
	},
	{
		title: 'Jogo da Memória',
		aboutTitle: 'Sobre Jogo da Memória',
		aboutContent:
			'Um jogo da Memória criado com apenas JavaScript puro, HTML e CSS. Esse foi uma ideia de um projeto para praticar a lógica de programação e exeritar um pouco',
		src: '../video/jogoDaMemoria.mp4',
	},
]

window.addEventListener('scroll', function () {
	const header = document.querySelector('header')
	header.classList.toggle('sticky', window.scrollY > 0)
})

const typing = (arr, selector, time = 100) => {
	arr.forEach((element, i) => {
		setTimeout(() => {
			selector.innerHTML += element
		}, i * time)
	})
}

// eslint-disable-next-line no-unused-vars
const toggleMenu = () => {
	button.classList.toggle('active')
	navegarionMenu.classList.toggle('display')
	if (classListBoxProject.contains('projectActive')) {
		toggleBoxProjects()
	}
}

const toggleBoxProjects = () => {
	const body = document.querySelector('body')

	if (classListBoxProject.contains('projectActive')) {
		classListBoxProject.remove('projectActive')
		body.style.overflow = 'auto'
		arrayProjects.forEach((element) => {
			element.classList.add('scaleUp')
			element.addEventListener('click', displayBoxProjects)
			element.style.filter = ''
		})
		return
	}
	classListBoxProject.add('projectActive')
	body.style.overflow = 'hidden'
	arrayProjects.forEach((element) => {
		element.classList.remove('scaleUp')
		element.removeEventListener('click', displayBoxProjects)
	})
}

const displayBoxProjects = ({ target }) => {
	document.querySelector('.btn').addEventListener('click', toggleBoxProjects)
	const videoElement = document.querySelector('.boxVideo').lastElementChild
	toggleBoxProjects()

	for (let i = 0; i < arrProjectVideo.length; i++) {
		if (
			arrProjectVideo[i].title.toUpperCase() ==
			target.parentNode.innerText
		) {
			const aboutTitle = document.querySelector('.boxAbout > h2')
			const aboutContent = document.querySelector('.boxAbout > p')
			const boxHeader = document.querySelector('.boxHeader > h2')
			const video = arrProjectVideo[i].src

			videoElement.setAttribute('src', video)
			boxHeader.innerHTML = arrProjectVideo[i].title
			aboutTitle.innerHTML = arrProjectVideo[i].aboutTitle
			aboutContent.innerHTML = arrProjectVideo[i].aboutContent
		}
	}
}

arrayProjects.forEach((project) => {
	project.addEventListener('click', displayBoxProjects)
})

typing(arrayMyName, myNameSelector)

