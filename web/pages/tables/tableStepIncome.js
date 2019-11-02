function funcTableStepIncome(lstData) {
  $(document).ready(function () {
    $('#tableStepIncome').DataTable({
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
        {title: "07_報價3"},
        {title: "08_簽約"},
        {title: "09_複量"},
        {title: "10_下單"},
        {title: "11_安裝"},
        {title: "12_收尾"},
        {title: "13_驗收"},
        {title: "14_收款"},
        {title: "15_結案"},
        {title: "16_售後"},
        {title: "總計"},
      ]
    });
  });
}
