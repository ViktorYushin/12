// Подключаем переключение меню
$(document).ready(function () {
    let tabsItem = $('.tabs-item');

    tabsItem.on('click',function(event){
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active');
        $(this).toggleClass('tabs-item-active');

    });
});



// Подключаем слайдер
$(document).ready(function(){
    $('.recommendation_cards').slick({
        arrows:true,  //показываем стрелки
        dots:true, //показываем точки
        adaptiveHeight:false, //автоматическая настройка высоты слайдера
        slidesToShow:1, //кол-во отображаемых сладов
        slidesToScroll: 2, //кол-во переключаемых сладов
        speed: 200, //скорость перелистывания
        easing:'ease', //изменяет прелистывание
        infinity:true, //замыкает последний слайдер
        initialSlide:0, //с какова слайдера начинает,
        autoplay:false,// так же можно делать автоматическое пролистываниес периудом 
        autoplaySpeed:5000, //скорость автоматического пролистывания
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        variableWidth:false,
        mobileFirst:true,
        centermode:true,
        responsive:[
            {
                breakpoint:900,
                 settings:{
                    slidesToShow:4
                }   
                
                
            }
        ],responsive:[
            {
                breakpoint:580,
                 settings:{
                    slidesToShow:2
                }   
                
                
            }
        ]
    });
});
