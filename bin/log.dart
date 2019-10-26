import 'package:logging/logging.dart';

final Logger logger = Logger('log.dart');

void initLog() {
  Logger.root.level = Level.ALL; // defaults to Level.INFO
  Logger.root.onRecord.listen((record) {
    print('${record.level.name}: ${record.time}: ${record.message}');
  });
}

void log(strContent) {
  logger.fine(strContent);
}
