var EnterKey = 13;
var count = 1;
var ls = $.localStorage();
ls.clear();

var todoSave = function(todo){
  var todoObject = {
      "value": todo,
      "checked": false
  } 
  ls.setItem('id-'+count,JSON.stringify(todoObject));
  dumpLocalstorage();
  return count++;
}

var todoToggle = function(id){
  console.log(id);
  var currentTodoString =  $.localStorage('id-'+id);
  console.log(currentTodoString);
  console.log(currentTodoString.checked);
  var currentTodo = JSON.parse(currentTodoString);
  console.log(currentTodo.checked);
  if (currentTodo.checked){
    currentTodo.checked = false;
  } else {
    currentTodo.checked = true;
  }
  console.log(currentTodo.checked);
  ls.setItem('id-'+id,JSON.stringify(currentTodo));
  dumpLocalstorage();
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
var dumpLocalstorage = function(){
  for (var i = 1; i < count+1; i++){
    var line = ls.getItem('id-'+i);
    if(typeof(line)==='string')
      console.log(JSON.stringify(line));

  }
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
          ls.removeItem('id-'+deleteid);
          dumpLocalstorage();
        });

        //toggle checked
        $currentListItem.find('.toggle').on('click', function(e) {
          var $currentListItemLabel = $(this).closest('li').find('label');
//          $currentListItemLabel.css('text-decoration', 'line-through');
          var $currentId = $(this).closest('li').attr('id');
          console.log($currentId);
          $(this).prop('disabled', true);
          todoToggle($currentId);
          $(this).prop('disabled', false);
          $currentListItemLabel.toggleClass('done');

        });
      });
    //clear form
    $('#new-todo').val('');
    } // end if
  });
});

