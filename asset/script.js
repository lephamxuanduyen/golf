// Animation move chuột

var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr_blur.style.left = dets.x-250+"px"
    crsr_blur.style.top = dets.y-250+"px"
})

window.addEventListener('scroll',changeNavBg);

////////////////////////////////////////////////////////////
// Animation đổi màu thanh Nav

function changeNavBg(){
    var scrollValue = window.scrollY;
    var nav = document.getElementById('nav')
    if (scrollValue < 30){
        nav.classList.remove('bgNavBgColor')
    }
    else
    {
        nav.classList.add('bgNavBgColor')
    }
}

////////////////////////////////////////////////////////////
// Đổi màu background

function changeMainBg(){
    var scrollValue = window.scrollY
    var main = document.getElementById('main')
    if (scrollValue < 200){
        main.classList.remove('changeMainBg')
        main.classList.add('bg')
    }
    else{
        main.classList.add('changeMainBg')
        main.classList.remove('bg')
    }
}

window.addEventListener('scroll',changeMainBg)

////////////////////////////////////////////////////////////
// Animation Quotes

function leftQuotes(){
    var scrollValue = window.scrollY
    var main = document.getElementById('colon1')
    if (scrollValue < 3400){
        main.classList.remove('changeColon1')
        main.classList.add('colon1')
    }
    else{
        main.classList.add('changeColon1')
        main.classList.remove('colon1')

    }
}

function rightQuotes(){
    var scrollValue = window.scrollY
    var main = document.getElementById('colon2')
    if (scrollValue < 3500){
        main.classList.remove('changeColon2')
        main.classList.add('colon2')
    }
    else{
        main.classList.add('changeColon2')
        main.classList.remove('colon2')

    }
}

window.addEventListener('scroll',leftQuotes)
window.addEventListener('scroll',rightQuotes)

//////////////////////////////////////////////////////////
// Animation cho câu cuối trang

function end(){
    var scrollValue = window.scrollY
    var main = document.getElementById('end')
    if (scrollValue < 3800){
        main.classList.remove('changeEnd')
        main.classList.add('end')
    }
    else{
        main.classList.add('changeEnd')
        main.classList.add('end')
    }
}

window.addEventListener('scroll',end)

//////////////////////////////////////////////////////////

// slider
var slides = document.querySelectorAll('.slider')
var btns = document.querySelectorAll('.btn')
let current = 1

var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');
        slide.classList.add('no-display')

        btns.forEach((btn) => {
            btn.classList.remove('active');
            btn.classList.add('no-active');
        });
    });

    slides[manual].classList.remove('no-display')
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    btns[manual].classList.remove('no-active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () =>{
        manualNav(i);
        current = i;
    });
});

setInterval(() => {
    manualNav(current)
    current++
    if (current == slides.length){
        current = 0
    }
}, 3000)

//////////////////////////////////////////////////////////

// Thanh nav

var open_nav_btn = document.querySelector('.menu-btn')
var close_nav_btn = document.querySelector('.close-nav-btn')
var menuMobile = document.querySelector('.menu_mobile')

open_nav_btn.addEventListener('click',() => {
    menuMobile.classList.remove('no-active')
    menuMobile.classList.add('active')
})

close_nav_btn.addEventListener('click', () => {
    menuMobile.classList.remove('active')
    menuMobile.classList.add('no-active')
})