import 'dart:html';
import '../../common/dart/httpGet.dart';

void main() async {
  Map map = getUriParameters();
  String strMemo=map['strMemo'];
  strMemo=Uri.decodeFull(strMemo);
  querySelector('#codingMemo').setInnerHtml("${strMemo}", treeSanitizer: NodeTreeSanitizer.trusted);
}
