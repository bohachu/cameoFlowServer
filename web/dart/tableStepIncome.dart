import 'commonConverter.dart';

List tableStepIncome(List lstTableTrello) {
  int intStepIncomeColumnNum = 4;
  Map map = toNameStepField(lstTableTrello, intStepIncomeColumnNum);
  List lstTable = toTable(map);
  lstTable = addBottomSum(lstTable);
  lstTable = addRightSum(lstTable);
  return lstTable;
}

List toTable(Map mapNameStepLight) {
  int intStepNum = 16;
  List lstOut = [];
  for (var e in mapNameStepLight.entries) {
    String strName = e.key;
    List lstRow = [];
    for (int i = 0; i < intStepNum; i++) lstRow.add(0);
    Map mapSteps = e.value;
    for (String strStep in mapSteps.keys) {
      int intStep2Digit = int.parse(strStep.substring(0, 2));
      lstRow[intStep2Digit - 1] = mapNameStepLight[strName][strStep];
    }
    lstRow.insert(0, strName);
    lstOut.add(lstRow);
  }
  return lstOut;
}

final String i18nSum = "總計";

List addBottomSum(List lst) {
  int intRowLength = lst.length;
  int intColumnLength = lst[0].length;
  List lstOut = [];
  for (int intColumn = 0; intColumn < intColumnLength; intColumn++) {
    int intSum = 0;
    bool isStringSoNoAdd = false;
    for (int intRow = 0; intRow < intRowLength; intRow++) {
      if (lst[intRow][intColumn] is String) {
        lstOut.add(i18nSum);
        isStringSoNoAdd = true;
        break;
      }
      intSum += lst[intRow][intColumn];
    }
    if (isStringSoNoAdd == false) lstOut.add(intSum);
  }
  lst.add(lstOut);
  return lst;
}

List addRightSum(List lst) {
  int intRowLength = lst.length;
  int intColumnLength = lst[0].length;
  for (int intRow = 0; intRow < intRowLength; intRow++) {
    int intSum = 0;
    for (int intColumn = 0; intColumn < intColumnLength; intColumn++) {
      if (lst[intRow][intColumn] is String) {
        continue;
      }
      intSum += lst[intRow][intColumn];
    }
    lst[intRow].add(intSum);
  }
  return lst;
}
