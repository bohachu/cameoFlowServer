import 'log.dart';
import 'dart:io';
import 'dart:async';
import 'dart:convert';

void main() async {
  Map map = await readTableTrelloAjax();
  Map mapThreeLight = convertTableTrelloToThreeLight(map);
}

Future<Map> readTableTrelloAjax() async {
  String str = await File('bss/tableTrello.ajax').readAsString();
  Map map = jsonDecode(str);
  return map;
}

Map convertTableTrelloToThreeLight(Map map) {
  log('tableTrelloToThreeLight.dart:map:$map');
  List lst = map['data'];
  for (int i = 0; i < lst.length; i++) {
    String strName = lst[i][5];
    String strLight = lst[i][6];
    String strStep = lst[i][7];
    if (strName.length > 0) {
      log('name:$strName, light:$strLight, step:$strStep');
    }
  }
}
