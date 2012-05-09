/* Author: Thanh Tran <trongthanh@gmail.com>

*/

$(document).ready(function () {
  $('.stereo-img').bind('mouseover', function () {
    var $this = $(this),
        itv = $this.data('itv');
    if(itv) {
      clearInterval(itv);
    }
    
    itv = setInterval(function () {
      $this.toggleClass('translate-bg');
    }, 150);

    $this.data('itv', itv);
  });

  $('.stereo-img').bind('mouseout', function () {
    clearInterval($(this).data('itv'));
  });
  
});




