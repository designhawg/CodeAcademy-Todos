$(document).ready(function(){
  var getValue = function() {
    return $("#todo").val();
  };

  var addTodo = function(todo) {
    var deleteButton = '<span class="delete">X</span>';
    var li = '<li class="todo">' + todo + ' ' + deleteButton + '</li>';

    $('#todos').append(li);
  };

  var deleteTodo = function(todo) {
    todo.remove();
  };

  var getCount = function() {
    return $('#todos').children('li').length;
  };

  var clearCurrentValue = function() {
    $('#todo').val('');
  };

  $('#submit').bind('click', function() {
    var todo = getValue();
    addTodo(todo);

    clearCurrentValue();

    var count = getCount();
    $('#count').html(count);
  });

  $('#todos').on('click', '.delete', function(){
    deleteTodo($(this).parent('li'));

    var count = getCount();
    $('#count').html(count);
  });
});