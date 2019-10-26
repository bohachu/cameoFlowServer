import 'dart:io';

import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';

import 'log.dart';

void mainStaticWeb() {
  log("staticWeb.dart/mainStaticWeb");
  //webixSamples();
  //stylishDemo();
  //adminLteDemo();
}

void staticWebServer(String strWebPath, int intPort) async {
  String strHost = await getIp();
  var handler = createStaticHandler(strWebPath, defaultDocument: 'index.html');
  log(
      'staticWeb.dart/staticWebServer $strWebPath serve at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}

Future<String> getIp() async {
  for (var interface in await NetworkInterface.list()) {
    for (var addr in interface.addresses) {
      return addr.address;
    }
  }
}

void adminLteDemo() {
  // mapping to public ip: http://104.155.215.104:80 , localhost or 127.0.0.1 can not work
  String strHost = '10.140.0.4';
  int intPort = 80;
  var handler =
  createStaticHandler('AdminLTE-master/', defaultDocument: 'index.html');
  print('adminLteDemo at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}

void webixSamples() {
  String strHost = '10.140.0.4';
  int intPort = 8083;
  var handler =
  createStaticHandler('webix/samples/', defaultDocument: 'index.html');
  print('webixDemo at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}

void stylishDemo() {
  String strHost = '127.0.0.1';
  int intPort = 8084;
  var handler = createStaticHandler(
      'startbootstrap-stylish-portfolio-gh-pages/',
      defaultDocument: 'index.html');
  print('stylishDemo at http://$strHost:$intPort/');
  io.serve(handler, '$strHost', intPort);
}
