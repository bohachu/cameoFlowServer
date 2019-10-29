import 'package:intl/intl.dart';
import 'log.dart';

void main() {
  log(getDate('2019-10-31T04:00:00.000Z'));
}

String getDate(String strIso8601) {
  if (strIso8601 == '') return '';
  var formatter = DateFormat('yyyy-MM-dd'); //DateFormat('yyyy-MM-dd HH:mm:ss');
  var dateTime = DateTime.parse(strIso8601);
  dateTime = dateTime.toLocal();
  return formatter.format(dateTime);
}
