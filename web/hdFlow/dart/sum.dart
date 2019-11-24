List addBottomSum(List lst) {
  int intRowLength = lst.length;
  int intColumnLength = lst[0].length;
  List lstOut = [];
  for (int intColumn = 0; intColumn < intColumnLength; intColumn++) {
    double doubleSum = 0;
    for (int intRow = 0; intRow < intRowLength; intRow++) {
      if (intColumn == 0) {
        lstOut.add('🌞');
        break;
      }
      if (lst[intRow][intColumn] is double) {
        doubleSum += lst[intRow][intColumn];
      }
      if (lst[intRow][intColumn] is String) {
        doubleSum += lst[intRow][intColumn].length / 2;
      }
    }
    if (intColumn != 0) lstOut.add(double.parse(doubleSum.toStringAsFixed(1)));
  }
  lst.add(lstOut);
  return lst;
}

List addRightSum(List lst) {
  int intRowLength = lst.length;
  int intColumnLength = lst[0].length;
  for (int intRow = 0; intRow < intRowLength; intRow++) {
    double doubleSum = 0;
    for (int intColumn = 1; intColumn < intColumnLength; intColumn++) {
      // intColumn start from 1
      if (lst[intRow][intColumn] is double) {
        doubleSum += lst[intRow][intColumn];
      }
      if (lst[intRow][intColumn] is String) {
        doubleSum += lst[intRow][intColumn].length / 2;
      }
    }
    lst[intRow].add(double.parse(doubleSum.toStringAsFixed(1)));
  }
  return lst;
}
