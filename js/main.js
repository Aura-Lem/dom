const h1DOM = document.getElementsByTagName('h1');

console.log(h1DOM);
console.log(h1DOM[0]);

const divDOM = document.getElementsByTagName('div');

console.log(divDOM);

const pDOM = document.getElementsByTagName('p');
console.log(pDOM);

//for (let i = 0; i < pDOM.length; i++) {
//    const p = pDOM[i];
//    p.textContent = 'Pomidoras';
//}

console.clear();

const mainTitleDOM =document.getElementsByClassName('main-title');
console.log(mainTitleDOM);

console.clear();

const mainPDOM = document.querySelectorAll('main > p:nth-of-type(3)');
console.log(mainPDOM[0].textContent);


const mainP2DOM = document.querySelector('main > p:nth-of-type(3)');
console.log(mainP2DOM);

const p2DOM = document.querySelector('p:nth-of-type(2)');
console.log(p2DOM.textContent);

const classMainTitle = document.querySelector('.main-title');
console.log(classMainTitle.textContent);