@JS()
library jquery;

import 'package:http/http.dart' as http;
import 'dart:html';
import 'package:js/js.dart';

final String globalStr2 = "wawa dart";

void main() async {
  print('testDartJs.dart/001:::${DateTime
      .now()
      .second}');
  http.Response response = await http.get('https://trello.com/b/SsiyOdgK/%E5%82%A2%E6%AB%A5%E7%92%B0%E4%B8%AD.json');
  querySelector('#testDartJs').text = '!!! 1029 1640 Bowen Chiu DART to JS WORK!!! Your Dart app is running.';
  print('testDartJs.dart/002:::${DateTime
      .now()
      .second}');
}
