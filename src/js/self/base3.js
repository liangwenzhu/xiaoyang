$(function(){
    if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE9.0")
    {
        alert("对不起，检测到浏览器为IE9或以下，请升级浏览器");
        window.location.href='http://www.googlechromer.cn/';
    }
});
/*顶部导航隐藏*/
$(function(){
    var num=0;
    var bullet = $(".bullet");
    $('#hide').click(function(){
        $(this).stop(false,false);
        bullet.stop(false,false);
        if(num++ %2 == 0){
            $(this).rotate({
                animateTo:270
            });
            bullet.animate({
                right:"-700px"
                //marginLeft:"-30px",
            },1000)
        }else{
            $(this).rotate({
                animateTo:0
            });
            bullet.animate({
                right:"0px",
                marginLeft:"-30px",
            },500)
        }
    });
});
/*团队子页面左右按钮*/
$(function(){
    var left=$("#swiper-slide-left7");
    var right=$("#swiper-slide-right7");
    $(".swiper7").hover(function(){
        left.stop(false,false);
        right.stop(false,false);
        left.fadeIn(200);
        right.fadeIn(200);
    },function(){
        left.stop(false,false);
        right.stop(false,false);
        left.fadeOut(200);
        right.fadeOut(200);
    });
    $(".swiper8").hover(function(){
        left.stop(false,false);
        right.stop(false,false);
        left.fadeIn(200);
        right.fadeIn(200);
    },function(){
        left.stop(false,false);
        right.stop(false,false);
        left.fadeOut(200);
        right.fadeOut(200);
    })
});
$(function () {
    for(i=1;i<$(".swiper1 .swiper-wrapper section").length;i++){
        $(".swiper1 .swiper-wrapper section").eq(i).addClass("opacity0");
    }
});
/*第2屏动画*/
function a1(){
    $(".slide2").removeClass("opacity0");
    for(i=0;i<$(".about-us-content dl").length;i++){
        $(".about-us-content dl").eq(i).addClass("i"+i);
    }
}
/*第3屏动画*/
function a2() {
    $(".slide3").removeClass("opacity0");
    for(i=0;i<$(".swiper4 .swiper-slide").length;i++){
        $(".swiper4 .swiper-slide").eq(i).addClass("o"+i);
    }
    $(".project-ul").addClass("left-in-30px-18s");
}
/*第4屏动画*/
function a3(){
    $(".slide4").removeClass("opacity0");
    for(i=0;i<$(".swiper2 .swiper-slide").length-1;i++){
        var p = $(".swiper2 .swiper-slide").length-2 - i;
        $(".swiper2 .swiper-slide").eq(i).addClass("p"+p);
    }
    $(".main-team-decoration").addClass("right-in-30px-18s");
}
/*第5屏动画*/
function a4(){
    $(".slide5").removeClass("opacity0");
    $("#line").addClass("line-ani");
    for(i=0;i<$(".partner li").length;i++){
        $(".partner li").eq(i).addClass("l"+i);
    }
    for(i=0;i<$(".concat li").length;i++){
        $(".concat li").eq(i).addClass("k"+i);
    }
}

$(function(){
    /*顶部导航*/
    $(".bullet li").click(function(){
        var a = $(this).index();
        var bullets =  $(".bullet li");
        var logo = $("#top-nav .navbar-brand img");
        mySwiper.slideTo(a,1000,false);
        if(a==0){
            logo.attr("src","icon/nav_logo_white.png");
            bullets.removeClass("color-black");
            bullets.addClass("color-white");
        }else{
            bullets.addClass("color-black");
            logo.attr("src","icon/nav_logo.png");
        }
        if(a==1){

            a1();
        }
        if(a==2){
            a2();
        }
        if(a==3){
            a3();
        }
        if(a==4){
            a4();
        }
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    /*第3屏案例展示*/
    $(".project-ul li").click(function(){
        var b = $(this).index();
        swiper4.slideTo(b*4+1, 500, false);
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
});

/*首页最外围SWIPER*/
$(function(){
    var width = document.documentElement.clientWidth;
    if(width>768){
            mySwiper = new Swiper('.swiper1',{
            speed:1000,
            pagination: '.my-pagination',
            direction: 'vertical',
            paginationClickable: true,
            slidesPerView: 1,
            noSwiping : true,
            mousewheelControl: true,
          //  hashnav:true,
            preventClicks : false,
            //preventLinksPropagation : false,
            onSlideChangeStart: function(e){
                var a = mySwiper.activeIndex;
                var bullets =  $(".bullet li");
                var logo = $("#top-nav .navbar-brand img");
                var width = document.documentElement.clientWidth;
                if(a==0){
                    logo.attr("src","icon/nav_logo_white.png");
                    bullets.removeClass("color-black");
                    bullets.addClass("color-white");
                }else{
                    bullets.addClass("color-black");
                    logo.attr("src","icon/nav_logo.png");
                }
                if(a==1){
                    a1();
                }
                if(a==2){
                   a2();
                }
                if(a==3){
                   a3();
                }
                if(a==4){
                   a4();
                }
                bullets.eq(a).addClass("active");
                bullets.eq(a).siblings().removeClass("active");
            },
        });
    }else{
        mySwiper = new Swiper('.swiper1',{
            speed:500,
            pagination: '.my-pagination',
            direction: 'vertical',
            paginationClickable: true,
            slidesPerView: 1,
            noSwiping : true,
            mousewheelControl: true,
           // hashnav:true,
            preventClicks : false,
            //preventLinksPropagation : false,
            onSlideChangeStart: function(e){
                var a = mySwiper.activeIndex;
                var bullets =  $(".bullet li");
                var logo = $("#top-nav .navbar-brand img");
                var width = document.documentElement.clientWidth;

                if(a==0 && width>768){
                    logo.attr("src","icon/nav_logo_white.png");
                    bullets.removeClass("color-black");
                    bullets.addClass("color-white");
                }else{
                    bullets.addClass("color-black");
                    logo.attr("src","icon/nav_logo.png");
                }
                bullets.eq(a).addClass("active");
                bullets.eq(a).siblings().removeClass("active");
            },
        });
    }
});


/*首页第三屏团队介绍swiper*/
var swiper2 = new Swiper('.swiper2', {
    //autoplay:6000,
    speed:800,
    slidesPerView: 4,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplayDisableOnInteraction:false,
    paginationClickable: true,
    noSwiping : true,
    //preventClicks : false,
    simulateTouch : false,//禁止鼠标
});

var swiper3 = new Swiper('.swiper3',{
    pagination: '.swiper-pagination-project',
    paginationClickable: true,
    paginationType : 'progress',
    autoplay : 5000,
    speed:700,
    observer:true,
    observeParents:true,
    noSwiping : true,
    preventClicks : false,
});
/*首页第二屏案例展示swiper*/
var swiper4 = new Swiper('.swiper4',{
    slidesPerView : 4,
    slidesPerGroup : 4,
    spaceBetween: 20,
    pagination: '.swiper4-pagination',
    paginationClickable: true,
    noSwiping : true,
    // preventClicks : false,
    simulateTouch : false,
});

/*项目展示里面swiper*/
var swiper6 = new Swiper('.swiper6',{
    pagination: '.swiper-pagination-project2',
    paginationClickable: true,
    autoplay : 5000,
    speed:700,
    observer:true,
    observeParents:true,
    noSwiping : true,
    preventClicks : false,
});
/*团队上方swiper*/
var swiper7 = new Swiper('.swiper7',{
    pagination: '.swiper-pagination-project7',
    paginationClickable: true,
    speed:1000,
    observer:true,
    observeParents:true,
    noSwiping : true,
    nextButton: '#swiper-slide-right7',
    prevButton: '#swiper-slide-left7',
    loop : true,
    hashnav:true,
    preventClicks : false,
    simulateTouch : false,//禁止鼠标
});
/*团队下方swiper*/
var swiper8 = new Swiper('.swiper8',{
    pagination: '.swiper-pagination-project8',
    speed:1000,
    noSwiping : true,
    loop : true,
    hashnav:true,
    preventClicks : false,
    effect : 'fade',
});
swiper7.params.control = swiper8;//需要在Swiper2初始化后，Swiper7控制Swiper8
swiper8.params.control = swiper7;//需要在Swiper1初始化后，Swiper8控制Swiper7

/*设定可否选定文字*/
/*根据窗口大小载入百度地图的JS*/
$(function(){
    var width = document.documentElement.clientWidth;
    var logo = $("#top-nav .navbar-brand img");
    if (width<768){
        $(".swiper1").removeClass("swiper-no-swiping");
        logo.attr("src","icon/nav_logo.png");
        $("#baidumap").attr("src","js/kuangjia/baidumap.js");
    }else{
        logo.attr("src","icon/nav_logo_white.png");
    }
});
/*窗口尺寸变化事件
$(window).resize(function(){
    var width = document.documentElement.clientWidth;
    if (width<768){
        $(".swiper1").removeClass("swiper-no-swiping");
    }
    if (width>768){
        $(".swiper1").addClass("swiper-no-swiping");
    }
});
 */
var swiper9 = new Swiper('.swiper9',{
    pagination: '.swiper-pagination-project9',
    speed:500,
});
/*移动端案例展示*/
$(function(){
    $(".prject-show").eq(0).siblings().hide();
    $(".service").eq(0).children().eq(0).siblings().hide();
    $(".service").eq(1).children().eq(0).siblings().hide();
    $(".service").eq(2).children().eq(0).siblings().hide();

    $(".project-ul-phone li").click(function(){
        var index = $(this).index();
        $(".prject-show").eq(index).siblings().hide();
        $(".prject-show").eq(index).show();
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
});
/*绿色建筑*/
var swiper10 = new Swiper('.swiper10',{
    pagination: '.swiper-pagination-project10',
    speed:500,
    onSlideChangeStart: function(e) {
        var active = swiper10.activeIndex;
        $(".service").eq(0).children().eq(active).siblings().fadeOut();
        $(".service").eq(0).children().eq(active).fadeIn();
    }
});
/*轨道交通车辆*/
var swiper11 = new Swiper('.swiper11',{
    pagination: '.swiper-pagination-project11',
    speed:500,
    onSlideChangeStart: function(e) {
        var active = swiper11.activeIndex;
        $(".service").eq(1).children().eq(active).siblings().fadeOut();
        $(".service").eq(1).children().eq(active).fadeIn();
    }
});
/*仪表仪器*/
var swiper12 = new Swiper('.swiper12',{
    pagination: '.swiper-pagination-project12',
    speed:500,
    onSlideChangeStart: function(e) {
        var active = swiper11.activeIndex;
        $(".service").eq(2).children().eq(active).siblings().fadeOut();
        $(".service").eq(2).children().eq(active).fadeIn();
    }
});
/**/
var swiper13 = new Swiper('.swiper13',{
    pagination: '.swiper-pagination-project13',
    speed:500,
});
var swiper14 = new Swiper('.swiper14',{
    pagination: '.swiper-pagination-project14',
    speed:500,
});