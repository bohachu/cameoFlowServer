import 'package:intl/intl.dart';
import 'log.dart';

void main() {
  log(getDateTime('2019-10-31T04:00:00.000Z'));
}

String getDateTimeSecond(String strIso8601) => reuseDateTime(strIso8601, 'yyyy-MM-dd HH:mm:ss');

String getDateTime(String strIso8601) => reuseDateTime(strIso8601, 'yyyy-MM-dd HH:mm');

String getDate(String strIso8601) => reuseDateTime(strIso8601, 'yyyy-MM-dd');

String reuseDateTime(String strIso8601, String strFormat) {
  if (strIso8601 == '') return '';
  var formatter = DateFormat(strFormat); //DateFormat('yyyy-MM-dd HH:mm:ss');
  var dateTime = DateTime.parse(strIso8601);
  dateTime = dateTime.toLocal();
  return formatter.format(dateTime);
}
