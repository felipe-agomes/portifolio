const myName = document.querySelector('#myName')
const nome = ['f', 'e', 'l', 'i', 'p', 'e', ' ', 'd', 'e', ' ', 'a', 'l', 'm', 'e', 'i', 'd', 'a', ' ', 'g', 'o', 'm', 'e', 's']
console.log(myName);
const typing = () => {
    nome.forEach((element, i) => {
        setTimeout(() => {
            myName.innerHTML += element
        }, i * 100);
    });
}
typing()