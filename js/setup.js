$('.owl-carousel').owlCarousel({
    loop:true, //Nunca acaba, o carrosel fica em loop
    margin:10,
    nav:false, //setinhas de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})