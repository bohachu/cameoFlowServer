// /* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    '<td>備註1：</td>' +
    '<td>這裡要放備註001這裡要放備註001這裡要放備註001</td>' +
    '</tr>' +
    '<tr>' +
    '<td>備註2：</td>' +
    '<td>這裡要放備註002這裡要放備註002這裡要放備註002</td>' +
    '</tr>' +
    '<tr>' +
    '<td>備註3：</td>' +
    '<td>這裡要放備註003這裡要放備註003這裡要放備註003</td>' +
    '</tr>' +
    '</table>';
}

function funcTableTrello(lstData) {
  $(document).ready(function () {
    var table = $('#tableTrello').DataTable({
      stateSave: true,
      destroy: true,
      "scrollX": true,
      "scrollY": true,
      "data": lstData,
      columns: [
        {
          title: "id",
          "className": 'details-control',
          "orderable": false,
          "data": null,
          "defaultContent": ''
        },
        {title: "客源"},
        {title: "起始日"},
        {title: "案件名稱"},
        {title: "金額"},
        {title: "交期"},
        {title: "人員"},
        {title: "優先次序"},
        {title: "階段"},
        {title: "產品類別"},
      ]
    });

    // Add event listener for opening and closing details
    $('#tableTrello tbody').on('click', 'td.details-control', function () {
      var tr = $(this).closest('tr');
      var row = table.row(tr);

      if (row.child.isShown()) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
      } else {
        // Open this row
        row.child(format(row.data())).show();
        tr.addClass('shown');
      }
    });

  });
}
