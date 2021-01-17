$(document).ready(function() {
  $("form#programming-quiz").submit(function(event) {

    const experience = $("input:radio[name=experience]:checked").val();
    const company = $("input:radio[name=company]:checked").val();
    const phone = $("input:radio[name=phone]:checked").val();
    const subject = $("input:radio[name=subject]:checked").val();
    const attire = $("input:radio[name=attire]:checked").val();

    if (experience === "yes") {
      $("#csharp").show();
      document.getElementById("csharp").style.display = "none";
    } else if (experience === "no") {
      $("#ruby").show();
      document.getElementById("ruby").style.display = "none";
    } else {
      $("#javascript").show();
      document.getElementById("javascript").style.display = "none";
    }

    if (company === "corporate") {
      $("#csharp").show();
      document.getElementById("csharp").style.display = "none";
    } else if (company === "startup") {
      $("#ruby").show();
      document.getElementById("ruby").style.display = "none";
    } else {
      $("#javascript").show()
      document.getElementById("javascript").style.display = "none";
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