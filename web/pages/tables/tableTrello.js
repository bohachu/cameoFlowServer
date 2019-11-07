// /* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    '<td>備註1：</td>' +
    '<td>' + d['備註1'] + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>備註2：</td>' +
    '<td>' + d['備註2'] + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>備註3：</td>' +
    '<td>' + d['備註3'] + '</td>' +
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
          data: "id",
          "className": 'details-control',
          "orderable": false,
          "data": null,
          "defaultContent": ''
        },
        {data: "客源"},
        {data: "起始日"},
        {data: "案件名稱"},
        {data: "金額"},
        {data: "交期"},
        {data: "人員"},
        {data: "優先次序"},
        {data: "階段"},
        {data: "產品類別"},
        {data: "關案"},
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
