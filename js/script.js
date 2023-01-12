const section = document.querySelectorAll('section')
const button = document.querySelector('.menuButton')
const navegarionMenu = document.querySelector('.navegarionMenu')
const myNameSelector = document.querySelector('#myName')
const arrayProjects = document.querySelectorAll('.projectCard')
const boxProjectCard = document.querySelector('.boxProjectCard')
const classListBoxProject = boxProjectCard.classList
const myName = 'felipe de almeida gomes'
const arrayMyName = myName.split('')
const arrProjectVideo = [
	{
		title: 'work in progress'.toUpperCase(),
		aboutTitle: 'work in progress title 1',
		aboutContent:
			'o que é o que é clara e salgada cabe em um olho e pesa uma tonelada tem sabor de mar pode ser discreta inquilina da dor morada predileta na calada ela vem refém da vingança irmã do desespero rival da esperança pode ser causada por vermes e mundanas e o espinho da flor cruel que você ama amante do drama vem para minha cama por querer sem me perguntar me fez sofrer e eu que me julguei forte eu que me senti serei um fraco quando outras delas virem se o barato é louco e o processo é lento no momento deixa eu caminhar contra o vento do que adianta eu ser durão e o coração ser vulnerável o vento não ele é suave mas é frio e implacável é quente borrou a letra triste do poeta correu no rosto pardo do profeta verme sai dareta a lagrima de um homem vai cair esse é seu bo para eternidade se diz que homem não chora está bom falow então vai para grupo irmão Jesus chorou',
		src: '../img/teste.mp4',
	},
	{
		title: 'Jogo da Memória'.toUpperCase(),
		aboutTitle: 'Jogo da Memória',
		aboutContent: 'Um jogo da Memória criado com apenas JavaScript puro, HTML e CSS. Esse foi uma ideia de um projeto para praticar a lógica de programação e exeritar um pouco',
		src: '../img/jogoDaMemoria.mp4'
	}
]

window.addEventListener('scroll', function () {
	const header = document.querySelector('header')
	header.classList.toggle('sticky', window.scrollY > 0)
})

const typing = () => {
	arrayMyName.forEach((element, i) => {
		setTimeout(() => {
			myNameSelector.innerHTML += element
		}, i * 100)
	})
}

const toggleMenu = () => {
	button.classList.toggle('active')
	navegarionMenu.classList.toggle('display')
}

const toggleBox = () => {
	if (classListBoxProject.contains('projectActive')) {
		arrayProjects.forEach((element) => {
			element.classList.remove('scaleUp')
			element.removeEventListener('click', displayBoxProjects)
			element.style.filter = 'blur(10px)'
		})
		return
	}
	arrayProjects.forEach((element) => {
		element.classList.add('scaleUp')
		element.addEventListener('click', displayBoxProjects)
		element.style.filter = ''
	})
}

const toggleBoxProjects = () => {
	const body = document.querySelector('body')

	if (classListBoxProject.contains('projectActive')) {
		classListBoxProject.remove('projectActive')
		body.style.overflow = 'auto'

		toggleBox()
	} else {
		classListBoxProject.add('projectActive')
		body.style.overflow = 'hidden'

		toggleBox()
	}
}

const displayBoxProjects = ({ target }) => {
	document.querySelector('.btn').addEventListener('click', toggleBoxProjects)
	const videoElement = document.querySelector('.boxVideo').lastElementChild
	toggleBoxProjects()
	for (let i = 0; i < arrProjectVideo.length; i++) {
		if (arrProjectVideo[i].title == target.parentNode.innerText) {
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

typing()
