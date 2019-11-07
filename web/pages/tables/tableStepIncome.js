function funcTableStepIncome(lstData) {
  $(document).ready(function () {
    $('#tableStepIncome').DataTable({
      language: {
        url: "datatablesI18n.json"
      },
      stateSave: true,
      destroy: true,
      "scrollX": true,
      "scrollY": true,
      "data": lstData,
      columns: [
        {title: "規劃師"},
        {title: "01_釐清客戶需求"},
        {title: "02_丈量"},
        {title: "03_規劃1"},
        {title: "04_規劃2"},
        {title: "05_報價1"},
        {title: "06_報價2"},
        {title: "07_簽約"},
        {title: "08_複量"},
        {title: "09_下單"},
        {title: "10_安裝"},
        {title: "11_收尾"},
        {title: "12_驗收"},
        {title: "13_收款"},
        {title: "14_結案"},
        {title: "15_售後服務"},
        {title: "總計"},
      ]
    });
  });
}
