$(document).ready(function(){
  var getValue = function() {
    return $("#todo").val();
  };

  var getCount = function() {
    return $("#todos").children('li').length;
  };

  var clearCurrentValue = function() {
    $("#todo").val('');
  };

  $('#submit').bind('click', function() {
    var text = getValue();
    $('#todos').append('<li class="todo">' + text + '</li>');

    clearCurrentValue();

    var count = getCount();
    $("#count").html(count);
  });
});