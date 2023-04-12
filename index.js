// ==================== Auto navbar scrolling ==================== 
const section = document.querySelector('section')
const navlink = document.querySelector('header nav a')

window.onscroll=()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = set.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navlink.forEach(links=>{
                links.classlis.remove('active')
                document.querySelector('header nav a[href *= '+id+']').classList.add('active')
            })
        }
    })


// ==================== Fixed navbar menu ====================
    var header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 100)

 // ==================== TOGGLE navbar menu ====================
    menubar.classList.remove('bx-x')
    navbar.classList.remove('active')
};

    let menubar = document.querySelector('#menu')
    let navbar = document.querySelector('active')
    menubar.onClick = ()=>{
        menubar.classList.toggle('bx-x')
        navbar.classList.toggle('active')
    }