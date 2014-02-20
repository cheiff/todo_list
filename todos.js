var EnterKey = 13;

var todosArray = [];

var todoSave = function(todo){
  todosArray.push([{"value":todo},{"checked":false}]);
  var index = todosArray.length-1;
  console.log(todosArray[index]);
  dumpArray();
  return todosArray.length;
}

var todoLoad = function(){

}

var todoStateSave = function(todo){

}
var todoDelete = function(id){
  deleteid = parseInt(id)-1;
  todosArray.splice(deleteid,1);  
  dumpArray();
}
var dumpArray = function(){
  var myArray = todosArray.splice();
  todosArray.forEach(function(x,idx){
      console.log('['+idx+' => '+JSON.stringify(x)+']');
  });
}

$(document).ready(function() {
  $('#new-todo').keypress(function(e) {
    var todoValue = $('#new-todo').val();
    if (e.which === EnterKey && todoValue !='') {
      $('#main').show();
      $todoList = $('#todo-list');
      var id = todoSave(todoValue);
      if (id){
        $todoList.append(
          "<li id="+id+">" +
            "<div class='view'>" +
              "<input class='toggle' type='checkbox'>" +
              "<label>" + " " + $('#new-todo').val() + "</label>" +
              "<a class='destroy'></a>" +
            "</div>" +
          "</li>"
        );
      }

      //remove
      $todoList.find('li').each(function() {
        var $currentListItem = $(this);
        $currentListItem.find('.destroy').on('click', function(e) {
          $currentListItem = $(this).closest('li');
          var deleteid = $currentListItem.attr('id');
          $currentListItem.remove();
          todoDelete(deleteid);
        });

        //toggle checked
        $currentListItem.find('.toggle').on('click', function(e) {
          var $currentListItemLabel = $(this).closest('li').find('label');
          $currentListItemLabel.css('text-decoration', 'line-through');
        });
      });
    //clear form
    $('#new-todo').val('');
    } // end if
  });
});

