$(function(){

    //dark모드
    $('.switch input').click(function(){
        if ($(this).is(":checked")) {
            $('.wrap').addClass('dark');
        } else {
            $('.wrap').removeClass('dark');
        }
    })

    //mobile menu
    $('.mobile-nav').click(function(){
        $(this).toggleClass('active');
        $('.mobile-nav__item').toggleClass('active');
    })


    //마그네틱
    $('.sc-banner__employee-box .img-wrap').mousemove(function(e){
        
        w = $(this).outerWidth()/2;
        h = $(this).outerHeight()/2;
   
        xVal = e.offsetX - w;
        yVal = e.offsetY - h;

        // console.log(`${xVal}////${yVal}`);
        
        gsap.to($(this).find('span'),{
            x:xVal,
            y:yVal,
            scale: 1.1,
        })
        gsap.to($(this).find('img'),{
            x:xVal/2,
            y:yVal/2
        })

    })

    $('.sc-banner__employee-box .img-wrap').mouseout(function(){
        gsap.to($(this).find('span'),{
            x: 0,
            y: 0,
            scale: 1,
        })
        gsap.to($(this).find('img'),{
            x: 0,
            y: 0
        })
    })


    //마그네틱 버튼

    $('.button-magnetic').mousemove(function(e){

        w = $(this).outerWidth()/2;
        h = $(this).outerHeight()/2;
   
        xVal = e.offsetX - w;
        yVal = e.offsetY - h;

        gsap.to($(this).find('.button'),{
            x:xVal,
            y:yVal,
            scale: 1.1,
        })
        gsap.to($(this).find('span'),{
            x:xVal/2,
            y:yVal/2
        })

    })

    $('.button-magnetic').mouseout(function(){
        gsap.to($(this).find('.button'),{
            x: 0,
            y: 0,
            scale: 1,
        })
        gsap.to($(this).find('span'),{
            x: 0,
            y: 0
        })
    })

    //data-fade 효과
    $('[data-fade]').each(function(i,el){
        gsap.from($(this),{
            scrollTrigger:{
                trigger:$(this),
                start:"0% 80%",
                end:"30% 80%"
            },
            opacity:0,
            yPersent: 20
        })
    })



    //아코디언^^...
    $('.sc-faq__btn').click(function(){
        $(this).siblings('.sc-faq__desc').slideToggle('active');
        $(this).find('.btn-plus').toggleClass('open');
    })

})