$(document).ready(function() {
  $("#hello").click(function() {
    $("ul#user").prepend("<li>Hello how are you?</li>");
    $("ul#computer").prepend("<li>I'm doing swell.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      $("ul#computer").children("li").first().remove();
    });
   $("ul#computer").children("li").first().click(function() {
     alert("A computer never forgets");
    });
  });
  $("#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye my only friend!</li>");
    $("ul#computer").prepend("<li>I never liked you anyway.</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
      $("ul#computer").children("li").first().remove();
    });
  $("ul#computer").children("li").first().click(function() {
    alert("I told you, a robot NEVER forgets.");
    });
  });
});
