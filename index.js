// ==================== Auto navbar scrolling ==================== 
const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav a')

window.onscroll=()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLink.forEach(links=>{
                links.classlis.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
            })
        }
    })


// ==================== Fixed navbar menu ====================
    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY>100)

    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')
};

// ==================== TOGGLE navbar menu ====================
    let menubar = document.querySelector('#menu')
    let navbar = document.querySelector('.navbar')
    menubar.onclick = ()=>{
        menubar.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    }

// ==================== HOME Textline Changer ====================
    var type =  new Typed('.textline', {
        strings:["Visual Designer", "UI/UX Designer in Training"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    })