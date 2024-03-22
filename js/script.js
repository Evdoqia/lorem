// // var name = 'hhk' + 88
// // console.log(typeof name);
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
    $('.slider__body').slick();
});

slider__body

















// const brgr = document.querySelector('.header__burger');
// const nav = document.querySelector('.header__body');
// brgr.addEventListener('click', toggleBrgr);
// function toggleBrgr (e) {
//     nav.classList.toggle('active');
//     brgr.classList.toggle('active');
// }