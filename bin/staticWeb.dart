import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';

void mainStaticWeb() {
  webixDemo();
  stylishDemo();
}

void webixDemo() {
  var handler = createStaticHandler(
      'webix/samples/', defaultDocument: 'index.html');
  print('webixDemo web server at http://localhost:8080/');
  io.serve(handler, 'localhost', 8080);
}

void stylishDemo() {
  var handler = createStaticHandler(
      'startbootstrap-stylish-portfolio-gh-pages/',
      defaultDocument: 'index.html');
  print('stylishDemo web server at http://localhost:8081/');
  io.serve(handler, 'localhost', 8081);
}
