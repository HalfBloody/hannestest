

$( document ).ready(function() {
    $("#krasser_link").click(function() {
    if ($('img').hasClass('hidden')) {
      $('img').removeClass('hidden')
      $('#krasser_link').text('Bilder ausblenden')

    } else {
      $('img').addClass('hidden')
      $('#krasser_link').text('Bilder anzeigen')
        }
      });
});

