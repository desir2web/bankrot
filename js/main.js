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
    
//    function slideControl() {
//        
//        var videoSlide = 0,
//            owl = $(".slider"),
//            currentSlide = this.owl.currentItem;
//        
//        if (currentSlide===videoSlide) {
//            $('.hint').removeClass('active');
//        } else {
//            $('.slide-'+videoSlide+' .video').get(0).pause();
//            $('.slide-'+videoSlide+' .video').get(0).currentTime = 0;
//            $('.hint').removeClass('active');
//            $('#hint-'+currentSlide).addClass('active');   
//        }
//        
//    }
    
    function slideControl() {
        
        var owl = $(".slider"),
            currentSlide = this.owl.currentItem + 1;
            
            $('.hint').removeClass('active');
            $('#hint-'+currentSlide).addClass('active');   
        
    }
    
    //mail
    
    $('.submit').on('click', function(e) {
        e.preventDefault();
        $('.requered').each(function() {
            if(!$(this).val().length) {
                $(this).css('border', '#e02525 2px solid');
                $(this).attr("placeholder","Обязательно укажите email");
            } else {
                var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
                if(pattern.test($(this).val())) {
                    $.post( "email.php", $( "#order" ).serialize() );
                    $('.popup').addClass('active');
                } else {
                    $(this).css('border', '#e02525 2px solid');
                }
                
                $('#order')[0].reset();
                $(this).attr("placeholder","Email");
                $(this).css('border', '#cacaca 2px solid');
                
            }
        });
    });
    
    //popup
    
    $('.closePopup').on('click',function(){
        $('.popup').removeClass('active');
    });
    
    //prevent #notify clicking
    
    $('#notify').on('click',function(e){
        e.preventDefault(); 
    });

});