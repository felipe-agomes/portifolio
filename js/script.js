const section = document.querySelectorAll('section')
const button = document.querySelector('.menuButton')
const navegarionMenu = document.querySelector('.navegarionMenu')
const myNameSelector = document.querySelector('#myName')
const arrayProjects = document.querySelectorAll('.projectCard')
const boxProjectCard = document.querySelector('.boxProjectCard')
const classListBoxProject = boxProjectCard.classList
const myName = 'felipe de almeida gomes'
const arrayMyName = myName.split('')
const objProjectVideo = [
	{
		title: 'work in progress 1',
		aboutTitle: 'work in progress title 1',
		aboutContent:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat libero dolore recusandae. In, id, magnam fugiat expedita libero molestias, architecto ipsam saepe magni provident nesciunt voluptate commodi consequuntur nisi corrupti?',
		href: '../img/teste.mp4',
	},
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
	toggleBoxProjects()

	target.parentNode.innerText
}

arrayProjects.forEach((project) => {
	project.addEventListener('click', displayBoxProjects)
})

typing()
