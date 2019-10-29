Map toNameStepField(List lst, intFieldIndex) {
  Map mapNameStepField = {};
  for (int i = 0; i < lst.length; i++) {
    String strName = lst[i][5];
    String strStep = lst[i][7];
    if (strName.length > 0 && lst[i][intFieldIndex] != '') {
      var fieldValue = lst[i][intFieldIndex];
      addCounter(mapNameStepField, strName, strStep, fieldValue, intFieldIndex);
    }
  }
  return mapNameStepField;
}

void addCounter(Map mapNameStepField, String strName, String strStep, var varFieldValue, intFieldIndex) {
  if (mapNameStepField[strName] == null) mapNameStepField[strName] = {};
  if (intFieldIndex == 3) addCounterIncome(mapNameStepField, strName, strStep, varFieldValue);
  if (intFieldIndex == 6) addCounterLight(mapNameStepField, strName, strStep, varFieldValue);
}

void addCounterIncome(Map mapNameStepField, String strName, String strStep, String strFieldValue) {
  if (mapNameStepField[strName][strStep] == null) mapNameStepField[strName][strStep] = 0;
  int intFieldValue = int.parse(strFieldValue);
  mapNameStepField[strName][strStep] += intFieldValue;
}

void addCounterLight(Map mapNameStepField, String strName, String strStep, String strFieldValue) {
  if (mapNameStepField[strName][strStep] == null) mapNameStepField[strName][strStep] = {};
  if (mapNameStepField[strName][strStep][strFieldValue] == null) mapNameStepField[strName][strStep][strFieldValue] = 0;
  mapNameStepField[strName][strStep][strFieldValue] += 1;
}
