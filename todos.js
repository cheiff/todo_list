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

      $todoList.find('li').each(function() {
        var $currentListItem = $(this);

        $currentListItem.find('.destroy').on('click', function(e) {
          $currentListItem = $(this).closest('li');

          $currentListItem.remove();
        });

        $currentListItem.find('.toggle').on('click', function(e) {
          var $currentListItemLabel = $(this).closest('li').find('label');

          $currentListItemLabel.css('text-decoration', 'line-through');
        });
      });
    } // end if
  });
});

