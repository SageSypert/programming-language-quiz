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
      $("#csharp").show();
    } else {
      $("#javascript").show();
    }

    if (attire === "thursday") {
      $("#csharp").show();
    } else if (attire === "friday") {
      $("#ruby").show();
    } else {
      $("#javascript").show();
    }

    event.preventDefault();

    $("#reset").click(function(){
      document.location.reload(true);
    });
  });
});