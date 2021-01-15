$(document).ready(function() {
  $("form#programming-quiz").submit(function(event) {
    
    const experience = $("#experience").val(True);
    

    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", processResults);

    let resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", resetQuiz);

  }
}