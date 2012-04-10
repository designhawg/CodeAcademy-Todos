var Todo = {
    init: function() {
      console.log('init todos');            
    },
    
    clickListener: function() {
        
        $("#submit").bind('click', function(e) {
          e.preventDefault();
          var value = $("#todo").val();
          
        });        
    },
    
    addItem: function(value) {
      var template = "<li>"+value+"</li>";
      $("#todos").html(template);
    },
    
    getValue: function() {
      var value = $("#todo").val();
      return value;            
    }
};