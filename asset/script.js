var crsr = document.querySelector("#cursor")
var crsr_blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    crsr_blur.style.left = dets.x-250+"px"
    crsr_blur.style.top = dets.y-250+"px"
})

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

function leftQuotes(){
    var scrollValue = window.scrollY
    var main = document.getElementById('colon1')
    if (scrollValue < 1900){
        main.classList.remove('changeColon1')
        main.classList.add('colon1')
    }
    else{
        main.classList.add('changeColon1')
        main.classList.add('colon1')

    }
}

function rightQuotes(){
    var scrollValue = window.scrollY
    var main = document.getElementById('colon2')
    if (scrollValue < 1900){
        main.classList.remove('changeColon2')
        main.classList.add('colon2')
    }
    else{
        main.classList.add('changeColon2')
        main.classList.add('colon2')

    }
}

function end(){
    var scrollValue = window.scrollY
    var main = document.getElementById('end')
    console.log(scrollValue)
    if (scrollValue < 2500){
        main.classList.remove('changeEnd')
        main.classList.add('end')
    }
    else{
        main.classList.add('changeEnd')
        main.classList.add('end')
    }
}

window.addEventListener('scroll',changeNavBg);
window.addEventListener('scroll',changeMainBg)
window.addEventListener('scroll',leftQuotes)
window.addEventListener('scroll',rightQuotes)
window.addEventListener('scroll',end)