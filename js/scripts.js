$(document).ready(function() {
$("form#programmingquiz").submit(function(event) {
  $("#javascript").hide();
  $("#csharp").hide();
  $("#ruby").hide();
  $("#no").hide();

  event.preventDefault();
  
  const experience = parseInt($("input:radio[name=experience]:checked").val());
  const company = parseInt($("input:radio[name=company]:checked").val());
  const phone = parseInt($("input:radio[name=phone]:checked").val());
  const subject = parseInt($("input:radio[name=subject]:checked").val());
  const attire = parseInt($("input:radio[name=attire]:checked").val());

  if (experience + company + phone + subject + attire === 10) {
    $("#csharp").show();
  } else if (experience + company + phone + subject + attire === 9) {
    $("#javascript").show();
  } else if (experience + company + phone + subject + attire === 8) {
    $("#javascript").show();
  } else if (experience + company + phone + subject + attire === 7) {
    $("#ruby").show();
  } else if (experience + company + phone + subject + attire === 6) {
    $("#ruby").show();
  } else if (experience + company + phone + subject + attire === 5) {
    $("#ruby").show();
  }

  // if (company === "corporate") {
  //   $("#csharp").show();
  // } else if (company === "startup") {
  //   $("#ruby").show();
  // } else if (company === "mine") {
  //   $("#javascript").show();
  // }

  // if (phone === "iphone") {
  //   $("#ruby").show();
  // } else if (phone === "android") {
  //   $("#csharp").show();
  // } else if (phone === "neither") {
  //   $("#javascript").show();
  // }

  // if (subject === "english") {
  //   $("#ruby").show();
  // } else if (subject === "math") {
  //   $("#csharp").show();
  // } else if (subject === "science") {
  //   $("#javascript").show();
  // }

  // if (attire === "thursday") {
  //   $("#csharp").show();
  // } else if (attire === "friday") {
  //   $("#ruby").show();
  // } else  if (attire === "everyday") {
  //   $("#javascript").show();
  // }

    $("#reset").click(function(){
    document.location.reload(true);
    });
  });
});