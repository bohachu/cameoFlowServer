import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_proxy/shelf_proxy.dart';

void main() async {
  var server = await shelf_io.serve(
    proxyHandler("https://www.google.com/"),
    'localhost',
    8080,
  );

  print('Proxying at http://${server.address.host}:${server.port}');
}