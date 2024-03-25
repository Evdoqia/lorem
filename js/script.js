
// const melem = document.documentElement;
// const melemW = melem.clientWidth
// const melemH = melem.clientHeight
// console.log(melemW)
// console.log(melemH)

$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.slider__body').slick({
        slidesToShow: 3,
        // variableWidth: true
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.header__link').click(function(event){
        $('.header__link').removeClass('active');
        $(this).addClass('active');
    });
});



















// const brgr = document.querySelector('.header__burger');
// const nav = document.querySelector('.header__body');
// brgr.addEventListener('click', toggleBrgr);
// function toggleBrgr (e) {
//     nav.classList.toggle('active');
//     brgr.classList.toggle('active');
// }