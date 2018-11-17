(function($) {

    $(document).ready(function() {

        var winH = $(window).height();  // window height
        var headerH = $('header').outerHeight(); //header height

        $(window).scroll(function () { // function fired when page scrolled
           
            var $wrapElem = $('.wrap'); 
            var wrapOffset = $wrapElem.offset();  
            var wrapElemH = $wrapElem.height();
            var $followTextElem = $('.follow-text');
            var followTextElemH = $followTextElem.height();
    
            var contentTop = wrapOffset.top - headerH;
            var contentBot = wrapOffset.top + wrapElemH - followTextElemH - headerH;
            
            if(followTextElemH<(winH - headerH)){
    
              if (($(window).scrollTop() > contentTop ) && ($(window).scrollTop() <= contentBot)){
                $followTextElem.css('top', ($(window).scrollTop()-contentTop));
                $followTextElem.addClass('activElem');
              } else if ( $(window).scrollTop() > contentBot ) {
                $followTextElem.removeClass('activElem');
              } else if ($(window).scrollTop() < contentTop ){
                $followTextElem.css('top', 0);
                $followTextElem.removeClass('activElem');
              }
              
            }

        });

    });
})(jQuery);
