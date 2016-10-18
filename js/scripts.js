$(document).ready(function() {
  $("#hello").click(function() {
    $("ul#user").prepend("<li>Hello how are you?</li>");
    $("ul#computer").prepend("<li>I'm doing swell.");
  });
  $("#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye my only friend!</li>");
    $("ul#computer").prepend("<li>I never liked you anyway.</li>");
  });
});
