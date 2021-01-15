$(document).ready(function() {
  $("form#programming-quiz").submit(function(event) {

    const experience = true;
    const company = true;
    const phone = true;
    const subject = true;
    const attire = true;
    
    let result = true
    
    if (experience && company && phone && subject && attire == "true") {
      $("#csharp").show();
    }
    event.preventDefault();
  });
});