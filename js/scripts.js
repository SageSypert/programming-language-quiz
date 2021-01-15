$(document).ready(function() {
  $("form#programming-quiz").submit(function(event) {
    
    let experience = $("input[name='experience']:checked").val();
    let company = $("input[name='company']:checked").val();
    let phone = $("input[name='phone']:checked").val();
    let subject = $("input[name='subject']:checked").val();
    let attire = $("input[name='attire']:checked").val();

    if (experience === 'yes' && company === 'corporate' && phone === 'android' && subject === 'math' && attire === 'thursday') {
      $("#csharp").show();
    } else if (experience === 'no' && company === 'startup' && phone === 'iphone' && subject === 'english' && attire === 'friday') {
      $("#ruby").show();
    } else if (experience === 'yes' && company === 'corporate' && phone === 'iphone' && subject === 'math' && attire === 'friday') {
      $("javascript").show();
    }

    
    event.preventDefault();
  });
});