let burgerBtn = document.querySelector('.hamburger')
let responsive = document.querySelector('.responsive')
let closeBtn = document.querySelector('.nav-close')

burgerBtn.addEventListener('click', function(){
    responsive.style.left = '0'
})
closeBtn.addEventListener('click', function(){
    responsive.style.left = '-100%'
})

let allApps = document.querySelector('.all-apps')
let apps = document.querySelector('.apps-box')

allApps.addEventListener('click', function(){
    if(apps.style.height != '820px'){
        apps.style.height = '820px'
    }else{
        apps.style.height = '321px'
    }
})

let open = document.querySelectorAll('.open_btn1')
let openT = document.querySelectorAll('.open_text1')

open.forEach(function(item, index){
    item.addEventListener('click', function(){
        openT.forEach(function(item1, index1){
            item1.style.height = '0'
        })
        openT[index].style.height = "120px"
    })
})

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