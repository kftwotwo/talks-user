$(document).ready(function() {
  $("#hello").click(function() {
    $("ul#user").prepend("<li>Hello how are you?</li>");
    $("ul#computer").prepend("<li>I'm doing swell.");
  });
});
