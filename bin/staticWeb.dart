import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';

void mainStaticWeb() {
  webixDemo();
  stylishDemo();
  adminLteDemo();
}

void webixDemo() {
  var handler =
  createStaticHandler('webix/samples/', defaultDocument: 'index.html');
  print('webixDemo at http://localhost:8080/');
  io.serve(handler, 'localhost', 8080);
}

void stylishDemo() {
  var handler = createStaticHandler(
      'startbootstrap-stylish-portfolio-gh-pages/',
      defaultDocument: 'index.html');
  print('stylishDemo at http://localhost:8081/');
  io.serve(handler, 'localhost', 8081);
}

void adminLteDemo() {
  var handler =
  createStaticHandler('AdminLTE-master/', defaultDocument: 'index.html');
  print('adminLteDemo at http://localhost:8082/');
  io.serve(handler, 'localhost', 8082);
}
