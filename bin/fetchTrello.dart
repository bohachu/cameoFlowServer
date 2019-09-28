import 'package:http/http.dart' as http;
class FetchTrello {
  test() {
    fetchTrello();
  }
  static Future<String> fetchTrello() async {
    var strUrl =
        "https://api.trello.com/1/boards/5d62808da5dc7510aefef8b2?actions=all&boardStars=none&cards=none&card_pluginData=false&checklists=none&customFields=false&fields=name%2Cdesc%2CdescData%2Cclosed%2CidOrganization%2Cpinned%2Curl%2CshortUrl%2Cprefs%2ClabelNames&lists=open&members=none&memberships=none&membersInvited=none&membersInvited_fields=all&pluginData=false&organization=false&organization_pluginData=false&myPrefs=false&tags=false&key=876733968653dd64a9e7f983f92be18a&token=ce642d0028b550014df0a911ce9750e6078abf7d3cb1caec459a2df215ff097c";
    var response = await http.get(strUrl);
    return response.body;
  }
}
