function funcTableTrello(lstData) {
  $(document).ready(function () {
    $('#tableTrello').DataTable({
      stateSave: true,
      destroy: true,
      "scrollX": true,
      "scrollY": true,
      "data": lstData,
      columns: [
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
  });
}
