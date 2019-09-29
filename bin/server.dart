import 'dart:io';

import 'package:args/args.dart';
import 'package:shelf/shelf.dart' as shelf;
import 'package:shelf/shelf_io.dart' as io;

import 'fetchTrello.dart';
import 'staticWeb.dart';

// For Google Cloud Run, set _hostname to '0.0.0.0'.
const _hostname = 'localhost';

void main(List<String> args) async {
  mainStaticWeb();
}

void mainOriginalShelf(List<String> args) async {
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
  var handler = const shelf.Pipeline()
      .addMiddleware(shelf.logRequests())
      .addHandler(_echoRequest);

  var server = await io.serve(handler, _hostname, port);
  print(
      'Serving cameoFlowServer at http://${server.address.host}:${server.port}');
}

Future<shelf.Response> _echoRequest(shelf.Request request) async {
  String strFetchTrello = await FetchTrello.fetchTrello();
  print('server.dart/strFetchTrello:\n$strFetchTrello');
  return shelf.Response.ok('Request for "${request.url}"');
  //TODO:
  // how to server static files?
  // Serve Flutter web project built files?
  // server: Use crontab or scheduling tools to trigger Trello API fetch data (1 min)
  // server: call Trello API to get JSON files, and put JSON on a static web site
  // client: HTTP get static JSON file from remote web site
  // client: Generate Charts and show
  // client: Use reload button to refresh data to latest changes.
}
