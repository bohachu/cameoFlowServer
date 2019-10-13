import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';
//import 'jclang.dart';

void mainStaticWeb() {
  print("staticWeb.dart/mainStaticWeb");
  webixSamples();
  stylishDemo();
  adminLteDemo();
  //mainJclang();
}

void webixSamples() {
  String strHost='10.140.0.4';
  int intPort=8083;
  var handler =
  createStaticHandler('webix/samples/', defaultDocument: 'index.html');
  print('webixDemo at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}

void stylishDemo() {
  String strHost='127.0.0.1';
  int intPort=8084;
  var handler = createStaticHandler(
      'startbootstrap-stylish-portfolio-gh-pages/',
      defaultDocument: 'index.html');
  print('stylishDemo at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}

void adminLteDemo() {
  String strHost='127.0.0.1';
  int intPort=80;
  var handler =
  createStaticHandler('AdminLTE-master/', defaultDocument: 'index.html');
  print('adminLteDemo at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}
