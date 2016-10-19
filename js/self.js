$(document).ready(function(){
    $("#yusuan > label").click(function(){
        $(this).siblings("label").attr("class","unselect");
        $(this).attr("class","select");

    });


});


var swiper1 = new Swiper('.swiper1', {
    pagination: '.swiper-pagination',
    speed:1000,
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    mousewheelControl: true,

    onInit:function(swiper){
        swiperAnimateCache(swiper);
        swiperAnimate(swiper);
    },
    onSlideChangeEnd:function(swiper){
        swiperAnimate(swiper);
    },
});

var swiper2 = new Swiper('.swiper2', {
    pagination: '.swiper-pagination',
    autoplay:6000,
    speed:800,
    slidesPerView: 3,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction:false,

});

var swiper3 = new Swiper('.swiper3', {
    autoplay:6000,
    speed:800,
    slidesPerView: 4,
    spaceBetween: 10,
    nextButton: '#swiper3-slide-right',
    prevButton: '#swiper3-slide-left',
    autoplayDisableOnInteraction:false,
    paginationClickable: true,
});

var swiper4 = new Swiper('.swiper4', {
    pagination: '.swiper-pagination',
    autoplay:3000,
    speed:800,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplayDisableOnInteraction:false,
});

