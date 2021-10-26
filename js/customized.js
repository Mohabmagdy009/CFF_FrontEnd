/*Show and hide menu*/

$(document).ready(function () {
    
    'use strict';
    
    $(window).scroll(function () {
        'use strict';
        
        if ($(window).scrollTop() < 80) {
            
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            
            $('.navbar-default').css({
                
                'background-color': 'rgba(255, 255, 255, 0)'
            
            });
            
        } else {
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
                 $('.navbar-default').css({
                
                'background-color': 'rgba(255, 255, 255, 0.7)',
                'border-color':'#444'
            
            });
            $('.navbar-brand img').css({
                'height': '35px',
                'padding-top': '0px'
            });
            
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
            });
        }
    });
    
    
    
    
});

//add smooth scrolling
$(document).ready(function(){
    
    'use strict';
    $('.nav-item, #scroll-to-top')
  
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function() {
      if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')&& 
      location.hostname == this.hostname
    ) {
  
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  
      if (target.length) {
        
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        
            return false;
      }
    }
  });
    
    
});

/* active menu item on click */
$(document).ready(function(){
    
    'use strict';
    
        $('.navbar-nav li a').click(function(){
            
            'use strict';
            $('.navbar-nav li a').parent().removeClass("active");
            $(this).parent().addClass("active");
            
            
        });
});

//highlight menu item on scroll
$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function(){
        
        'use strict';
        
        $("section").each(function(){
            'use strict';
            var bb = $(this).attr("id"); //About, Contact, Purchase
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if($(window).scrollTop() > grttop && $(window).scrollTop()< grttop + hei){
                
                $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            }else{
                $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
        
    });
    
    
});

// Add counter 
$(document).ready(function(){
    
    $('.counter-num').counterUp({
       delay: 10,
       time: 2000
    });
    });
//Add animation and Initialize woo
$(document).ready(function(){
    
    'use strict';
    new WOW().init();
    
    
});










