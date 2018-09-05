document.addEventListener('DOMContentLoaded', function() {
    let nav = document.querySelector('nav')
    var elems = document.querySelectorAll('.scrollspy')
    var instances = M.ScrollSpy.init(elems)
    var aosdiv2 = document.querySelector('.aosdiv2')

    AOS.init({once:true})

    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 30) {
        nav.classList.add('nav-scroll')
      }else if (window.pageYOffset < 30) {
        nav.classList.remove('nav-scroll')
      } 
    })

  })

  
        