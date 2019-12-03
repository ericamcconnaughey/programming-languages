// Back-End (business logic)



// Front-End (user-interface logic)
$(document).ready(function() {
  $("form#lang-genie").submit(function(event) {
    event.preventDefault();

    //var outputOne = parseInt($("#favAnimal").val());
    
    //alert("outputOne");
    //var output = parseInt($("#question1").val());
    
    if (output < 33) {
      $("#elephant").show(); 
      $("#duck").hide();
      $("#capybara").hide();
    } else if (output >= 33 && output <= 100) {
      $("#elephant").hide();
      $("#duck").show();
      $("#capybara").hide();
    } else { 
      $("#elephant").hide();
      $("#duck").hide();
      $("#capybara").show();
    }
  
  })
})