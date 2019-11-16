import 'package:http/http.dart' as http;
import 'dart:html';

String getTrelloUrl() {
  String strUrl1 = 'trello.com/b/SsiyOdgK/%E5%82%A2%E6%AB%A5%E7%92%B0%E4%B8%AD.json'; //環中店
  String strUrl2 = 'trello.com/b/A6nWPs97/%E5%82%A2%E6%AB%A5%E6%96%87%E5%BF%83.json'; //文心店
  String strUrl = window.location.href;
  if (strUrl.contains(strUrl1)) return 'https://' + strUrl1;
  if (strUrl.contains(strUrl2)) return 'https://' + strUrl2;
  return 'https://' + strUrl1;
}

Future<String> httpGetTrello(String strUrl) async {
  return httpGet(strUrl); //傢廚環中
}

Future<String> httpGet(String strUrl) async {
  var response = await http.get(strUrl);
  return response.body;
}

