// ==================== Auto navbar scrolling ==================== 
const section=document.querySelector('section')
const navlink=document.querySelector('header nav a')

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
}

// ==================== Fixed navbar menu ====================
