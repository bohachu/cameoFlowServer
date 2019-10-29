import 'dart:convert';
import 'package:http/http.dart' as http;
import 'dart:html';
import 'dart:js';
import 'jsTableMain.dart';

void main() async {
  String strOut = await getTrelloTable();
  List lstData = json.decode(strOut)['data'];
  context['console'].callMethod('log', ['001']);
  context.callMethod('funcTableTrello', [JsObject.jsify(lstData)]);
  context['console'].callMethod('log', ['002']);
}