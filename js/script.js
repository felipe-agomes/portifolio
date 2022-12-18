const button = document.querySelector('.menuButton');
const navegarionMenu = document.querySelector('.navegarionMenu');
const myName = document.querySelector('#myName');

const arrayMyName = [
	'f',
	'e',
	'l',
	'i',
	'p',
	'e',
	' ',
	'd',
	'e',
	' ',
	'a',
	'l',
	'm',
	'e',
	'i',
	'd',
	'a',
	' ',
	'g',
	'o',
	'm',
	'e',
	's',
];

window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

const typing = () => {
	arrayMyName.forEach((element, i) => {
		setTimeout(() => {
			myName.innerHTML += element;
		}, i * 100);
	});
};

const toggleMenu = () => {
	button.classList.toggle('active');
	navegarionMenu.classList.toggle('display');
};

typing();
