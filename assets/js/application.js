$(document).ready(function(){

  $("form").submit(function() { return false; });
  
  $("form .button").on("click", function(){
    var button = $(this);
    var form = button.parents("form");
    button.val('Sending').addClass("disabled");
    $.ajax({
      type: 'POST',
      url: 'http://chadfield.org/csworkflow/assets/mailer/sendmail.php',
      // url: 'assets/mailer/sendmail.php',
      data: form.serialize(),
      success: function(data) {
        processResult(data, button);
      }
    });
  });
  
  var processResult = function(data, button) {
    if(data.match('sent') != null){
      button.val('Sent').removeClass("disabled"); 
    } else {
      button.val('Try again').removeClass("disabled").addClass("alert");
    }
  }
});