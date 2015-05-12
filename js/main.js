$(document).ready(function(){
    
    //set all needs heights
    
    function setSize() {
        var scrHi = $(window).height();
        $('.tablecell').css('height',scrHi+'px');
    }
    setSize();
    
    //watch for window size
    
    $(window).on('resize',function(){
        setSize();
    });
    
    //slider
    
    $(".slider").owlCarousel({
        navigation : true,
        navigationText : ["",""],
        slideSpeed : 300,
        paginationSpeed : 300,
        pagination : true,
        singleItem : true,
        afterAction : slideControl
    });
    
    //видео и подсказки к слайдам
    
    function slideControl() {
        
        var videoSlide = 0,
            owl = $(".slider"),
            currentSlide = this.owl.currentItem;
        
        if (currentSlide===videoSlide) {
            $('.hint').removeClass('active');
        } else {
            $('.slide-'+videoSlide+' .video').get(0).pause();
            $('.slide-'+videoSlide+' .video').get(0).currentTime = 0;
            $('.hint').removeClass('active');
            $('#hint-'+currentSlide).addClass('active');   
        }
        
    }

});