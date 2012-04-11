var Todo = {
  init: function() {
    this.setupAddListener();
    this.setupDeleteListener();
  },
  
  setupAddListener: function() {
    var that = this;
    $('#submit').bind('click', function() {
      var value = that.getValue();
      that.addTodo(value);
      that.clearValue();
      that.insertCount();
    });
  },

  setupDeleteListener: function() {
    var that = this;
    $('#todos').on('click', '.delete', function() {
      var li = $(this).parent('li');
      that.deleteTodo(li);
      that.insertCount();
    });
  },

  constructDeleteButton: function() {
    return ' <span class="delete">X</span>';
  },
  
  addTodo: function(value) {
    var deleteButton = this.constructDeleteButton();
    var template = '<li>' + value + deleteButton + '</li>';
    $('#todos').append(template);
  },

  deleteTodo: function(todo) {
    todo.remove();
  },
  
  insertCount: function() {
    $('#count').html(this.getCount());
  },

  getValue: function() {
    return $('#todo').val();          
  },

  clearValue: function() {
    $('#todo').val('');
  },

  getCount: function() {
    return $('#todos').children('li').length;
  }
};

$(function() {
  Todo.init();
});