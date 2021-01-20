$(document).ready(function() {
  $("form#programmingquiz").submit(function(event) {
    
    const experience = $("input:radio[name=experience]:checked").val();
    const company = $("input:radio[name=company]:checked").val();
    const phone = $("input:radio[name=phone]:checked").val();
    const subject = $("input:radio[name=subject]:checked").val();
    const attire = $("input:radio[name=attire]:checked").val();

    if (experience === "yes") {
      $("#csharp").show();
    } else if (experience === "no") {
      $("#ruby").show();
    } else if (experience === "some") {
      $("#javascript").show();
    }

    if (company === "corporate") {
      $("#csharp").show();
    } else if (company === "startup") {
      $("#ruby").show();
    } else if (company === "mine") {
      $("#javascript").show();
    }

    if (phone === "iphone") {
      $("#ruby").show();
    } else if (phone === "android") {
      $("#csharp").show();
    } else if (phone === "neither") {
      $("#javascript").show();
    }

    if (subject === "english") {
      $("#ruby").show();
    } else if (subject === "math") {
      $("#csharp").show();
    } else if (subject === "science") {
      $("#javascript").show();
    }

    if (attire === "thursday") {
      $("#csharp").show();
    } else if (attire === "friday") {
      $("#ruby").show();
    } else  if (attire === "everyday") {
      $("#javascript").show();
    }

    event.preventDefault();

    $("#reset").click(function(){
      document.location.reload(true);
    });
  });
});