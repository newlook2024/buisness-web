let responsive = document.querySelector('.responsive')
let closeBtn = document.querySelector('.nav-close')
let burgerBtn = document.querySelector('.hamburger')

let yillik = document.querySelector('#yearly')
let oylik = document.querySelector('#monthly')

let card = document.querySelector('.prices_card_box')
let card1 = document.querySelector('.box1')

burgerBtn.addEventListener('click', function(){
    responsive.style.left = '0'
})
closeBtn.addEventListener('click', function(){
    responsive.style.left = '-100%'
})

oylik.addEventListener('click', function(){
    card.style.left = '-600%'
    card1.style.right = '0'
    yillik.classList.add('monthly')
    yillik.classList.remove('yearly')
    oylik.classList.remove('monthly')
    oylik.classList.add('yearly')
})
yillik.addEventListener('click', function(){
    card.style.left = '0%'
    card1.style.right = '-600%'
    yillik.classList.add('yearly')
    yillik.classList.remove('monthly')
    oylik.classList.remove('yearly')
    oylik.classList.add('monthly')
})

