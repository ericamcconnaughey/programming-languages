$(document).ready(function(event) {
  $("form.choose-animal").submit(function(event) {
    event.preventDefault();

    var chosenAnimal = $("#choose").val();
    
    if (chosenAnimal === "elephant") {
      $("#elephant").show(); 
      $("#duck").hide();
      $("#capybara").hide();
    } else if (chosenAnimal === "duck") {
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