$(function() {
    let list_ids = [];
    let list_names = [];
    $('li input').on('click', function (data) {
      const id = $(this).data('id');
      if ($(this).is(':checked')) {
        list_ids.push(id);
        list_names.push($(this).data('name'));
      } else {
        const idx = list_ids.indexOf(id);
        if (idx !== -1) {
          list_ids.splice(idx, 1);
          list_names.splice(idx, 1);
        }
      }
      $('.amenities h4').text(String(lis_n));
    });
});