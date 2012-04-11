var Todo = {
  init: function() {
    this.clickListener();
  },
  
  clickListener: function() {
    var that = this;
    $('#submit').bind('click', function() {
      var value = that.getValue();
      that.addItem(value);
    });
  },
  
  addItem: function(value) {
    var template = '<li>' + value + '</li>';
    $('#todos').append(template);
  },
  
  getValue: function() {
    return $('#todo').val();            
  }
};


$(document).ready(function() {
  Todo.init();
});