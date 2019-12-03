// Back-End (business logic)


// Front-End (user-interface logic)
$(document).ready(function () {
  $("form#lang-genie").submit(function () {
    event.preventDefault();
    var favAnimal = parseInt($("#favAnimal").val());
    console.log(favAnimal); //for debugging
    var wouldYouRather = parseInt($("input:radio[name=iWouldRather]:checked").val());
    console.log(wouldYouRather); //for debugging
    var birthMonth = parseInt($("#birthMonth").val());
    console.log(birthMonth); //for debugging

    var output = favAnimal + wouldYouRather + birthMonth;
    console.log(output);

    if (output < 12) {
      $("#javascript").show(); 
      $("#ruby").hide();
      $("#python").hide();
    } else if (output >= 12 && output <= 20) {
      $("#javascript").hide();
      $("#ruby").show();
      $("#python").hide();
    } else { 
      $("#javascript").hide();
      $("#ruby").hide();
      $("#python").show();
    }

  })
})
