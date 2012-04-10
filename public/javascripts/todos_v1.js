$(document).ready(function(){
  var getValue = function() {
    return $("#todo").val();
  };

  $('#submit').bind('click', function() {
    var text = getValue();
    $('#todos').append('<li class="todo">' + text + '</li>');
  });
});