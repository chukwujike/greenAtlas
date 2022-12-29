const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
    
})

const price = document.querySelector('.price');
const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');



// bouncing animation for element with className price
price.addEventListener('mouseover', () => {
    price.children[3].className = 'animate-bounce font-sans font-bold mt-7 pl-5 pb-5';
    setTimeout(() => {
        price.children[3].className = 'font-sans font-bold mt-7 pl-5 pb-5'
    }, 1500)
})

// bouncing animation for element with className price
price1.addEventListener('mouseover', () => {
    price1.children[3].className = 'animate-bounce font-sans font-bold mt-7 pl-5 pb-5';
    setTimeout(() => {
        price1.children[3].className = 'font-sans font-bold mt-7 pl-5 pb-5'
    }, 1500)
})

// bouncing animation for element with className price
price2.addEventListener('mouseover', () => {
    price2.children[3].className = 'animate-bounce font-sans font-bold mt-7 pl-5 pb-5';
    setTimeout(() => {
        price2.children[3].className = 'font-sans font-bold mt-7 pl-5 pb-5'
    }, 1500)
})