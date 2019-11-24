import 'dart:io';
import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';
import 'log.dart';

void serverStatic(String strWebPath, int intPort) async {
  String strHost = await getIp();
  var handler = createStaticHandler(strWebPath, defaultDocument: 'index.html');
  log('serverStatic.dart/staticWebServer $strWebPath serve at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}

Future<String> getIp() async {
  for (var interface in await NetworkInterface.list()) {
    for (var addr in interface.addresses) {
      return addr.address;
    }
  }
}
