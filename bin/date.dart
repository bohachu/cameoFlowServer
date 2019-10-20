import 'package:intl/intl.dart';

main() {
  /*
  var now = new DateTime.now();
  var formatter = new DateFormat('yyyy-MM-dd');
  String formatted = formatter.format(now);
  print(formatted); // something like 2013-04-20

  It's a part of ISO-8601 date representation. It's incomplete because a complete date representation in this pattern should also contains the date:
  2015-03-04T00:00:00.000Z
  */

  var formatter = DateFormat('yyyy-MM-dd HH:mm:ss');
  var dateTime = DateTime.parse("2019-10-31T04:00:00.000Z");
  dateTime = dateTime.toLocal();
  print(formatter.format(dateTime));
}
