import 'dart:html';
import "dart:async";
import "package:jsonp/jsonp.dart" as jsonp;

void main() {
// In this example the returned json data would be:
// { "data": "some text" }
  Future<dynamic> result = jsonp.fetch(uri: "https://trello.com/b/SsiyOdgK/%E5%82%A2%E6%AB%A5%E7%92%B0%E4%B8%AD.json?callback=?" //傢廚環中.json
      );
  print('001 1136 testDartJs.dart @@@ 很棒很棒 ');
  String strData = 'strDataInit';
  result.then((var proxy) {
    strData = proxy['data'];
    print(proxy['data']);
    print('002 1136 testDartJs.dart @@@ 很棒很棒 ');
  });

  querySelector('#testDartJs').text = '!!! 1136 Bowen Chiu DART to JS WORK!!! Your Dart app is running.' + strData;
}
