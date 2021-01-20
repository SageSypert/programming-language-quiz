$(document).ready(function() {
  $("form#programmingquiz").submit(function(event) {
    $("#javascript").hide();
    $("#csharp").hide();
    $("#ruby").hide();
  
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
  
      $("#reset").click(function(){
      document.location.reload(true);
      });
    });
  });