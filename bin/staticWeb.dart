import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';
import 'trelloData.dart';

void mainStaticWeb() {
  webixSamples();
  stylishDemo();
  adminLteDemo();
  trelloDataHandler();
}

/*
add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
add 起始日 /cards/customFieldItems/value/date
add 案件名稱 /cards/name
add 金額 /cards/customFieldItems/value/number
add 交期 /cards/due
add 人員 /cards/customFieldItems/idValue idCustomField=="*f3f0"
add 優先次序 /cards/labels/color
add 客戶 /cards/customFieldItems/value/text
add 階段 /cards/idList
add 產品類別 /cards/customFieldItems/idValue idCustomField=="*a129"
replace /cards/customFieldItems/idValue
/cards/customFields/options/value/text ../id
*/
void trelloDataHandler(){
  Map mapJson=getTrelloData();
  String strJclangCommandRow='add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"';
  jclangCommandDispatcher(strJclangCommandRow,mapJson);

}

void jclangCommandDispatcher(String strJclangCommandRow, Map mapJson){
  List lstJclangCommandRow=strJclangCommandRow.split(' ');
  if(lstJclangCommandRow[0]=='add'){
    jclangAdd(lstJclangCommandRow[1],lstJclangCommandRow[2],lstJclangCommandRow[3],mapJson);
  }
}

void jclangAdd(strColumnName,strSelect,strWhere,Map mapJson){
  print('staticWeb.dart/jclangAdd/');
}

void webixSamples() {
  var handler =
  createStaticHandler('webix/samples/', defaultDocument: 'index.html');
  print('webixDemo at http://localhost:8083/');
  io.serve(handler, 'localhost', 8083);
}

void stylishDemo() {
  var handler = createStaticHandler(
      'startbootstrap-stylish-portfolio-gh-pages/',
      defaultDocument: 'index.html');
  print('stylishDemo at http://localhost:8084/');
  io.serve(handler, 'localhost', 8084);
}

void adminLteDemo() {
  var handler =
  createStaticHandler('AdminLTE-master/', defaultDocument: 'index.html');
  print('adminLteDemo at http://localhost:8085/');
  io.serve(handler, 'localhost', 8085);
}
