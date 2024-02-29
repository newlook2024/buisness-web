let responsive = document.querySelector('.responsive')
let closeBtn = document.querySelector('.nav-close')
let burgerBtn = document.querySelector('.hamburger')

let open = document.querySelectorAll('.open_text')
let openBtn = document.querySelectorAll('.open_btn')

burgerBtn.addEventListener('click', function () {
    responsive.style.left = '0'
})
closeBtn.addEventListener('click', function () {
    responsive.style.left = '-100%'
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
    if (a > 1000) {
        dumaloq.style.right = '10px'
    } else {
        dumaloq.style.right = '-100%'
    }
    dumaloq.addEventListener('click', function () {

    })
})