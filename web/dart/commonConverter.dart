Map toNameStepField(List lstTableTrello, String strColumnName) {
  Map mapNameStepField = {};
  for (int i = 0; i < lstTableTrello.length; i++) {
    String strName = lstTableTrello[i]['人員'];
    String strStep = lstTableTrello[i]['階段'];
    if (strName.length > 0) {
      var fieldValue = lstTableTrello[i][strColumnName]; //可能是：燈號值 green, yellow, red, 或者，可能是：金額數量，也可能是空字串
      addCounter(mapNameStepField, strName, strStep, fieldValue, strColumnName, lstTableTrello[i]['關案']);
    }
  }
  return mapNameStepField;
}

void addCounter(Map mapNameStepField, String strName, String strStep, var varFieldValue, String strColumnName, String strClosedBall) {
  if (mapNameStepField[strName] == null) mapNameStepField[strName] = {};
  if (strColumnName == '金額') addCounterIncome(mapNameStepField, strName, strStep, varFieldValue, strClosedBall);
  if (strColumnName == '優先次序') addCounterLight(mapNameStepField, strName, strStep, varFieldValue, strClosedBall);
}

void addCounterIncome(Map mapNameStepField, String strName, String strStep, String strFieldValue, String strClosedBall) {
  if (strClosedBall == '🎱') return;
  if (mapNameStepField[strName][strStep] == null) mapNameStepField[strName][strStep] = 0.0;
  if (strFieldValue == '') strFieldValue = '0';
  double doubleFieldValue = double.parse(strFieldValue);
  mapNameStepField[strName][strStep] += doubleFieldValue;
}

void addCounterLight(Map mapNameStepField, String strName, String strStep, String strFieldValue, String strClosedBall) {
  if (strClosedBall == '🎱') {
    strFieldValue = 'closed';
  }
  if (mapNameStepField[strName][strStep] == null) mapNameStepField[strName][strStep] = {};
  if (mapNameStepField[strName][strStep][strFieldValue] == null) mapNameStepField[strName][strStep][strFieldValue] = 0;
  mapNameStepField[strName][strStep][strFieldValue] += 1;
}

int howManySteps() {
  return 15;
}
