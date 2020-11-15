$(document).ready(
    function(){
        // // Ramdom hexcode
        // function grd() {
        //     var hex= ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
        //     function f(a) {
        //       for ( var i = 0; i < 6; i++ ) {
        //         var x = Math.round( Math.random() * 15 );
        //         var y = hex[x];
        //         a += y;
        //       }
        //       return a;
        //     }
        // }
        // sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                }else {
                    $('nav').removeClass('sticky');
                }
            }, {
                offset: '800px'
            }
        );
        // Scroll
        $('a').click(function(event){
            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
        });

        // mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);
            
                if($('.mobile-nav-icon').hasClass('fa-bars')){  
                    $('.mobile-nav-icon').addClass('fa-times');
                    $('.mobile-nav-icon').removeClass('fa-bars');
                }
                else{
                    $('.mobile-nav-icon').addClass('fa-bars');
                    $('.mobile-nav-icon').removeClass('fa-times');
                }  
                
                if($('.mobile-nav-icon').hasClass('fa-times')){
                    if($('nav').hasClass('sticky')){
                        // $('nav').removeClass('sticky');
                    }
                    else{
                        $('nav').addClass('sticky');
                    }
                }
                else{
                    // $('nav').removeClass('sticky');
                }
            }
        );
        // // list-color
        // $('.list-icon')(
        //     function(){
        //         if($('.list-icon').hasClass('.list-icon')){
                   
        //         }
        //     }
        // );
            
          
        
    }
);

function f1(){
//     alert('Still updating!');
}
