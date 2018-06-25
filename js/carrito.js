$(document).ready(function(){
  $( "#menos" ).click(function() {
    var menos = $('#cant').val();
    $('#cant').val(menos - 1);
    if (menos < 2) {
      $('#cant').val(1);
    }
  });

  $( "#mas" ).click(function() {
    var mas = parseInt($('#cant').val()) + 1;
    $('#cant').val(mas);
    //$('#precio_total').text("S/" + a );
  });
});
