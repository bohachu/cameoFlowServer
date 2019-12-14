import 'dart:html';
String replaceAll(String strQuerySelector, Map map) {
  String strContent=querySelector(strQuerySelector).outerHtml;
  map.forEach((k, v) {
    strContent = strContent.replaceAll(k, v);
  });
  return strContent;
}
