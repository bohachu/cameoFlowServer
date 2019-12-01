import 'dart:io';
import 'dart:convert';
import 'package:args/args.dart';
import 'package:shelf/shelf.dart' as shelf;
import 'package:shelf/shelf_io.dart' as io;
import 'package:shelf_static/shelf_static.dart';

// For Google Cloud Run, set _hostname to '0.0.0.0'.
const _hostname = '0.0.0.0';

main(List<String> args) async {
  var parser = ArgParser()..addOption('port', abbr: 'p');
  var result = parser.parse(args);

  // For Google Cloud Run, we respect the PORT environment variable
  var portStr = result['port'] ?? Platform.environment['PORT'] ?? '8080';
  var port = int.tryParse(portStr);

  if (port == null) {
    stdout.writeln('Could not parse port value "$portStr" into a number.');
    // 64: command line usage error
    exitCode = 64;
    return;
  }

  //serve static files
  var handlerStatic = createStaticHandler('webBuild', defaultDocument: 'index.html');

  var server = await io.serve(handlerStatic, _hostname, port);
  print('Serving at http://${server.address.host}:${server.port}');

  //serve http
  /*
  var handler = const shelf.Pipeline()
      .addMiddleware(shelf.logRequests())
      .addHandler(_echoRequest);
  int intPort2=8082;
  var server2 = await io.serve(handler, _hostname, intPort2);
  print('Serving at http://${server2.address.host}:${intPort2}');
  */

  serverHandlePost();
}

shelf.Response _echoRequest(shelf.Request request) {
  return shelf.Response.ok('Request for "${request.url}"');
}

void serverHandlePost() async {
  var server = await HttpServer.bind('0.0.0.0', 8083);
  print('post json to : http://35.221.219.153:8083/');
  await for (var req in server) {
    ContentType contentType = req.headers.contentType;
    HttpResponse response = req.response;

    //CORS
    req.response.headers.add("Access-Control-Allow-Origin", "*");
    req.response.headers.add("Access-Control-Allow-Methods", "POST,GET,DELETE,PUT,OPTIONS");

    if (req.method == 'POST' && contentType?.mimeType == 'application/json' /*1*/) {
      try {
        String content = await utf8.decoder.bind(req).join(); /*2*/
        List lst = jsonDecode(content) as List; /*3*/
        String strFileName = 'webBuild/cdc/json/disease_' + lst[0]['title'] + '.json';
        await File(strFileName).writeAsString(content, mode: FileMode.write);
        req.response
          ..statusCode = HttpStatus.ok
          ..write('Wrote $strFileName.');
      } catch (e) {
        response
          ..statusCode = HttpStatus.internalServerError
          ..write("Exception during file I/O: $e.");
      }
    } else {
      response
        ..statusCode = HttpStatus.methodNotAllowed
        ..write("Unsupported request: ${req.method}.");
    }
    await response.close();
  }
}
