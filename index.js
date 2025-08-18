const accordions = document.querySelectorAll('.accordion')



accordions.forEach(( accordion) => {
   accordion.addEventListener('click', ()=>{
       accordion.getAttribute('aria-expanded') === 'true' ?
       accordion.setAttribute('aria-expanded', 'false') :
       accordion.setAttribute('aria-expanded', 'true')
       console.log(accordion);
    })
});
