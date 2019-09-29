import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';

void mainStaticWeb() {
  var handler = createStaticHandler('webix', defaultDocument: 'index.html');

  io.serve(handler, 'localhost', 8080);
}
