import 'dart:html';

void main() {
  window.console.log('jsJsonEditor.dart/main()');
}

/*
Map map = getUriParameters();
String strDiseaseFile = map['strDiseaseFile'];
String strJson = '';
if (strDiseaseFile == null) {
strDiseaseFile = '../json/disease_登革熱.json';
//strDiseaseFile = '../json/disease_梅毒.json';
//strDiseaseFile='../json/disease_鼠疫.json';
} else {
strDiseaseFile = Uri.decodeFull(strDiseaseFile);
}
window.console.log('jsCdc.dart/strDiseaseFile: $strDiseaseFile');
String strUri='http://35.221.219.153:8080/cdc/pages/reportDisease.html?strDiseaseFile=../json/disease_登革熱.json';
strJson = await httpGet(strUri);
List lstJson = jsonDecode(strJson);
context.callMethod('funcSetJsonEditor', [JsObject.jsify(lstJson)]);
*/
