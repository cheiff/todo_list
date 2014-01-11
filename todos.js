var EnterKey = 13;

$(document).ready(function() {
  $('#new-todo').keypress(function(e) {
    if (e.which === EnterKey) {
      $('#main').show();
      $todoList = $('#todo-list');
      $todoList.append(
        "<li>" +
          "<div class='view'>" +
            "<input class='toggle' type='checkbox'>" +
            "<label>" + " " + $('#new-todo').val() + "</label>" +
            "<a class='destroy'></a>" +
          "</div>" +
        "</li>"
      );
      $newListItem = $todoList.find("li").last()
      $newListItem.find('.destroy').on('click', function() {
        $newListItem.remove();
      });
    }
  });
});
