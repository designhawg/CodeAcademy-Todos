var Todo = {
  init: function() {
    this.setupAddListener();
    this.setupDeleteListener();
  },
  
  setupAddListener: function() {
    var that = this;
    $('#submit').bind('click', function() {
      that.addTodoHandler();
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

  addTodoHandler: function() {
    var value = this.getValue();

    if ( this.isValid(value) ) {
      if ( this.currentError() ) {
        this.removeError();
      }
      this.addTodo(value);
      this.clearValue();
      this.insertCount();
    }
    else {
      this.displayError();
    }
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

  removeError: function() {
    $('#todo').removeClass('error');
    this.toggleError();
  },

  displayError: function() {
    $('#todo').addClass('error');
    this.toggleError();
  },

  currentError: function() {
    return this._currentError;
  },

  toggleError: function() {
    return this._currentError = ( this._currentError ? false : true );
  },

  isValid: function(input) {
    return input.match(/\S/) ? true : false;
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