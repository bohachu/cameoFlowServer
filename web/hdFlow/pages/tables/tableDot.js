function funcTableDot(lstData) {
  $(document).ready(function () {
    var table = $('#tableDot').removeAttr('width').DataTable({
      "ordering": false,
      language: {
        url: "datatablesI18n.json"
      },
      stateSave: true,
      destroy: true,
      "scrollX": true,
      "scrollY": true,
      "data": lstData,
      columnDefs: [
        {
          "targets": [0],
          "width": "50px"
        },
        {
          "targets": "_all",
          "width": "24px"
        }
      ]
    });
  });
}

/*
function funcTableDot(lstData) {
  $(document).ready(function () {
    var table = $('#tableDot').removeAttr('width').DataTable({
      language: {
        url: "datatablesI18n.json"
      },
      stateSave: true,
      destroy: true,
      "scrollX": true,
      "scrollY": true,
      "data": lstData,
      fixedColumns: false,
      columnDefs: [
        {width: 1, targets: 0},
        {width: 1, targets: 1},
        {width: 1, targets: 2},
      ],
      columns: [
        {title: "規劃師"},
        {title: "1G"},
        {title: "1Y"},
        {title: "1R"},
        {title: "1B"},
        {title: "2G"},
        {title: "2Y"},
        {title: "2R"},
        {title: "2B"},
        {title: "3G"},
        {title: "3Y"},
        {title: "3R"},
        {title: "3B"},
        {title: "4G"},
        {title: "4Y"},
        {title: "4R"},
        {title: "4B"},
        {title: "5G"},
        {title: "5Y"},
        {title: "5R"},
        {title: "5B"},
        {title: "6G"},
        {title: "6Y"},
        {title: "6R"},
        {title: "6B"},
        {title: "7G"},
        {title: "7Y"},
        {title: "7R"},
        {title: "7B"},
        {title: "8G"},
        {title: "8Y"},
        {title: "8R"},
        {title: "8B"},
        {title: "9G"},
        {title: "9Y"},
        {title: "9R"},
        {title: "9B"},
        {title: "AG"},
        {title: "AY"},
        {title: "AR"},
        {title: "AB"},
        {title: "BG"},
        {title: "BY"},
        {title: "BR"},
        {title: "BB"},
        {title: "CG"},
        {title: "CY"},
        {title: "CR"},
        {title: "CB"},
        {title: "DG"},
        {title: "DY"},
        {title: "DR"},
        {title: "DB"},
        {title: "EG"},
        {title: "EY"},
        {title: "ER"},
        {title: "EB"},
        {title: "FG"},
        {title: "FY"},
        {title: "FR"},
        {title: "FB"},
        {title: "S"},
      ]
    });
  });
}
*/
