import 'package:http/http.dart' as http;

Future<String> httpGetTrello(String strUrl) async {
  return httpGet(strUrl); //傢廚環中
}

Future<String> httpGet(String strUrl) async {
  var response = await http.get(strUrl);
  return response.body;
}

