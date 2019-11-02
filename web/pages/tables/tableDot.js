function funcTableDot(lstData) {
  $(document).ready(function () {
    var table = $('#tableDot').removeAttr('width').DataTable({
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
        {title: "1"},
        {title: "2"},
        {title: "3"},
        {title: "4"},
        {title: "5"},
        {title: "6"},
        {title: "7"},
        {title: "8"},
        {title: "9"},
        {title: "10"},
        {title: "11"},
        {title: "12"},
        {title: "13"},
        {title: "14"},
        {title: "15"},
        {title: "16"},
        {title: "17"},
        {title: "18"},
        {title: "19"},
        {title: "20"},
        {title: "21"},
        {title: "22"},
        {title: "23"},
        {title: "24"},
        {title: "25"},
        {title: "26"},
        {title: "27"},
        {title: "28"},
        {title: "29"},
        {title: "30"},
        {title: "31"},
        {title: "32"},
        {title: "33"},
        {title: "34"},
        {title: "35"},
        {title: "36"},
        {title: "37"},
        {title: "38"},
        {title: "39"},
        {title: "40"},
        {title: "41"},
        {title: "42"},
        {title: "43"},
        {title: "44"},
        {title: "45"},
        {title: "46"},
        {title: "47"},
        {title: "48"},
        {title: "49"},
      ]
    });
  });
}
