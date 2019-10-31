import 'package:http/http.dart' as http;

Future<String> httpGetTrello() async {
  return httpGet('https://trello.com/b/SsiyOdgK/%E5%82%A2%E6%AB%A5%E7%92%B0%E4%B8%AD.json'); //傢廚環中
}

Future<String> httpGet(String strUrl) async {
  var response = await http.get(strUrl);
  return response.body;
}

