// /* Formatting function for row details - modify as you need */
function format(d) {
  // `d` is the original data object for the row
  return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    '<td>備註1：</td>' +
    '<td>' + d.備註1 + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>備註2：</td>' +
    '<td>' + d.備註2 + '</td>' +
    '</tr>' +
    '<tr>' +
    '<td>備註3：</td>' +
    '<td>' + d.備註3 + '</td>' +
    '</tr>' +
    '</table>';
}

/*
"id": "1",
  "客源": "設計師",
  "起始日": "2019/11/02",
  "案件名稱": "Ken Huang for Bowen Chiu case",
  "金額": "2005023",
  "交期": "2019/12/05",
  "人員": "Bowen Chiu",
  "優先次序": "yellow",
  "階段": "01_尚未簽約",
  "產品類別": "桌子"
*/
$(document).ready(function () {
  var table = $('#tableTrelloChildRows').DataTable({
    "ajax": "tableTrelloChildRows.json",
    "columns": [
      {
        "className": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": ''
      },
      {"data": "客源"},
      {"data": "起始日"},
      {"data": "案件名稱"},
      {"data": "金額"},
      {"data": "交期"},
      {"data": "人員"},
      {"data": "優先次序"},
      {"data": "階段"},
      {"data": "產品類別"},
    ],
    "order": [[1, 'asc']]
  });

  // Add event listener for opening and closing details
  $('#tableTrelloChildRows tbody').on('click', 'td.details-control', function () {
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
