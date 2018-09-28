document.addEventListener('DOMContentLoaded', function () {

  // AOS
  AOS.init({
    duration: 400,
    once: true,
  })

  // scrollspy 
  var elemsscrollspy = document.querySelectorAll('.scrollspy')
  var optionsscrollspy = ({
    scrollOffset: 0,
    throttle: 1000,
  })
  var hola = M.ScrollSpy.init(elemsscrollspy, optionsscrollspy)

  //  scroll
  let nav = document.querySelector('nav')

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 30) {
      nav.classList.add('nav-scroll')
    } else if (window.pageYOffset < 30) {
      nav.classList.remove('nav-scroll')
    }
  })

  // zoom img
  var elemsmodals = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elemsmodals);

  // var btnzoom1 = document.querySelector('.zoom1')
  // var btnzoom2 = document.querySelector('.zoom2')
  // var btnzoom3 = document.querySelector('.zoom3')
  // var btnzoomcerrar1 = document.querySelector('.zoomcerrar1')
  // var btnzoomcerrar2 = document.querySelector('.zoomcerrar2')
  // var btnzoomcerrar3 = document.querySelector('.zoomcerrar3')

  // btnzoom1.addEventListener('click', () => {
  //   document.querySelector('body').classList.add('bloqueo-scroll')
  //   document.querySelector('.zoomdiv1').classList.remove('oculto')
  // })

  // btnzoom2.addEventListener('click', () => {
  //   document.querySelector('body').classList.add('bloqueo-scroll')
  //   document.querySelector('.zoomdiv2').classList.remove('oculto')
  // })

  // btnzoom3.addEventListener('click', () => {
  //   document.querySelector('body').classList.add('bloqueo-scroll')
  //   document.querySelector('.zoomdiv3').classList.remove('oculto')
  // })

  // btnzoomcerrar1.addEventListener('click', () => {
  //   document.querySelector('body').classList.remove('bloqueo-scroll')
  //   document.querySelector('.zoomdiv1').classList.add('oculto')
  // })

  // btnzoomcerrar2.addEventListener('click', () => {
  //   document.querySelector('body').classList.remove('bloqueo-scroll')
  //   document.querySelector('.zoomdiv2').classList.add('oculto')
  // })

  // btnzoomcerrar3.addEventListener('click', () => {
  //   document.querySelector('body').classList.remove('bloqueo-scroll')
  //   document.querySelector('.zoomdiv3').classList.add('oculto')
  // })

  // tool-tipe
  var elemstooltiped = document.querySelectorAll('.tooltipped');
  var elem = ({
     
  })
  var instances = M.Tooltip.init(elemstooltiped);



  // slider
  var elems = document.querySelectorAll('.carousel')
  var elemsmodal = document.querySelectorAll('.materialboxed')
  const navBar = document.querySelector('nav')
  var arrowright = document.querySelector('.arrowright')
  var arrowleft = document.querySelector('.arrowleft')
  var instance = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true
  })

  arrowright.addEventListener('click', () => {
    var instances = M.Carousel.getInstance(elems[0])
    instances.next()
  })
  arrowleft.addEventListener('click', () => {
    var instances = M.Carousel.getInstance(elems[0])
    instances.prev()
  })
  var instancesmodal = M.Materialbox.init(elemsmodal)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) navBar.classList.add('is-down')
    else navBar.classList.remove('is-down')
  })
// logueo
  


})