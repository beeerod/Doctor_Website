$(document).ready(function() {

  $('.js--wp-1').waypoint(function(direction) {
         $('.js--wp-1').addClass('animated fadeInUp');
     }, {
         offset: '50%'

         });

         $('.js--wp-2').waypoint(function(direction) {
                $('.js--wp-2').addClass('animated fadeIn');
            }, {
                offset: '70%'

                });
});
