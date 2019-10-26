import 'package:logging/logging.dart';

final Logger logger = Logger('log.dart');

void initLog() {
  Logger.root.level = Level.ALL; // defaults to Level.INFO
  Logger.root.onRecord.listen((record) {
    print('${record.level.name}: ${record.time}: ${record.message}');
  });
}

bool isInit = false;
void log(strContent) {
  if (isInit == false) {
    isInit = true;
    initLog();
  }
  logger.fine(strContent);
}

