Map toNameStepField(List lst, intFieldIndex) {
  int intNameIndexTodo = 6;
  int intStepIndexTodo = 8;
  Map mapNameStepField = {};
  for (int i = 0; i < lst.length; i++) {
    String strName = lst[i][intNameIndexTodo];
    String strStep = lst[i][intStepIndexTodo];
    if (strName.length > 0 && lst[i][intFieldIndex] != '') {
      var fieldValue = lst[i][intFieldIndex];
      addCounter(mapNameStepField, strName, strStep, fieldValue, intFieldIndex);
    }
  }
  return mapNameStepField;
}

void addCounter(Map mapNameStepField, String strName, String strStep, var varFieldValue, intFieldIndex) {
  int intIncomeIndexTodo = 4;
  int intLightIndexTodo = 7;
  if (mapNameStepField[strName] == null) mapNameStepField[strName] = {};
  if (intFieldIndex == intIncomeIndexTodo) addCounterIncome(mapNameStepField, strName, strStep, varFieldValue);
  if (intFieldIndex == intLightIndexTodo) addCounterLight(mapNameStepField, strName, strStep, varFieldValue);
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
