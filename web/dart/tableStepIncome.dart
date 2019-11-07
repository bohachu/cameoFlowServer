import 'commonConverter.dart';

List tableStepIncome(List lstTableTrello) {
  Map map = toNameStepField(lstTableTrello, '金額');
  List lstTable = toTable(map);
  lstTable = addBottomSum(lstTable);
  lstTable = addRightSum(lstTable);
  lstTable = addBottomSixSum(lstTable);
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
      double d = mapNameStepLight[strName][strStep];
      double d2 = double.parse(d.toStringAsFixed(1));
      lstRow[intStep2Digit - 1] = d2;
    }
    lstRow.insert(0, strName);
    lstOut.add(lstRow);
  }
  return lstOut;
}

List addBottomSum(List lst) {
  int intRowLength = lst.length;
  int intColumnLength = lst[0].length;
  List lstOut = [];
  for (int intColumn = 0; intColumn < intColumnLength; intColumn++) {
    double doubleSum = 0;
    bool isStringSoNoAdd = false;
    for (int intRow = 0; intRow < intRowLength; intRow++) {
      if (lst[intRow][intColumn] is String) {
        lstOut.add('🌞');
        isStringSoNoAdd = true;
        break;
      }
      doubleSum += lst[intRow][intColumn];
    }
    if (isStringSoNoAdd == false) lstOut.add(double.parse(doubleSum.toStringAsFixed(1)));
  }
  lst.add(lstOut);
  return lst;
}

List addRightSum(List lst) {
  int intRowLength = lst.length;
  int intColumnLength = lst[0].length;
  for (int intRow = 0; intRow < intRowLength; intRow++) {
    double doubleSum = 0;
    for (int intColumn = 0; intColumn < intColumnLength; intColumn++) {
      if (lst[intRow][intColumn] is String) {
        continue;
      }
      doubleSum += lst[intRow][intColumn];
    }
    lst[intRow].add(double.parse(doubleSum.toStringAsFixed(1)));
  }
  return lst;
}

List addBottomSixSum(List lst) {
  int intColumnLength = lst[0].length;
  int intSumColumnNum = 7;
  int intRowLength = lst.length;
  double doubleSum = 0;
  for (int intColumn = 0; intColumn < intSumColumnNum; intColumn++) {
    if (lst[intRowLength - 1][intColumn] is String) {
      continue;
    }
    doubleSum += lst[intRowLength - 1][intColumn];
  }
  List lstRow = ['🌻', '', '', '', '', '', double.parse(doubleSum.toStringAsFixed(1))];
  for (int i = 0; i < intColumnLength - 7; i++)
    lstRow.add('');
  lst.add(lstRow);
  return lst;
}
