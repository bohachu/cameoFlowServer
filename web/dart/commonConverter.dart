Map toNameStepField(List lst, String strColumnName) {
  Map mapNameStepField = {};
  for (int i = 0; i < lst.length; i++) {
    String strName = lst[i]['人員'];
    String strStep = lst[i]['階段'];
    if (strName.length > 0 && lst[i][strColumnName] != '' && lst[i]['關案'] == '🏐') {
      var fieldValue = lst[i][strColumnName];
      addCounter(mapNameStepField, strName, strStep, fieldValue, strColumnName);
    }
  }
  return mapNameStepField;
}

void addCounter(Map mapNameStepField, String strName, String strStep, var varFieldValue, String strColumnName) {
  if (mapNameStepField[strName] == null) mapNameStepField[strName] = {};
  if (strColumnName == '金額') addCounterIncome(mapNameStepField, strName, strStep, varFieldValue);
  if (strColumnName == '優先次序') addCounterLight(mapNameStepField, strName, strStep, varFieldValue);
}

void addCounterIncome(Map mapNameStepField, String strName, String strStep, String strFieldValue) {
  if (mapNameStepField[strName][strStep] == null) mapNameStepField[strName][strStep] = 0.0;
  double doubleFieldValue = double.parse(strFieldValue);
  mapNameStepField[strName][strStep] += doubleFieldValue;
}

void addCounterLight(Map mapNameStepField, String strName, String strStep, String strFieldValue) {
  if (mapNameStepField[strName][strStep] == null) mapNameStepField[strName][strStep] = {};
  if (mapNameStepField[strName][strStep][strFieldValue] == null) mapNameStepField[strName][strStep][strFieldValue] = 0;
  mapNameStepField[strName][strStep][strFieldValue] += 1;
}

int howManySteps() {
  return 15;
}
