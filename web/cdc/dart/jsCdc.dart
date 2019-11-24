import 'dart:convert';
import 'dart:js';
import 'dart:html';
import 'package:http/http.dart';
import '../../common/dart/httpGet.dart';

void main() async {
  window.console.log('jsCdc.dart 001');
  String strJson = await httpGet('../json/reportDisease登革熱.json');
  List lst = jsonDecode(strJson);
  window.console.log(lst);
}

/*
void updateTables(lstTrelloTable) {
  context.callMethod('funcReportDiseaseJsonToHtml', [JsObject.jsify(lstTrelloTable)]);
}
*/
