$(document).ready(function() {
  $("form#programming-quiz").submit(function(event) {
    
    const experience = $("input[name='experience']:checked").val();
    const company = $("input[name='company']:checked").val();
    const phone = $("input[name='phone']:checked").val();
    const subject = $("input[name='subject']:checked").val();
    const attire = $("input[name='attire']:checked").val();

    if (experience === "yes") {
      $("#csharp").show();
    } else if (experience === "no") {
      $("#ruby").show();
    } else {
      $("#javascript").show();
    }

    if (company === "corporate") {
      $("#csharp").show();
    } else if (company === "startup") {
      $("#ruby").show();
    } else {
      $("#javascript").show();
    }

    if (phone === "iphone") {
      $("#ruby").show();
    } else if (phone === "android") {
      $("#csharp").show();
    } else {
      $("#javascript").show();
    }

    if (subject === "english") {
      $("#ruby").show();
    } else if (subject === "math") {
      $("#javascript").show();
    } else {
      $("#csharp").show();
    }

    if (attire === "thursday") {
      $("#csharp").show();
    } else if (attire === "friday") {
      $("#ruby").show();
    } else {
      $("#javascript").show();
    }

    event.preventDefault();
  });
});