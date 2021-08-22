$(function(){
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 방향
        loop: true, //무한 반복
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        autoplay : {
            delay : 1500
        }
    });
});

$(function(){
    var tabAnchor = $('.Sub_GNB li');
    var tabPanel = $('.tabPanel');

    tabAnchor.click(function(e){
        e.preventDefault();
       
        tabAnchor.removeClass('active');
        $(this).addClass('active');

    tabPanel.hide();

    var $targetIdx = $(this).index();
    console.log($targetIdx)
    tabPanel.eq($targetIdx).show();
    });
    
    tabAnchor.eq(0).trigger('click');
});