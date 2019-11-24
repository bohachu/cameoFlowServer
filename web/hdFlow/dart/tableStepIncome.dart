import 'commonConverter.dart';
import 'sum.dart';

List tableStepIncome(List lstTableTrello) {
  Map mapNameStepMoney = toNameStepField(lstTableTrello, '金額');
  List lstTable = toTable(mapNameStepMoney);
  lstTable = addBottomSum(lstTable);
  lstTable = addRightSum(lstTable);
  lstTable = addBottomSixSum(lstTable);
  return lstTable;
}

List toTable(Map mapNameStepMoney) {
  int intStepNum = howManySteps();
  List lstOut = [];
  for (var e in mapNameStepMoney.entries) {
    String strName = e.key;
    List lstRow = [];
    for (int i = 0; i < intStepNum; i++) lstRow.add(0);
    Map mapSteps = e.value;
    for (String strStep in mapSteps.keys) {
      int intStep2Digit = int.parse(strStep.substring(0, 2));
      double d = mapNameStepMoney[strName][strStep];
      double d2 = double.parse(d.toStringAsFixed(1));
      lstRow[intStep2Digit - 1] = d2;
    }
    lstRow.insert(0, strName);
    lstOut.add(lstRow);
  }
  return lstOut;
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
  for (int i = 0; i < intColumnLength - 7; i++) lstRow.add('');
  lst.add(lstRow);
  return lst;
}
