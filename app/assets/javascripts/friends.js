var init_friend_lookup = function() {
  $('#friend-lookup-form').on('ajax:before', function() {
    show_spinner();
  });

  $('#friend-lookup-form').on('ajax:success', function(evt, data, status) {
    hide_spinner();
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  });

  $('#friend-lookup-form').on('ajax:error', function(evt, xhr, status, error) {
    hide_spinner();
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('person was not found.');
    init_friend_lookup();
  });
}

$(function() {
  init_friend_lookup();
});
