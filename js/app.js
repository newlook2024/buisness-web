let responsive = document.querySelector('.responsive')
let closeBtn = document.querySelector('.nav-close')
let burgerBtn = document.querySelector('.hamburger')

let yillik = document.querySelector('#yearly')
let oylik = document.querySelector('#monthly')

let card = document.querySelector('.prices_card_box')
let card1 = document.querySelector('.box1')

let open = document.querySelectorAll('.open_text')
let openBtn = document.querySelectorAll('.open_btn')

burgerBtn.addEventListener('click', function () {
    responsive.style.left = '0'
})
closeBtn.addEventListener('click', function () {
    responsive.style.left = '-100%'
})

oylik.addEventListener('click', function () {
    card.style.left = '-600%'
    card1.style.right = '0'
    yillik.classList.add('monthly')
    yillik.classList.remove('yearly')
    oylik.classList.remove('monthly')
    oylik.classList.add('yearly')
})
yillik.addEventListener('click', function () {
    card.style.left = '0%'
    card1.style.right = '-600%'
    yillik.classList.add('yearly')
    yillik.classList.remove('monthly')
    oylik.classList.remove('yearly')
    oylik.classList.add('monthly')
})

function openFun(btnOpen, textOpen, textClose, height) {
    btnOpen.addEventListener('click', function () {
        textOpen.style.height = height
        textClose.style.height = '0'
    })
}

openFun(openBtn[0], open[0], open[1], "120px")
openFun(openBtn[1], open[1], open[0], "150px")

let dumaloq = document.querySelector('#upArrow')

window.addEventListener('scroll', function () {
    let a = Math.floor(this.window.pageYOffset)
    console.log(a);
    if(a > 1000){
        dumaloq.style.right = '10px'
    }else{
        dumaloq.style.right = '-100%'
    }
    dumaloq.addEventListener('click', function(){
        
    })
})