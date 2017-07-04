var init_stock_lookup = function() {
  $('#stock-lookup-form').on('ajax:before', function() {
    show_spinner();
  });

  $('#stock-lookup-form').on('ajax:success', function(evt, data, status) {
    hide_spinner();
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  });

  $('#stock-lookup-form').on('ajax:error', function(evt, xhr, status, error) {
    hide_spinner();
    $('#stock-lookup-results').replaceWith(' ');
    $('#stock-lookup-errors').replaceWith('Stock was not found.');
    init_stock_lookup();
  });
}

$(function() {
  init_stock_lookup();
});
