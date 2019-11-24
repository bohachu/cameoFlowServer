import 'dart:io';
import 'dart:async';
import 'dart:convert';

Future<Map> readTableTrelloAjax() async {
  String str = await File('bss/tableTrello.json').readAsString();
  Map map = jsonDecode(str);
  return map;
}
