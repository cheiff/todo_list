var EnterKey = 13;

$(document).ready(function() {
  $('#new-todo').keypress(function(e) {
    if (e.which === EnterKey) {
      $element = $('#main');
      $element.show();
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
    }
  });
});
