import 'dart:convert';
import 'dart:io';
import 'httpGet.dart';

Map flatten_json(var lstOrMap) {
  Map mapOut = {};
  void flatten(var lstOrMap2, String strName) {
    if (lstOrMap2 is Map) {
      lstOrMap2.forEach((strKey, v) => flatten(lstOrMap2[strKey], strName + strKey + '_'));
    } else if (lstOrMap2 is List) {
      int i = 0;
      lstOrMap2.forEach((lst) {
        flatten(lst, strName + i.toString() + '_');
        i += 1;
      });
    } else {
      mapOut[strName.substring(0, strName.length - 1)] = lstOrMap2;
    }
  }

  flatten(lstOrMap, '');
  return mapOut;
}

Future writeJson(String strTag, Map mapJson) async {
  List lstCards = mapJson[strTag];
  Map map = flatten_json(lstCards);
  await File('web/dart/json_' + strTag + '.dart').writeAsString('Map json_' + strTag + '=' + json.encode(map) + ';');
}

Future main() async {
  String strJson = await httpGetTrello();
  Map mapJson = json.decode(strJson);
  await writeJson('cards', mapJson);
  await writeJson('actions', mapJson);
  await writeJson('lists', mapJson);
}
