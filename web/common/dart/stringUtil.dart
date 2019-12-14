String replaceAll(String strContent, Map map) {
  map.forEach((k, v) {
    strContent = strContent.replaceAll(k, v);
  });
  return strContent;
}
