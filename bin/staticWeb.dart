import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';
//import 'jclang.dart';

void mainStaticWeb() {
  //webixSamples();
  //stylishDemo();
  adminLteDemo();
  //mainJclang();
  print("hihi");
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
  print('adminLteDemo at http://104.155.215.104:80/');
  io.serve(handler, '104.155.215.104', 80);
}
