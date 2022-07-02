let slider = document.querySelector('#slider div')
let foward = true
let i = 0

let toggle = document.querySelector("input[type='checkbox']")
let root = document.querySelector(':root')

let cardFunc = (element, front, back) =>{
    let h3 = element.querySelector('h3')

    if(element.style.transform != `rotateY(180deg)`){
        let x = 0
        
        setTimeout(() => {
            element.style.fontSize = '0.9em'
            h3.innerText = back
        }, 500)
        
        let fwd = setInterval(()=>{
            element.style.transform = `rotateY(${x}deg)`
            h3.style.transform = `rotateY(${x}deg)`
            if(x != 180)
                x++
            else
                clearInterval(fwd)
        }, 5)
    }else if(element.style.transform != `rotateY(0deg)`){
        let x = 180

        setTimeout(() => h3.innerText = front, 500)

        let bwd = setInterval(()=>{
            element.style.transform = `rotateY(${x}deg)`
            h3.style.transform = `rotateY(${x}deg)`
            if(x != 0)
                x--
            else
                clearInterval(bwd)
        }, 5)
    }
}

toggle.addEventListener('change', () =>{
    if(!root.classList.contains('dark-theme')){
        root.classList.add('dark-theme')
    }else{
        root.classList.remove('dark-theme')
    }
})

setInterval(() => {
    if(foward){
        let fwd = setInterval(()=>{
            slider.style.transform = `translateX(-${i}%)`
                
            if(i < 100)
                i++
            else if(i == 100){
                i++
                clearInterval(fwd)
            }
            else if(i > 100 && i < 200)
                i++
            else if(i == 200){
                foward = false
                clearInterval(fwd)
            }
        }, 5)
    }else{
        let bwd = setInterval(()=>{
            slider.style.transform = `translateX(-${i}%)`
                
            if(i > 100)
                i--
            else if(i == 100){
                i--
                clearInterval(bwd)
            }
            else if(i > 0 && i < 100)
                i--
            else if(i == 0){
                foward = true
                clearInterval(bwd)
            }
        }, 5)
    }
}, 5000)

function sideMenu(y = 100){
    document.querySelector('body').style.position = 'fixed'
    document.querySelector('#info').style.opacity = 1
    document.querySelector('#info').style.zIndex = 200;

    let fwd = setInterval(() =>{
        document.querySelector('#info div').style.left = `-${y}%`
        if(y <= 0) clearInterval(fwd)
        else y--
    }, 5)
}

function ClosesideMenu(y = 0){
    document.querySelector('body').style.position = 'initial'

    setTimeout(() => {
        document.querySelector('#info').style.opacity = 0
        document.querySelector('#info').style.zIndex = 0;
    }, 500)

    let fwd = setInterval(() =>{
        document.querySelector('#info div').style.left = `-${y}%`
        if(y >= 100) clearInterval(fwd)
        else y++
    }, 5)
}

function popupMaps(y = 0){
    document.querySelector('body').style.position = 'fixed'

    let fwd = setInterval(() =>{
        document.querySelector('article').style.opacity = y
        if(y >= 1) clearInterval(fwd)
        else y += 0.01
    }, 5)
}

function closePopupMaps(y = 1){
    document.querySelector('body').style.position = 'initial'

    let bwd = setInterval(() =>{
        document.querySelector('article').style.opacity = y
        if(y <= 0){
            document.querySelector('article').style.opacity = 0
            clearInterval(bwd)
        }
        else{
            y -= 0.01
        }
    }, 5)
}

var $simpleCarousel = document.querySelector(".js-carousel--simple");

new Glider($simpleCarousel, {
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
    },

    {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
    },

    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },

    {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
    }
  ]
});