可以參考如何撰寫JSON格式：
http://35.221.219.153:8080/cdc/json/disease_登革熱.json
http://35.221.219.153:8080/cdc/json/disease_梅毒.json
http://35.221.219.153:8080/cdc/json/disease_鼠疫.json

Chrome Plugin: Advanced REST client (ARC) 可以編輯 JSON 並且用 POST 方式寫入伺服器：
http://35.221.219.153:8083/

預覽JSON轉換後的HTML可以用類似下面的網址達成（修改底線之後的疾病名稱即可）：
http://35.221.219.153:8080/cdc/pages/reportDisease.html?strDiseaseFile=../json/disease_登革熱.json
http://35.221.219.153:8080/cdc/pages/reportDisease.html?strDiseaseFile=../json/disease_梅毒.json
http://35.221.219.153:8080/cdc/pages/reportDisease.html?strDiseaseFile=../json/disease_鼠疫.json

== todo list ==

2*
建構七十四個疾病的大表，並且派工給不同的夥伴

1*
getDiseaseName 要改為讀取檔案 json diseaseName 欄位而不是 .json 檔案名稱的解析方法
debug 50m date (無法彈跳視窗 popup datepicker window，原因不明）,這個已經有錯誤訊息在 debug 視窗可以看
debug 30m 縣市、國家，字體粗體不一樣 input 元件
debug 60m 排版問題：有三個元件在 one row 的目前沒有辦法，都是直接斷行，要改為 one row

==20191202 01:16==
很可惜 ace editor 失敗了
但是 ARC chrome plugin 可以達到相同功能

==

mac chrome disable cors
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
file:///Users/cameo/WebstormProjects/cameoFlowServer/web/cdc/jsoneditor/html/jsonEditor.html
done dart server and js 部署在 google compute platform
done 測試 chrome post 寫入檔案 post 要能成功

== start coding 20191201 21:00 dart web server
21:40 done 可以運用 dart server serve static file
22:32 done dart echo server 與 static file server 共存
22:32 done 運用 dart server HTTP POST 儲存 JSON 檔案

==

20:30 要在遠端建立一個 cgi 是可以動態寫入 file 的，可以放在哪？ google? cameo.tw?
寫一個簡單的 dart server 可以在

== 20191201 19:38 start coding 1h ==
設法建立七十四個疾病可以編輯也可以預覽畫面的編輯空間區域
 <!-- load a custom version of Ace editor -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.6/ace.js"></script>
  <!-- load the minimalist version of JSONEditor, which doesn't have Ace embedded -->
  <link href="../dist/jsoneditor.css" rel="stylesheet" type="text/css">
  <script src="../dist/jsoneditor-minimalist.js"></script>
  view-source:file:///Users/cameo/node_modules/jsoneditor/examples/08_custom_ace.html

==

18:47 doing radio with date
18:58 done radio with date
18:58 done, and pass doing radio with tip
18:59 h2 with text
19:11 done h2 with text
19:13 doing debug 60m 梅毒、鼠疫，還有一些元件欄位沒有正確顯示，要核對
19:20 done 完成鼠疫與梅毒的檢驗，確定欄位都有正確顯示了

== start coding 20191201 18:21 1h ==
18:44 done 已經完成混搭 checkbox with input

== start coding 20191201 17:04 ==
done 17:14 已經支援 梅毒 h4 tag
接下去是處理梅毒 list input checkbox 混搭
todo checkbox with list pair : input or checkbox
http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease梅毒_caro.json
http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease登革熱_bowen.json
http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease鼠疫_caro.json

~~
done radio with input
done add h4 tag

== 20191201 15:21
可能要讓所有的 buildHtml 都變成 class
15:59 已經可以讓 mapping to instance 作用，不需要轉換 mapping function
16:48 duplicate code 清乾淨， line 276, v.s. 舊程式碼 line 247 增加了三十行，但是更乾淨容易找錯誤是有可能的
16:57 經過清理， line 261 是目前成果，大概增加十幾行，應該非常值得,已經 refactoring 完畢準備進入下一輪 coding

== 20191201 12:58
jsCdc.dart 247 lines
refactorong 運用 cpd 降低重複次數
13:19 已經完成 class refactoring radio 現在開始弄 checkbox
13:31 checkbox 也已經 refactoring to class
13:40 done: pmd cpd --minimum-tokens 40 --files ./jsCdc.dart --language dart
現在挑戰 cpd 20
pmd cpd --minimum-tokens 20 --files ./jsCdc.dart --language dart
13:48 done refactoring h2 h3
stop coding 13:56

== 20191201 11:03 不得了！我們終於有 duplicated code 殺手工具了！
pmd cpd --minimum-tokens 40 --files ./jsCdc.dart --language dart
pmd cpd --minimum-tokens 20 --files ./jsCdc.dart --language html




== 20191130 23:19 總算成功了，可以顯示 strDiseaseName ==
done 納入 梅毒 json 進行測試
done 納入 鼠疫 json 進行測試
done 動態網址測試 http://cameo.tw/cdc/reportDiseaseAll.html?strJsonFile=reportDisease鼠疫_caro.json 就可以看到完成的結果

== RegExp 23:09 成功了 ==
void main() {
  String str = "reportDisease鼠疫_caro.json";
  RegExp reg = new RegExp(r"reportDisease([^\u0000]+)(_[^\u0000]+)");
  Iterable<Match> matches = reg.allMatches(str);
  for (Match m in matches) {
    print('group0');
    print(m.group(0));
    print('group1');
    print(m.group(1));
    print('group2');
    print(m.group(2));
  }
}
～～ output
group0
reportDisease鼠疫_caro.json
group1
鼠疫
group2
_caro.json
～～

== 20191130 21:44 1h coding ==
21:48 done addRecord / 2* 20m addRecord coding

鼠疫、梅毒，json file 測試網址在此
https://drive.google.com/drive/u/0/folders/1gkyKcLt0kuJxlp6mEsPoZEzTCmGW-oiJ

看來得先做 url 變換測試才能任意切換測試檔案了
22:33 已經可以切換三種病
  http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease登革熱_bowen.json
  http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease鼠疫_caro.json
  http://localhost:53322/cdc/pages/reportDisease.html?strReportDiseaseJsonFile=../json/reportDisease梅毒_caro.json
但是病的名稱尚未顯示正確，所以還要改病名稱

2.1 提取中文字符
首先来看个提取中文字符的例子
用到了RegExp类和迭代Match

void main() {
  String str = "Dart中文社区";
  RegExp reg = new RegExp(r"[\u4e00-\u9fa5]+");
  Iterable<Match> matches = reg.allMatches(str);

  for (Match m in matches) {
    print(m.group(0));
  }
}
运行结果：

中文社区
2.2 网络小说内容页采集（提取）
可能之前的例子实用性不高
那么现在来个网络小说采集的例子
采集数据的过程也就几行代码，不多做解释

import 'dart:io';

void main() {
  new HttpClient().getUrl(Uri.parse("http://www.biquge.la/book/32/24387.html"))
  .then((HttpClientRequest request) => request.close())
  .then((HttpClientResponse response) {
      response.transform(new SystemEncoding().decoder).listen((requestText) {
        //此时已经请求到HTML格式网页数据
        //print(requestText);

        //不区分大小写，匹配在<div class="con_top">标签中的标题
        //因为匹配的的数据中有需要转义的""双引号，所以字符串没有用"r"修饰符
        //提取的是书名，定位唯一位置，因此没有使用allMatches函数
        Match match = new RegExp("booktitle\\s+=\\s+"(.*)".*readtitle\\s+=\\s+"\\s+(.*)"").firstMatch(requestText);

        if(match != null) {
          //分组1为书名，分组2为章节名
          print("书名：${match.group(1)}\n章节：${match.group(2)}");
        }
      });
  });
}
booktitle\s+=\s+”(.*)”.*readtitle\s+=\s+”\s+(.*)”

booktitle        #匹配字符串
\s+              #源码中，=赋值的时候，前后可能有空字符
=                #匹配=
\s+              #源码中，=赋值的时候，前后可能有空字符
"(.*)"           #双引号内为group(1)，书名
.*               #查看源码可以知道，booktile和readtitle两个字符串之间没有换行符
readtitle        #匹配字符串
\s+              #源码中，=赋值的时候，前后可能有空字符
=                #匹配=
\s+              #源码中，=赋值的时候，前后可能有空字符
"\s+(.*)"        #双引号内为group(2)，章节名





== 20191130 18:54
done 12min 30m 建構一個可以對比模板的掃描程式碼
19:06 to 19:15 done 9m select 欄位製作之前，可能要能夠讓 json 合併變成同一個檔案之後，比較方便進行編輯作業
3* 20m h2 coding
19:36 done h2 h3 以及 radio null, checkbox null, checkbox 最後沒有其他欄位，都已經修正
19:47 done select
19:56 done input
20:18 done date (無法彈跳視窗 popup datepicker window，原因不明）

==
20191130 18:36

== 20191130 17:04 1h start coding ==
17:06 先確定現在用的 bootstrap 版本號碼: Bootstrap (v4.3.1)
17:09 COOL: 已經確定 bootstrap 4 可以直接學習，所以根據我想要的東西，全部都重新學習，就可以避免陷阱，要能看懂每一行 bootstrap 命令，就可以自在組合了
done bootstrap 如何用拖拉的方式做出我要的畫面？不要受限於現在已經有的畫面元件？

todo 學習每一個有用到的 bootstrap 命令：https://www.w3schools.com/bootstrap4/
todo angularDart 是不是可以讓整個 coding 速度加快？元件化？
17:11 學習 angularDart 把可以用的部分抓下來參考
17:26 大概知道 angularDart 應該是可以用，但還無法融入現在的設計，原因是：顯示元件google material與bootstrap 不知道是否相容

data(.json) + template(.html) + bootstrapCss ==logic(.dart)==> finalHtml

17:44 大概看完 angular and vue, 確定未來使用 vue 是比較容易入門的選擇，瞬間可以導入
但是現在因為沒有辦法讓 bootstrap 元件很容易跟 vue 結合，還不太熟悉
所以目前還是讓我自己組合元件撰寫 logic 轉換器比較簡單

17:46 要先學會 radio 相關的所有 bootstrap 命令是怎麼一回事，這樣才不會被牽著鼻子跑
Bootstrap has a wide range of responsive margin and padding utility classes. They work for all breakpoints:

xs (<=576px), sm (>=576px), md (>=768px), lg (>=992px) or xl (>=1200px))
The classes are used in the format:
{property}{sides}-{size} for xs & {property}{sides}-{breakpoint}-{size} for sm, md, lg, and xl.
m - sets margin
p - sets padding
t - sets margin-top or padding-top
b - sets margin-bottom or padding-bottom
l - sets margin-left or padding-left
r - sets margin-right or padding-right
x - sets both padding-left and padding-right or margin-left and margin-right
y - sets both padding-top and padding-bottom or margin-top and margin-bottom
blank - sets a margin or padding on all 4 sides of the element
0 - sets margin or padding to 0
1 - sets margin or padding to .25rem (4px if font-size is 16px)
2 - sets margin or padding to .5rem (8px if font-size is 16px)
3 - sets margin or padding to 1rem (16px if font-size is 16px)
4 - sets margin or padding to 1.5rem (24px if font-size is 16px)
5 - sets margin or padding to 3rem (48px if font-size is 16px)
auto - sets margin to auto

刪除了一些 col-md 這類的 checkbox 描述，讓流動性更好了，不會再發生奇怪斷行，真是太好了

18:20 + i
+ 學習了 bootstrap 排版系統的一些命令，並且可以自由的進行排版
+ vue 應該是個很有趣的東西，可以進一步實驗並且運用，輕量化讓工作變簡單的可能性是有的



14:51 radio 的全部轉換看看 radio ok
14:59 現在可以先改 checkbox
15:39 checkbox ok, 現在開始弄 select

== start coding 20191128 14:21 ==
18:48 接下去要編號所有的 radio 把全部的 radio 都弄成動態生成
radio


checkbox
select
h2

~~

[疾管署] 給泊寰 74疾病相關的資料文件都統一放在這個資料夾以便後續查找喔 謝謝
收件匣
x

Goldie Chen
11月22日 週五 上午10:24 (6 天前)
寄給 all、 曹一撇

疾管署 和74疾病有關的資料文件都統一放在這個資料夾
以便後續查找喔 謝謝

(20) 74個疾病畫面：
https://drive.google.com/drive/folders/1dOi53RPfn0TJ3QjU1w9D-yfvGlVEcBgP

～～

這是目前整理的資訊和素材。

疾病畫面總共74個，分為兩類：無附加資訊欄位使用共同模組42個、有附加資訊有各別欄位32個

目標要做74個這種畫面，HTML畫面[以登革熱畫面做為模板]：
https://cameo.tw/cdc//20190909/pages/2.1Report_dengue.html
畫面HTML資料夾：
https://drive.google.com/drive/folders/1zd59r1CoM-02vO0dA0JjsUSH6rsY50Fh?usp=sharing

第一類 無附加資訊42個病的試算表：模組相同、但欄位底下的選項(主要症狀)會不同
https://docs.google.com/spreadsheets/d/1yNS2iINF8Ib_0vVZ5NFrlOn6uWigeNa4k7D_SzHwMG0/edit#gid=840589437

第二類 有附加資訊32個病的試算表：（已完成：登革熱、淋病、梅毒、流感併發重症這4個病不用再做）各疾病通報欄位要看各個頁籤
***11/22 lele再補已經做好病的畫面URL
https://docs.google.com/spreadsheets/d/1ZtWrPpgUG19375ozuzeMMbuGONyKQc2mY6mmJXD_8y4/edit#gid=1054066465

下面這塊樂樂會需要有技術夥伴和Harry一起幫忙釐清會比較快：
「可能可以在找到人之前, 先行規劃是否有一些共用元件的命名原則 e.g. 長一個資料表, id要叫什麼
以及是否74個有階層關係, 有高階的/抽象的第一階版型, 以簡併與共用一些版型」




== 20191127 18:38 20m start coding ==
18:48 done radio 加入 tips
18:48 接下去要編號所有的 radio 把全部的 radio 都弄成動態生成
radio
checkbox
select
h2


== 20191126 11:10 50m start coding ==
done radio 的 list 數量要動態
done radio 裡面的 id 編號命名要動態

== 20191126 7:48 60min start coding ==
要讓所有的程式碼片段可以產生出我們要的東西，然後比對排版差異在哪
先做一次全面複製、插入，然後再一一區分片段
08:41 已經用 strHtml1 to strHtml14 取代
接下來的階段就是要用 json 生成 html 看看中間怎麼做？

== 20191124 21:14 30min start coding ==
現在要開始讓片段片段可以產生 html code 嵌入到 reportDisease.html 裡面去

== 20191124 12:17 stop coding
mac chrome disable cors
12:16 解決 utf-8 encoding 問題
  var response = await http.get(strUrl);
  String strUtf8=utf8.decode(response.bodyBytes);

== 20191124 10:47 cdc coding logs
已經把 cdc hdFlow 兩個路徑獨立出來了，往後可以交互參照共用元件也沒有問題
11:16 已經可以 reportDisease.html 抓取 json file from url 並且 console log 顯示（可惜是亂碼，還要找找原因）
done 可以用 debugger 看看抓回來是中文還是亂碼，然後做一些判斷
Content-type: application/json; charset=utf-8

== 20191124 10:14 疾管署 coding logs
第一個是要用 json 重現所有疾管署的登革熱欄位
為了要可以做到這件事情，要先有原始畫面
https://docs.google.com/spreadsheets/d/1ZtWrPpgUG19375ozuzeMMbuGONyKQc2mY6mmJXD_8y4/edit#gid=1054066465

第一類 無附加資訊42個病的試算表：模組相同、但欄位底下的選項(主要症狀)會不同
https://docs.google.com/spreadsheets/d/1yNS2iINF8Ib_0vVZ5NFrlOn6uWigeNa4k7D_SzHwMG0/edit#gid=840589437

第二類 有附加資訊32個病的試算表：（已完成：登革熱、淋病、梅毒、流感併發重症這4個病不用再做）各疾病通報欄位要看各個頁籤
***11/22 lele再補已經做好病的畫面URL
https://docs.google.com/spreadsheets/d/1ZtWrPpgUG19375ozuzeMMbuGONyKQc2mY6mmJXD_8y4/edit#gid=1054066465

要能讀取 reportDisease登革熱.json 之後，可以迴圈列出：
先印出來所有的東西，然後才處理轉換


== 20191123 2356 json生成html的程式碼怎麼寫？

先要可以產生Form元件，就算沒有排很美麗，而是只有從上到下，也可以
可以讓Form元件切割為三欄、兩欄、一欄
流水下去的時候，如果三欄

== 20191123 23:36 下一個任務應該就是 dart 可以拿到 editor.get() 的資料之後，往後端伺服器傳送寫入，產生 .json 檔案寫入之後，就可以讀出變成網頁了，這需要後台有一個 file server 接收才可以

how to 後台 file server?
let us think

寫入伺服器端：
http://cameo.tw/cdc/writeJson?strFileName=登革熱.json&strJson=[{"key":"value"}]

寫入之後，JSON要拿資料可以在這邊拿取：
http://cameo.tw/cdc/json/登革熱.json

編輯的方法：
http://cameo.tw/cdc/editJson?strFileName=登革熱.json
就會讀取這個檔案來在網頁編輯 /cdc/json/登革熱.json
最好的方式是每隔幾秒就自動寫入伺服器端，全自動儲存
或者有鍵盤事件之後就全自動儲存也很好
編輯之後有一個按鈕可以按下去之後瀏覽 html 視窗

看HTML的方法，不同的 .json 會有不同的通報畫面，總共會有七十四種疾病：
http://cameo.tw/cdc/reportDisease.html?strJson=登革熱.json

七十四種疾病的列表，可以隨時點選 link 過去看：
http://cameo.tw/cdc/diseaseList.html
作法：將 json 底下的所有檔案列出來，並且產生動態 html url 就可以列出已經有的檔案名稱來看了

== 20191123 23:00 這段程式碼可以用按鈕拿到 json (當然也就可以送出到網路上面了）

<!DOCTYPE HTML>
<html>
<head>
    <!-- when using the mode "code", it's important to specify charset utf-8 -->
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">

    <link href="jsoneditor/dist/jsoneditor.min.css" rel="stylesheet" type="text/css">
    <script src="jsoneditor/dist/jsoneditor.min.js"></script>
</head>
<body>
<p>
    <button onclick="setJSON();">Set JSON</button>
    <button onclick="getJSON();">Get JSON</button>
</p>
<div id="jsoneditor" style="width: 400px; height: 400px;"></div>

<script>
    // create the editor
    var container = document.getElementById("jsoneditor");
    var editor = new JSONEditor(container);

    // set json
    function setJSON () {
        var json = {
            "Array": [1, 2, 3],
            "Boolean": true,
            "Null": null,
            "Number": 123,
            "Object": {"a": "b", "c": "d"},
            "String": "Hello World"
        };
        editor.set(json);
    }

    // get json
    function getJSON() {
        var json = editor.get();
        alert(JSON.stringify(json, null, 2));
    }
</script>
</body>
</html>


To set JSON data in the editor:

var json = {
    "Array": [1, 2, 3],
    "Boolean": true,
    "Null": null,
    "Number": 123,
    "Object": {"a": "b", "c": "d"},
    "String": "Hello World"
};
editor.set(json);
To get JSON data from the editor:

20191123 23:25
只要用這一行程式碼就可以拿到 純文字的 json text
var strJson = editor.get();


== coding logs 20191121 22:33 ==
bowen chiu 雖然心情上面非常生氣疾管署科長的官腔反應，但是念在她90%的時間都是不錯的工作者，我想也就讓這個心情停留在短短一天之內消化。

74疾病的英文表單
https://docs.google.com/spreadsheets/d/1uswuCaLjLrFjkwwfvOkleTfkmiwhccR2EEcuOu89Xw0/edit#gid=2110494187

這是目前整理的資訊和素材。

疾病畫面總共74個，分為兩類：無附加資訊欄位使用共同模組42個、有附加資訊有各別欄位32個

目標要做74個這種畫面，HTML畫面[以登革熱畫面做為模板]：
https://cameo.tw/cdc/20190909/pages/2.1Report_dengue.html

畫面HTML資料夾：
https://drive.google.com/drive/folders/1zd59r1CoM-02vO0dA0JjsUSH6rsY50Fh?usp=sharing

第一類 無附加資訊42個病的試算表：模組相同、但欄位底下的選項(主要症狀)會不同
https://docs.google.com/spreadsheets/d/1yNS2iINF8Ib_0vVZ5NFrlOn6uWigeNa4k7D_SzHwMG0/edit#gid=840589437

第二類 有附加資訊32個病的試算表：（已完成：登革熱、淋病、梅毒、流感併發重症這4個病不用再做）各疾病通報欄位要看各個頁籤
***11/22 lele再補已經做好病的畫面URL
https://docs.google.com/spreadsheets/d/1ZtWrPpgUG19375ozuzeMMbuGONyKQc2mY6mmJXD_8y4/edit#gid=1054066465

下面這塊樂樂會需要有技術夥伴和Harry一起幫忙釐清會比較快：
「可能可以在找到人之前, 先行規劃是否有一些共用元件的命名原則 e.g. 長一個資料表, id要叫什麼以及是否74個有階層關係, 有高階的/抽象的第一階版型, 以簡併與共用一些版型」

== start coding 20191117 19:43 ==
. 想要加入 PWA 功能讓手機跟電腦都可以有 icon
. 新增 icons 想要為 PWA 做點學習
. add minifest.json
. add service-worker.js
. modify index.html
+ 電腦已經可以 chrome 加入桌面 icon
i 手機 apple 無法作用
+ 手機 apple 發現 safari 其實可以把任意網址加入桌面鏈結
20:47 休息

==

HD Flow v1116 Release Notes
https://www.cameo.tw/adminlte/pages/tables/data.html?strUrl=trello.com/b/SsiyOdgK/%E5%82%A2%E6%AB%A5%E7%92%B0%E4%B8%AD.json
001 更新左邊的開合按鈕變成 i 字樣
002 點點圖已經對齊格子寬度，並且已經有十五階段文字標題（感恩佳珞）
003 重新加入高速度Cache只需要第一次載入之後，往後每次都是從Cache讀取（然後自動更新Cache）
004 務必按下 Windows: Ctrl+F5 瀏覽器才會更新程式碼，Mac: Cmd+Shift+R

done 21:47, 20191116 21:47 3* 1h 整併 data.html 最新成果加入
done 21:58, 20191116 21:48 2* 2h 讓第一次的顯示速度變快

== todo HD全壘打 ==
2* 2h 整理讓 source code 可重用性更高，可以用在不同場合
2* 1h black顏色需要處理，不要營收表不要加總
1* 1h 讓左邊的收合分店不需要收合選單
1* 1h 讓左邊側邊欄預設是合併的
1* 1h 讓右上角的無用的對話視窗可以隱藏
1* 1h 總表：讓總表的 yellow 變成黃檸檬icon（其他相對顏色也要改）
1* 1h 點點：階段要三個column合併，變成一個階段
1* 2h 分店：總店可以全部看，其他兩個只能看自己的

pending help: 需要文巧幫忙，關案 archive，有可能是掉案，也有可能是不要該卡片（該卡片只是實驗的格式卡片，並不是有人員與金額的，例如 範例 [建案名稱][客戶名稱] ），所以最好是卡片改黑色之後才 archive 這樣比較可以統計正確的數字
pending help: 1* 3h 總表：掉單率的表，讓總表可以換算過去顯示（需要 ken 文巧協助設計 google sheet)
pending help: 1* ?? 指標要能顯示在畫面上，變成各種指標的：財務、人才、流程、客戶
pending help: 需要文巧幫忙：Trello資料錯誤: 文心，試算表文心的圖表URL尚未取得，因此google sheet財務報表現在是放環中的google sheet，需要文心財務報表google sheet URL
done help: 需要文巧幫忙：Trello資料錯誤: 環中，顏色 pink blue black 意義是什麼？目前我們沒有處理這三種顏色喔，意義待確認
done help: 需要文巧幫忙：Trello資料錯誤: 文心，07_簽約之後，有許多金額並不是用「萬元」作為單位，混合了「萬元」跟「一元」的單位，造成數字加總有問題，需要更正Trello金額欄位

== start coding 20191108 20:46 屏東案 datatables ==
美麗的邊緣下捲 https://jsfiddle.net/Vimalan/2koex0bt/6/
google cloud storage 速度傳輸 0.01 USD, 1T=10USD

== start coding 29191108 05:00 ==
05:51 done 2* 如果沒有備註文字的，完全不需要打開變成加號

== start coding 20191107 21:02 ==
done 2* 3h 點點：掉單要做掉單的統計（點點表）：綠色、黃色、紅色、🎱黑色（多一個黑色🎱顯示掉單情形）
done 2* 3h 總表：在哪個階段已經掉單，哪個是封存，要計算有幾筆掉單（掉單率），只要加總所有的案件每個階段掉單的比率就可以了，越接近後面才掉單，成本會更高。鼓勵在前面的階段掉單會比較好
done doing 2* 2h 點點：做點點表的右邊合計，以及下面合計（不看封存的，不看沒有標記 green yellow pink）
22:45 done 1* 2h datatables中文化介面，上一頁，下一頁


HD Flow 習慣領域全壘打雲 Release note v1107

網址 https://www.cameo.tw/adminlte/pages/tables/data.html
帳號 cameo
密碼 cameo70525198

. 選單：已經可以在左側切換環中、文心店
. 營收：已經有簽約前 step 6 統計
. 總表：已經可以處理關案欄位，分黑球已經關案，白球案件開案持續中
. 總表：已經有三個最新的備註欄位，有時間，也有備註說明，可以打開合起來
. 搜尋、排序，都可以記錄上次的狀態，不需要重複進行點選，上次點選的狀態下次都會記憶

== start coding 20191107 17:51 ==
done 已經有黑球白球，計算關案功能
done 3* 4h 分店：文心店整合到系統內，變成另外一張 web page: 故意實驗讓文心帳號密碼，環中帳號密碼，故意區分、總店人員、環中人員、文心人員
18:18 done, 2* 1h 總表：debug 報價3 在 trello 已經消失，但是 trello.json 還有
done 2* 07_報價3 : 要刪除這個不必要的欄位

n/a 1* 如果 web local storage 舊版本資料，造成 bugs 會需要一個機制清空 web local storage 才行
n/a 1* 1h 總表：數字三位一撇
done 1* 2h 總表：讓總表可以記憶上一次搜尋的結果字串，還有上一次的排序的按鈕 column 下次就可以自由的 load 最後一次的情形，不需要再重複搜尋(datatables State saving)
done 1* 總表：突然出現有 red 的情況，也要處理pink

== start coding 20191107 15:33 ==
done 16:19 start 15:54 文心的：客源、人員、產品類別，三個東西出不來
done 16:33 簽約前總計以及總計的中文位置亂跳問題

== 20191107 09:14 35min coding ==
2* 3h 總表：bug 黑單 已經 close 掉單了，封存這個卡片，但是在 web 總表還在（封存的卡片會有個close字樣），案件名稱叫做：[Alec][顧淑美][未知][未知]，封存要變黑球
09:28 done 先刪除已經 close 的東西，避免顯示金額出問題
09:28 done income小數點太多的問題
09:28 done 2* income 總計最右下角欄位數字是零，有問題
done 備註要加入時間欄位
done 3* 2h 簽約：將報價2(階段6)做一個footer的表格顯示總計（只差將報價6之前全部加總）
done 3* 1h 簽約：簽約前報價，個人合計


== start coding 30min 20191106 17:27 ==
17:29 準備把備註空空的undified改掉
17:44 備註欄位已經可以三個空白正常 no undefined
done doing 3* 3h 總表：yellow是店長要關注的，搜尋出來之後有十筆，備註最近三則的顯示

== start coding 60min 20191105 21:19 ==
stackedit 功能可以找另外替代方案，原因線上展示麻煩
22:02 已經找到列印pdf功能，甚至還可以點選link看到線上影片，很好用，未來可以多運用之，也可以印書面
現在要把 actions.json 讀取完畢之後，加入備註欄位
00:37 備註 1 2 3 初步已經可以顯示

== start coding 60min 20191104 23:38 ==
00:46 寫完 dart flatten 功能，也能把 cards lists actions 全部打平成功，未來這些 json file 都非常好用！可以再轉 datatables 欄位容易太多了

現在要把 actions 讀出來，打平變成JSON
def flatten_json(nested_json, exclude=['']):
    """Flatten json object with nested keys into a single level.
        Args:
            nested_json: A nested json object.
            exclude: Keys to exclude from output.
        Returns:
            The flattened json object if successful, None otherwise.
    """
    out = {}

    def flatten(x, name='', exclude=exclude):
        if type(x) is dict:
            for a in x:
                if a not in exclude: flatten(x[a], name + a + '_')
        elif type(x) is list:
            i = 0
            for a in x:
                flatten(a, name + str(i) + '_')
                i += 1
        else:
            out[name[:-1]] = x

    flatten(nested_json)
    return out

== start coding 60min 20191103 21:42 ==
運用了許多 pandas 的觀念，應該可以很容易處理 actions 裡面的東西，結合到cards裡面才對
今天看看能不能把備註欄位加上去
首先要 refactoring 把 datatables 變成 ajax object, 然後才能加上備註欄位資料
22:13 大表總表解決轉換了，花了 30min refactoring
22:40 剩下兩個表也解決 refactoring ok
next: 要把actions讀取出來之後，join到原本的cards底下，才能變成備註三個欄位


== 20191103 18:51 start coding
18:56 要找出備註最新欄位在哪

== 22:03
22:09 先看一下 fuse 有沒有開合資料可以顯示: 看起來也是沒有適合的，可見 datatables 真的是很強
22:23 已經成功可以開合九個元素的表單，child rows for trello table 外觀已經成功了
23:00 已經可以使用 javascript debugger 可以比對 table 前後變數消失的差異
23:31 已經可以沒有 bugs 顯示開合的內容，但是因為原始資料是 array 這下麻煩了，要新增刪除 column name 都會發生 index number 跳動！往後應該改 map
1h next 將資料來源改為 map, 並且修改相對應的程式碼，然後新增三個備註欄位在原始資料提供方

== start coding 20191102 16:29 30min ==
16:29 doing 3* 3h 總表：yellow是店長要關注的，搜尋出來之後有十筆，備註最近三則的顯示
首先要可以讓大表能夠顯示備註，所以要搜尋備註的寫法
16:41 Child rows (show extra / detailed information)
22:01 已經確定 tableTrello 總表的資料表示法，跟 childRows 資料表示法，兩者之間不相容，所以，如果要做下一個階段，那就是要把 child rows 的資料表示法，直接做出總表外觀

== 點子: uxBot: ui ux bot refactoring
server:
static web server: shelf_static
cross domain javascript proxy: dart shelf_proxy
pandas
id password management(and automation api)
selenium
總店與分店權限架構
金流銷售架構

client:
bootstrap studio
bootstrap rwd theme (like adminLte)
dart
datatables
javascript
localStorage
online dartpad editor

== 1031 17:23 剛剛已經確定
Cross-Origin Read Blocking (CORB) blocked cross-origin response
這個很難突破，還是需要靠 server side proxy 來幫忙轉發爬蟲請求的樣子
trello 應該是特別有支援 jsonp
一個比較好的 server side jsonp 支援，應該是固定儲存靜態檔案抓完之後儲存，而且都用 cache，原則上五分鐘才會更新一次

~~ todo list ~~

double 2* 1h 點點表：最上面有中文標題
double 2* 1h 階段收入表：下面要有簽約前金額加總
double 1* 1h 數字靠右而且三位一撇
done 1* 2h known 運用 $('.header').load("header.html"); 側邊欄改可重用 系統面：adminlte 介面隱藏不需要的東西，可以用試算表隱藏 hidelang
pending 1* 1h known 直接改中文字串無法重用 系統面：adminlte 把英文介面改為中文介面，用一個試算表來改，不需要動到原本的 html: i18nlang

點子，app store 全球程式碼片段銷售元件，有 source code 有 project 立刻可以用

可以共用的程式碼來看看
日期格式轉換
文章、影片、可共用元件示範、網站直接Demo：全部合起來 1 USD

賣一個模板 USD 1 超級便宜的模板，而且附帶所有 source code, 以及講解網站 jsfiddle 可以用
jsbin 可以用

3* dataTables emoji
3* trello to csv
3* adminLTE with dart language editor
2* dataTables library sumRight, sumBottom
2* dataTables with dart language

dart call js, js call dart
dart profiling time measurement
dart log
dart storage database
trello to json

js call dart:
~~ .dart source code ~~
context['jsCallDart'] = (map) {
       //call any Dart method from dart
}

~~ .js source code ~~
jsCallDart({'param': 'value'});


== 20191029 23:00 20min
storage test!
20191029 done 已經改善速度問題了： 3* 速度，能不能 cache 先讀取一次，再做動態更新？

== 20191029 22:08
三張表都改為動態資料了，非常棒啊啊啊
剛剛學到了 import 裡面如果有一些不能 js 編譯的東西，會造成無法編譯的錯誤 404 找不到檔案 .js 無法生成的問題
done use js sum 2* 階段收入表：右邊要有個人加總, 階段收入表：下面要有階段加總

== 20191029 20:34 ==
想要透過十分鐘研究一下為什麼瀏覽器，無法在本機執行呢？
20:50 找到解決方案 open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
20:55 整理

== 18:59
解決 debugger 的問題了，超棒的！！！
現在只剩下 bin web 兩邊專案檔案彼此 share 的問題而已了
如果全部刪除 bin 那也就沒有這個問題了

== start coding 20191029 17:50 60min ==
17:50 試試看 dart to js alert
YES!!! 成功

17:51 呼叫看看其他功能
18:12 dart to dataTables 成功

備用的未來測試
  //context.callMethod('alert', ['Hello from Dart!']);

  var obj = JsObject(context['Object']);
  obj['greeting'] = 'Hello';
  obj['greet'] = (name) => "${obj['greeting']} $name";
  var message = obj.callMethod('greet', ['JavaScript']);
  context['console'].callMethod('log', [message]);

18:46 已經完全成功了，可以從 dart load trello json , to table, to javascript, to datatables
+ 艱辛的路，但是通了
done i debugger 似乎不能運作, 可以單一專案來最簡單看看運作方法
done i bin web 兩邊的專案檔案無法 share 會是個問題

== start coding 20191029 16:30 60min ==
這是可以運作的
          <script type="text/javascript">
            var url = "https://trello.com/b/SsiyOdgK/傢櫥環中.json";
            console.log("data.html/$.getJSON");
            $.getJSON(url, function(data){
              console.log(data);
            });
          </script>
16:57 技術上已經可以讀取 dart ，問題是要怎麼省四秒的反應時間，同時兼顧 icdsoft 可以運作嗎？
其實還是要有自己的 server 比較好，這樣就可以動態調整各種可能性

結論：
為了要避免自己用密碼系統的麻煩
試試看用靜態檔案四秒更新的方式運作看看，未來可以用瀏覽器儲存 cache 的方式進行加速與更新作業，就不用四秒等待時間了

17:02 替換大表變成動態 load dartJs json

http://dartdoc.takyam.com/articles/js-dart-interop/
js:
var Point = function(x, y) {
  this.x = x;
  this.y = y;
};

~~

dart
var point = new JsObject(context['Point'], [3, 4]);

~~

import 'dart:js';
main() => context.callMethod('alert', ['Hello from Dart!']);

~~

import 'dart:js';

main() {
  var object = JsObject(context['Object']);
  object['greeting'] = 'Hello';
  object['greet'] = (name) => "${object['greeting']} $name";
  var message = object.callMethod('greet', ['JavaScript']);
  context['console'].callMethod('log', [message]);
}

~~
var jsMap = JsObject.jsify({'a': 1, 'b': 2});
var jsArray = JsObject.jsify([1, 2, 3]);


== start coding 20191029 10:54 45min ==
在總表之前要能執行 .dart.js
11:26 testDartJs.dart已經可以運作

3h known 運用 jsonp 達成直接 load trello：系統面：如何讓 reload 多張圖表不需要開關 dart server, dart to js, and then use jsonp
var url = "https://trello.com/b/SsiyOdgK/傢櫥環中.json";
$.getJSON(url, function(data){
  console.log(data);
});

結論：
+ testDartJs.dart 簡單的替換可以運作，也就是往後可以用 dart dom 在本專案操作沒問題
i 沒有成功讓 jsonp 可以呼叫，其實想一想，應該改用 server side json 動態生成也不錯啦，哈哈哈，只要解決幾分鐘更新問題即可喔喔喔

~~ todo list ~~
1h 數字靠右而且三位一撇
2h known 運用 $('.header').load("header.html"); 側邊欄改可重用 系統面：adminlte 介面隱藏不需要的東西，可以用試算表隱藏 hidelang
1h known 直接改中文字串無法重用 系統面：adminlte 把英文介面改為中文介面，用一個試算表來改，不需要動到原本的 html: i18nlang
caro 3* 點點表：最上面有中文標題
use js sum 2* 階段收入表：右邊要有個人加總, 階段收入表：下面要有階段加總
use js sum 1* 階段收入表：下面要有簽約前金額加總

~~
done known 1* 系統面：多個公司登入介面: 已經可以用 icdsoft 辦到帳號密碼功能


== 20191029 09:09 40min ==
很好奇編譯為 javascript 的可讀性（程式碼），所以來編譯看看
09:13 答案已經很確定是不可行，原因是 34 lines to 7000 lines 實在差異太大了
09:39 花了25分鐘寫好一個addBottomSum的小程式碼可以運作，還算不錯
現在準備計算右邊的東西
09:50 花另外10分鐘寫好 addRightSum的小程式碼可以運作，自己很喜歡
done 22:47 use js sum 2* 點點表：最右邊加總, 點點表：最下面加總

== 20191028 22:32 30min ==
known 可重用 reuse jquery load 命令的寫法
header.html

<div class="nav">
<div class="container">
<ul class="pull-left">
<li><a href="#">Blogs</a></li>
<li><a href="#">About</a></li>
    </ul>
<ul class="pull-right">
<li><a href="#">Ask a question</a></li>
<li><a href="#">Links</a></li>
    </ul>
  </div>
</div>

~~

index.html:
<div class="header"></div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="script.js"></script>

~~

script.js:
$(document).ready(function(){
  $('.header').load("header.html");
});



== start coding 20191028 09:00 15min ==
jsonp trello javascript 實驗

var url = "https://trello.com/b/SsiyOdgK/傢櫥環中.json";
$.getJSON(url, function(data){
  console.log(data);
});

09:08 jsonp 實驗成功，完全可以運作！

已經發問 icdsoft apache 是不是可以產生帳號密碼，如果可以製作簡單的帳號密碼 script 就能夠產生使用者了
這樣就可以讓 javascript 完全在瀏覽器上面運作了
真是太驚人了！

== start logging
fuse theme 這個 trello like 強大到爆漿，一定要用！！！
http://angular-material.fusetheme.com/apps/scrumboard/boards/50b77a29/untitled-board

== start logging 20191028 00:07 15min ==
這是 trello like task board for javascript 很好用，可以橫向捲軸
https://alexodes.github.io/Taskboard/#board

angular 有對話訊息，有todo、行事曆，全部都有作用
https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805
http://demos.ui-lib.com/egret-doc/#overview
Egret - Angular 8+ Material Design Admin Template
by mh_rafi in Admin Templates
Multiple Layouts
Multiple Angular material Themes
Pre Made Angular apps.

這個有看板法，很有趣的demo，地圖有Leaflet
Primer - Angular & React Material Design Admin Template
by iamnyasha in Admin Templates
Angular & React Versions
Material design
RTL Support

找到很美的 pie chart
https://swimlane.github.io/ngx-charts/#/ngx-charts/pie-chart

之所以想要用 angular 的原因：
可重用元件的設計應該比較周詳，至少不會每個 html 都重複

== start coding 20191027 21:44 60min ==
開始規劃 adminlte 要隱藏的部分
hide "Customize AdminLTE"
hide "Notifications"
hide "Messages"
modify "AdminLTE 3" "習慣領域全壘打"
hide "menu/Alexander Pierce"
hide "menu/Dashboard"
hide "menu/Widgets"
hide "menu/Layout Options"
hide "menu/Charts"
hide "menu/UI Elements"
hide "menu/Forms"
hide "menu/Tables"
hide "menu/EXAMPLES"
hide "menu/Calendar"
modify "Gallery" "全壘打流程表"
hide "menu/Mailbox"
hide "menu/Pages"
hide "menu/Extras"
hide "menu/MISCELLANEOUS"
modify "menu/Documentation" "財務報表"
hide "menu/MULTI LEVEL EXAMPLE"
hide "menu/Level 1"
hide "menu/LABELS"
hide "menu/Important"
hide "menu/Warning"
hide "menu/Information"
modify "Home" "首頁"
modify "Contact" "聯絡我們"
modify "Search" "搜尋"

已經確定每個 data.html like  的檔案都會完全複製一份相同 menu 這點傷腦筋
但是意外找到 pdfmake 這個套件很好用，而且支援中文 it is great

==

3* 系統面：adminlte 介面隱藏不需要的東西，可以用試算表隱藏 hidelang
3* 系統面：adminlte 把英文介面改為中文介面，用一個試算表來改，不需要動到原本的 html: i18nlang
3* 系統面：如何讓 reload 多張圖表不需要開關 dart server
3* 點點表：最上面有中文標題
2* 點點表：最右邊加總
2* 點點表：最下面加總
2* 階段收入表：右邊要有個人加總
2* 階段收入表：下面要有階段加總
1* 階段收入表：下面要有簽約前金額加總

== start 20191027 60min ==
16:49 開始
首先要把財務儀表板的輸入工具，方法要選定
'2019執行表'!AC17:AC24,'2019執行表'!AH28:AH35
Sam (洪伯昇)
Elton (侯世璟)
Eline(陳盈伶)
Alec (盧鵬仁)
Vicky (何芷婷)
kevin (黃俞凱)
Roger (李乃廷)
Fanny (李芳樺)

'2019執行表'!AH28:AH35
86.23
272.0932
584.242
459.9828
80.5
385.037
478.057
289.9238

最方便的輸入工具應該還是 google sheet 因為可以自由的打入公式
也可以自由的產生圖表
現在比較麻煩的事情是
怎樣讓 google sheet 插入 html 而且顯示非常好看
尤其是圖表

自動發布網頁可以看到以下圖表內容，採用網頁方式呈現
https://docs.google.com/spreadsheets/d/e/2PACX-1vRg_fpCrsPniHYLw1B4_dAP_J_8KLIkJMr0WCFZiJqesiPpOo6IOQ1EcWy_LpUmWYpvWtDKYgWC1SN8/pubhtml?gid=1436246321&single=true

<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRg_fpCrsPniHYLw1B4_dAP_J_8KLIkJMr0WCFZiJqesiPpOo6IOQ1EcWy_LpUmWYpvWtDKYgWC1SN8/pubhtml?gid=1436246321&amp;single=true&amp;widget=true&amp;headers=false"></iframe>

17:15 財務儀表板也都可以看了，超棒的！

17:32 stop  開始休息一下囉囉囉

done 財務儀表板:
done 16:51 3* 如何輸入數字？挑選工具
done 16:51 3* 如何展示在網頁上面？挑選工具

todo 系統面:
done 3* 第一張圖 layout 怎樣不會跑版？
done 3* 整合多張圖表到 admin gui

todo refactoring:
done 1* 萬一未來14階段擴充到16階段要改變哪些東西

todo 點點表:

todo 階段收入表:
done 3* 最上面有中文標題

== start 15:28 51min ==
15:28 pandas共學課程已經開了，現在要讓第一張表也可以捲動
15:38 第一張表已經可以捲動
現在要讓 income 表格也放入 html 第三個表單
15:55 stop

== start 20191027 14:48 15 min ==
看一下 pandas 是不是有靈感可以簡化我們的工作
還有看一下 pandas dart, pandas udemy
開課： https://www.udemy.com/course/data-analysis-with-pandas/

== start coding 20191027 10:40 60min ==
剛剛不太順利的原因是採用 bootstrap studio 改來改去改不出我要的東西，還會消失不見table
現在改用 adminlte 看看效果

== start coding 20191027 08:57 60min ==
待辦方案有這些

todo 系統面:
done 3* 第一張圖 layout 怎樣不會跑版？
done 3* 整合多張圖表到 admin gui
3* 如何讓 reload 多張圖表不需要開關 dart server
1* 多個公司登入介面

todo 財務儀表板:
3* 如何輸入數字？挑選工具
3* 如何展示在網頁上面？挑選工具

todo refactoring:
1* 萬一未來14階段擴充到16階段要改變哪些東西

todo 點點表:
3* 最上面有中文標題
2* 最右邊加總
2* 最下面加總

todo 階段收入表:
3* 最上面有中文標題
2* 右邊要有個人加總
2* 下面要有階段加總
1* 下面要有簽約前金額加總

== start coding 23:56 30min ==
. 開始製作案件金額表，然後看看是否有可重用的地方
. 已經製作出每階段收入表
http://live.datatables.net/laxebori/1/edit
. 覺得可以花十五分鐘做一下可重用 refactoring

== start coding 22:14 15min ==
. refactoring 讓程式碼可重用性更高

== start coding 21:09 60min ==
. 已經可以排出顏色
        if((j-1)%3==0){lstTable[i][j] = '🍏' * lstTable[i][j];}
        if((j-1)%3==1){lstTable[i][j] = '🍋' * lstTable[i][j];}
        if((j-1)%3==2){lstTable[i][j] = '🍅' * lstTable[i][j];}
. http://live.datatables.net/wunayolu/1/edit
. next: 最右邊加總
. next: 最下面加總
. next: 最上面有中文標題
. next: 另外一個大表：算出案件金額表
. next: 整合到 admin gui

== start coding 20191026 17:04 45min ==
. 接下去就要每個 row 跑，應該有五輪 5 6 7 8 9 然後可以接著睡覺
. 已經可以顯示出來 jsbin.hoqikeni.1 有名字，也有陣列了
. 接下去要變成點點
    try{
      int j=int.parse('abc');
    } on Exception catch (e) {
      print(e);
    }

== start coding 20191026 13:52 25min ==
. 定義最終輸出應該要是這樣
[1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 6, 0, 0, 3, 0, 0, 20],
[0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 2, 2, 0, 15],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 0, 0, 2, 0, 0, 21],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 0, 3, 0, 0, 20],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 2, 0, 0, 20],
[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 10, 0, 0, 1, 0, 0, 21],
[2, 2, 0, 0, 1, 0, 2, 4, 0, 0, 0, 0, 3, 7, 0, 0, 2, 0, 0, 0, 0, 8, 1, 0, 1, 0, 0, 9, 0, 0, 3, 0, 0, 8, 0, 0, 1, 0, 0, 7, 0, 0, 43, 0, 0, 13, 2, 0, 117]
. 先統計某個人的名字有多少 green yellow red at STEP
Map mapNameStepLight = {};
void addCounter(String strName, String strStep, String strLight) {
    if (mapNameStepLight[strName] == null) {
      mapNameStepLight[strName] = {};
    }
    if (mapNameStepLight[strName][strStep] == null) {
      mapNameStepLight[strName][strStep] = {};
    }
    if (mapNameStepLight[strName][strStep][strLight] == null) {
      mapNameStepLight[strName][strStep][strLight] = 0;
    }
    mapNameStepLight[strName][strStep][strLight] += 1;
}

== start coding 20191026 12:46 20min ==
. 讀取檔案，然後要可以做陣列轉換
. 已經可以印出資料了
FINE: 2019-10-26 13:06:24.408346: name:Fanny, light:green, step:01_釐清客戶需求
FINE: 2019-10-26 13:06:24.408375: name:Roger, light:green, step:01_釐清客戶需求
FINE: 2019-10-26 13:06:24.408392: name:Roger, light:green, step:01_釐清客戶需求
FINE: 2019-10-26 13:06:24.408410: name:Elton, light:green, step:01_釐清客戶需求
FINE: 2019-10-26 13:06:24.408424: name:Elton, light:green, step:01_釐清客戶需求

== start coding 20191026 12:17 8min ==
. 要能算出來陣列，基於目前的 tableTrello.json 計算出來

== start coding 20191026 11:26 52min ==
. 先模擬 jsbin 看能不能吃入簡單的 ajax 檔案 for javascript 實驗
. done jsbin 已經成功
@baby 可以實驗這個東西，這個東西是不需要安裝任何軟體，而且還可以透過 javascript array 來動態讀取 datatables 在 jsbin 實驗，我們剛剛才發現的妙招 (edited)
為了要可以讀懂裡面的東西，可以參考這個說明文件：  https://datatables.net/examples/data_sources/js_array.html
簡單的說：就是用 javascript array 組織出 datatables 然後又可以在 jsbin 的環境自由實驗
也就是 @baby 上次提到的困窘我們已經實驗成功 jsbin+datatables+javascript array(其實與ajax幾乎相同）

. 接下來的步驟就是把 javascript array 變成一個乾淨可以實驗的東西
http://live.datatables.net/sipetime/1/edit

var dataSet=[
[1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 6, 0, 0, 3, 0, 0, 20],
[0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 2, 2, 0, 15],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 0, 0, 2, 0, 0, 21],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 0, 3, 0, 0, 20],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 2, 0, 0, 20],
[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 10, 0, 0, 1, 0, 0, 21],
[2, 2, 0, 0, 1, 0, 2, 4, 0, 0, 0, 0, 3, 7, 0, 0, 2, 0, 0, 0, 0, 8, 1, 0, 1, 0, 0, 9, 0, 0, 3, 0, 0, 8, 0, 0, 1, 0, 0, 7, 0, 0, 43, 0, 0, 13, 2, 0, 117]
];

以下程式碼javascript, 已經可以套用點點表裡面的數字，還要進一步轉換為點點
http://live.datatables.net/sipetime/1/edit?html,js,output

+ 已經可以改變 datatables column 任意寬度，但是有個問題是：就算寬度設定為 1 很窄，但是看起來還是比鴻順在試算表當中拉出來的表格還要寬（點點圖），看起來是一種限制了，這個限制應該蠻難突破了，所以目前先不管了
http://live.datatables.net/bowayito/2/edit?html,js,output

var dataSet=[
[1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 6, 0, 0, 3, 0, 0, 20],
[0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 2, 2, 0, 15],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 7, 0, 0, 2, 0, 0, 21],
[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 5, 0, 0, 3, 0, 0, 20],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 2, 0, 0, 20],
[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 10, 0, 0, 1, 0, 0, 21],
[2, 2, 0, 0, 1, 0, 2, 4, 0, 0, 0, 0, 3, 7, 0, 0, 2, 0, 0, 0, 0, 8, 1, 0, 1, 0, 0, 9, 0, 0, 3, 0, 0, 8, 0, 0, 1, 0, 0, 7, 0, 0, 43, 0, 0, 13, 2, 0, 117]
];

$(document).ready(function() {
  var table = $('#example').removeAttr('width').DataTable( {
        "scrollX": true,
        "scrollY": true,
        data: dataSet,
        columnDefs: [
            { width: 60, targets: 0 },
            { width: 50, targets: 1 },
            { width: 40, targets: 2 },
            { width: 30, targets: 3 },
            { width: 20, targets: 4 },
            { width: 10, targets: 5 },
            { width: 1, targets: 6 },
            { width: 7, targets: 0 },
        ],
        fixedColumns: true,
        columns: [
            { title: "1"},
            { title: "2" },
            { title: "3" },
            { title: "4" },
            { title: "5" },
            { title: "6" },
            { title: "7" },
            { title: "8" },
            { title: "9" },
            { title: "10" },
            { title: "11" },
            { title: "12" },
            { title: "13" },
            { title: "14" },
            { title: "15" },
            { title: "16" },
            { title: "17" },
            { title: "18" },
            { title: "19" },
            { title: "20" },
            { title: "21" },
            { title: "22" },
            { title: "23" },
            { title: "24" },
            { title: "25" },
            { title: "26" },
            { title: "27" },
            { title: "28" },
            { title: "29" },
            { title: "30" },
            { title: "31" },
            { title: "32" },
            { title: "33" },
            { title: "34" },
            { title: "35" },
            { title: "36" },
            { title: "37" },
            { title: "38" },
            { title: "39" },
            { title: "40" },
            { title: "41" },
            { title: "42" },
            { title: "43" },
            { title: "44" },
            { title: "45" },
            { title: "46" },
            { title: "47" },
            { title: "48" },
            { title: "49" }
        ]
    } );
} );

== start coding 20191026 09:24 45min ==
. 為了要可以產生點點表的數字，所以現在先模擬最後結果陣列，然後要把陣列套入 datatables 數字表單裡面，先做這個步驟
. next: 10:27 下次要可以捲動 table, table head 要可以合併三個三個這樣, 然後窄一點
. 要可以 dart 計算出真實數字 matrix 套入

== start coding 20191024 10:10 60min ==
. 現在已經可以做出打點了，可以規劃線上編輯器，未來可以有機會 refactoring 為任意編輯 trello to dart ui
. 目前點點表的數字也要可以產生

== start coding 20191021 09:36 15min ==
. 繼續觀賞 datatables 種種好用的功能
. 按照人名或階段排序 row https://datatables.net/examples/advanced_init/row_grouping.html
. footer加總總金額：https://datatables.net/examples/advanced_init/footer_callback.html
. 多重條件篩選搜尋：https://datatables.net/examples/api/multi_filter.html
. 多重條件下拉搜尋：https://datatables.net/examples/api/multi_filter_select.html
. 下拉更多內容顯示：https://datatables.net/examples/api/row_details.html

== start coding 20191021 09:07 15min ==
. 研究線上試算表的可能性，要能夠輸入金額，處理點點表
. 取得初步成果 datatables 其實很適合試算表輸入作業，只是要先製作很好的表格 gui 需要事先設計
  https://datatables.net/examples/api/form.html
. https://datatables.net/examples/basic_init/state_save.html 這個可以記住目前分頁以及一次顯示幾筆狀態，下次重現
. 垂直與橫向捲動都可以 https://datatables.net/examples/basic_init/scroll_xy.html
. 數字三位一撇：https://datatables.net/examples/basic_init/comma-decimal.html
. 多國語言改變顯示： https://datatables.net/examples/basic_init/language.html
. 多國語言可以用 json 傳入 https://datatables.net/examples/advanced_init/language_file.html

== start coding 20191020 19:09 ==
. 往後的研發記錄可以直接在這邊追蹤，應該比起 gmail 回報研發記錄簿更方便才對
. 要有地方可以記錄 todo 的內容
. 採用 evernote 紀錄 skype 裡面的待辦還不錯
. 或者採用 trello 紀錄待辦還不錯
. 可以用用看 trello 好了
. trello 已經把 todo 弄好了 https://trello.com/b/zARWAN43/cameo-flow

==
cameo flow 研發記錄簿
收件匣
x
Start timer

Bowen Chiu <cbh@cameo.tw>
2019年9月29日 上午8:19
寄給 我

儀表板圓餅圖長條圖的鴻順已經在試算表拉出來的樣態示範
https://photos.google.com/share/AF1QipOktB9JfMIh6CDnAWJWUe-GE3omZ3DesV-SDNzBmzHLaTAs2t01bqjhNrSL-7sZCQ?key=NjZoLTFQS3hlMENDRV9TRklJa0hSd1A5YUYxck5R

線上試算表，線上看板法元件 js javascript
https://webix.com/demos/kanban/

有完整Excel線上試算表的功能示範
https://handsontable.com/examples?headers

家廚
http://www.moodi-wood.com/


Bowen Chiu <cbh@cameo.tw>
2019年10月6日 上午11:56
寄給 我

start 2019-10-06 10:51
歷程紀錄：
心得：未來不管bootstrap or table元件怎麼改變，核心dart coding都不會改變就可以了
把webix嵌入bootstrap adminlte看看
http://localhost:8085/pages/tables/15_datatable/01_loading/02_url_data.html
可行可以看到相對路徑元件都沒有問題
https://docs.webix.com/api__refs__ui.datatable.html

加愛紀錄：
+ 下次可以用純 webix 測試看看 https://webix.com/demos/bank-app/#!/top/transactions
+ 這次混合 bootstrap webix 感覺很酷
+ 下次可以讓純 webix 在手機或者平板上面跑
+ 純 webix 的處理可以將資料與程式碼徹底分離，而且很乾淨，寫法簡單
+ 已經知道純 bootstrap 是很難處理資料與程式碼顯示分離的情況，其實這也是為何要有資料框架的原因

2019-10-06 08:52 +i
+已經可以讓 webix table 正確顯示中文以及內涵，但是放大縮小螢幕還不會動作
+已經找到讓 bootstrap 可以有 bowenBox 區域可以改變 table
+確定 bootstrap theme 是用 html tags 方式來展示，所以只要動態產生 html tags 很有彈性納入圖表
+adminlte, bootstrap也有table搜尋功能，表單的功能不亞於 webix
+webix可以動態 load data.json是比較能夠讓程式碼乾淨的處理


Bowen Chiu <cbh@cameo.tw>
2019年10月6日 下午3:23
寄給 我

== coding log: start 2019-10-06 14:19 ==
有點煩，因為兼職薪資的討論有點煩
然後：因為不確定整個產品選單框架選哪一個有點煩
webix優點是程式設計比較容易，資料與顯示分離
bootstrap優點是完整RWD管理介面很不錯
混合bootstrap rwd + webix 看起來是比較好的選擇 for users
但是混合就會造成程式設計複雜度html的複雜度問題
有一個簡單的做法是硬改 bootstrap rwd
目前的目標應該鎖定在：看看有哪些可能的方案，允許嵌入 webix datatable 又能好用的

001 adminlte(要放大125%) + webix datatable => 可用，但程式碼有點難寫，要找出聰明寫法
002 webix only, 找不到 touch ui demo => webix banking app 是最適合的，可以收合 menu
003 angularDart, or dart table mat-table => 找不到適合的
004 flutter only
ok, 決定採用 webix banking app 繼續發展下去，這樣就有一個框架了

現在要把 webix banking app 架設起來
看了 readme 所以要先安裝 npm
必須執行下面這兩行
brew install node
brew install npm

安裝結果可行，但是，碰到無法整合到 dart 的困難度，目前不知道怎樣讓 dart server 可以啟動
已經確認 npm start 啟動沒有問題，但是我們其實並不想要使用 npm server
另外，有個問題是：有很多元件有安全性問題不知道怎麼升級（npm install就會發現）

15:18
剛剛跑了 npm run build 竟然就可以用在 dart server 成功了
太詭異了哈哈哈哈哈，幾乎是最後一分鐘成功

3min +i
+ 挑選到 webix banking app 原本以為沒希望，結果又編譯成功，而且有 source code 的樣子
+ 大排版框架已經有一個譜
i 未來性堪慮，這個 webix widget 應該沒問題，但是 webix banking app 未來性有點問題
i banking source code 沒有看清楚，不知道等一下改會不會出問題，可以試試看把試算表都弄上來看看

== coding log: start 2019-10-06 13:25 ==
測試 ipad mini 瀏覽 webix demo 橫向的使用者經驗是否滿意
http://192.168.1.6:8085/pages/tables/simple.html
http://localhost:8085/pages/tables/simple.html
https://webix.com/demos/touch/ 這個就很適合我們使用在 ipad 上面了，麻煩的是沒有 source code
13:47 要找一下 source code

== coding log: start 2019-10-06 10:51 ==
歷程紀錄：
心得：未來不管bootstrap or table元件怎麼改變，核心dart coding都不會改變就可以了
把webix嵌入bootstrap adminlte看看
http://localhost:8085/pages/tables/15_datatable/01_loading/02_url_data.html
可行可以看到相對路徑元件都沒有問題
https://docs.webix.com/api__refs__ui.datatable.html

加愛紀錄：
+ 下次可以用純 webix 測試看看 https://webix.com/demos/bank-app/#!/top/transactions
+ 這次混合 bootstrap webix 感覺很酷
+ 下次可以讓純 webix 在手機或者平板上面跑
+ 純 webix 的處理可以將資料與程式碼徹底分離，而且很乾淨，寫法簡單
+ 已經知道純 bootstrap 是很難處理資料與程式碼顯示分離的情況，其實這也是為何要有資料框架的原因

== coding log: 2019-10-06 08:52 +i ==
+已經可以讓 webix table 正確顯示中文以及內涵，但是放大縮小螢幕還不會動作
+已經找到讓 bootstrap 可以有 bowenBox 區域可以改變 table
+確定 bootstrap theme 是用 html tags 方式來展示，所以只要動態產生 html tags 很有彈性納入圖表
+adminlte, bootstrap也有table搜尋功能，表單的功能不亞於 webix
+webix可以動態 load data.json是比較能夠讓程式碼乾淨的處理

目前要找 dart table 可以顯示的方法
https://pub.dev/packages/json_table
https://webix.com/widget/datatable/

https://www.datatables.net/
https://material.angular.io/components/table/overview


Bowen Chiu <cbh@cameo.tw>
2019年10月7日 上午12:01 (13 天前)
寄給 我

== coding log 21:35 ==
pending: 如何讓 bootstrap touch ui 可以更多適合 ipad 的橫版本版型？ pending
如何讓 dart bootstrap 可以結合？
中文化 datatables datatable jquery
http://yhhuang1966.blogspot.com/2013/05/jquery-datatable.html
var opt={"oLanguage":{"sUrl":"dataTables.zh-tw.txt"},
              "bJQueryUI":true,
              "bProcessing":true,
              "aoColumns":[{"sTitle":"股票名稱"},{"sTitle":"股票代號"}],
              "sAjaxSource":"http://tony1966.xyz/test/jquerytest/get_stocks_list_aa.php"
              };
$("#table1").dataTable(opt);
結果現在連 jquery 也可以運用 datatable 達成跟 webix 幾乎相同甚至更強大的能力
現在應該就是開始做 jquery datatable 的排版運用了

+i 22:37
+ 總算找到可以長期運用的 jquery datatables 而且還是大部分 bootstrap theme 所採用
+ jquery datatables 可以輕易的嵌入 json from url 或者跟後臺資料庫格式對接
+ jquery datatables 看起來跟 dart 產生 json 可以完美的結合在一起，太棒了
q angularDart 竟然沒有一個很好的 datatables 而且編譯好久，然後顯示也很久，怪怪的東西
+ bootstrap studio 應該可以多多運用，如果讀取 theme 很順暢的話，說不定可以用來編輯

== start task 21:22 審查
done

== start task 2019-10-06 17:48
task 1 start 17:48 印出明天要簡報的東西
task 2 審查宜敏的東西
task 1: 18:22 印出東西黑白已經完成正在印彩色等待當中

== coding log: start 2019-10-06 16:07 ==
單純用 webix 已經宣告完蛋，因為有授權bugs版本號問題
現在還有一個考慮是可以採用 angularDart 因為這個作法的 table 元件很強大
我們可以考慮看看
start angularDart的tutorial
Run the app
In WebStorm:
In the project view, right-click web/index.html.
Choose Run ‘index.html’.
hello angular成功了！
哎，繼續學下去，angular感覺也是一堆麻煩的事情，很糟
差不多接下去就要運用 bootstrap 來做事情了 dart plus bootstrap 可以找找方法
i dart bootstrap 作為下次的起頭吧！！！

== coding log: start 15:39 25min ==
可以再深入一下 webix banking
this version of webix is not intended for using outside of webix.com
這個問題很嚴重
決定放棄 webix banking
回到 adminlte 要考慮是不是運用 adminlte 搭配 table 產生器來製作美麗表單
end 15:47


Bowen Chiu <cbh@cameo.tw>
2019年10月9日 上午9:29 (11 天前)
寄給 我

TC轉轉語言 v1.4
add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
add 起始日 /cards/customFieldItems/value/date
add 案件名稱 /cards/name
add 金額 /cards/customFieldItems/value/number
add 交期 /cards/due
add 人員 /cards/customFieldItems/idValue idCustomField=="*f3f0"
add 優先次序 /cards/labels/color
add 客戶 /cards/customFieldItems/value/text
add 階段 /cards/idList
add 產品類別 /cards/customFieldItems/idValue idCustomField=="*a129"
replace /cards/customFieldItems/idValue
/cards/customFields/options/value/text ../id

~~

TC轉轉語言 v1.3
add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
add 起始日 /cards/customFieldItems/value/date
add 案件名稱 /cards/name
add 金額 /cards/customFieldItems/value/number
add 交期 /cards/due
add 人員 /cards/customFieldItems/idValue idCustomField=="*f3f0"
add 優先次序 /cards/labels/color
add 客戶 /cards/customFieldItems/value/text
add 階段 /cards/idList
add 產品類別 /cards/customFieldItems/idValue idCustomField=="*a129"
replace /cards/customFieldItems/idValue
/cards/customFields/options/value/text /cards/customFields/options/id

~~

TC轉轉語言 v1.2
add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
replace /cards/customFieldItems/idValue
/cards/customFields/options/value/text /cards/customFields/id=="*3a1b"

add 起始日 /cards/customFieldItems/value/date
add 案件名稱 /cards/name
add 金額 /cards/customFieldItems/value/number
add 交期 /cards/due

add 人員 /cards/customFieldItems/idValue idCustomField=="*f3f0"
replace /cards/customFieldItems/idValue
/cards/customFields/options/value/text /cards/customFields/id=="*f3f0"

add 優先次序 /cards/labels/color
add 客戶 /cards/customFieldItems/value/text
add 階段 /cards/idList

add 產品類別 /cards/customFieldItems/idValue idCustomField=="*a129"
replace /cards/customFieldItems/idValue
/cards/customFields/options/value/text /cards/customFields/id=="*a129"

~~

TC轉轉語言 v1.1
add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
replace 客源 /cards/customFields/options/value/text ../id

add 起始日 /cards/customFieldItems/value/date
add 案件名稱 /cards/name
add 金額 /cards/customFieldItems/value/number
add 交期 /cards/due

add 人員 /cards/customFieldItems/idValue idCustomField=="*f3f0"
replace 人員 /cards/customFields/options/value/text ../id

add 優先次序 /cards/labels/color
add 客戶 /cards/customFieldItems/value/text
add 階段 /cards/idList

add 產品類別 /cards/customFieldItems/idValue idCustomField=="*a129"
replace 產品類別 /cards/customFields/options/value/text ../id

~~

TC轉轉語言 v1.0
add 客源 /[]cards/{}/[]customFieldItems/{}/idValue idCustomField=="*3a1b"
replace 客源 /[]cards/[]customFields/{}/[]options/{}/{}value/text ../id

add 起始日 /[]cards/{}/[]customFieldItems/{}/{}value/date
add 案件名稱 /[]cards/{}/name
add 金額 /[]cards/{}/[]customFieldItems/{}/{}value/number
add 交期 /[]cards/{}/due

add 人員 /[]cards/{}/[]customFieldItems/{}/idValue idCustomField=="*f3f0"
replace 人員 /[]cards/[]customFields/{}/[]options/{}/{}value/text ../id

add 優先次序 /[]cards/{}/[]labels/{}/color
add 客戶 /[]cards/{}/[]customFieldItems/{}/{}value/text
add 階段 /[]cards/{}/idList

add 產品類別 /[]cards/{}/[]customFieldItems/{}/idValue idCustomField=="*a129"
replace 產品類別 /[]cards/[]customFields/{}/[]options/{}/{}value/text ../id


Bowen Chiu <cbh@cameo.tw>
2019年10月10日 下午3:01 (10 天前)
寄給 我

== coding log start 14:02 ==
有兩種可以進行的方式，每天早上早起運動完畢之後快速看課程，做兩個小時分享
這樣今天下午就可以做 jsoncsv 的開發
要先做一個簡單可以處理的環境，coding環境要先建構出來，可以輕易處理json的環境
至少把第一個欄位的值先調用出來 print

已經可以show

void jclangAdd(strColumnName,strSelect,strWhere,Map mapJson){
  //add 客源 /cards/customFieldItems/idValue idCustomField=="*3a1b"
  //cards[] scan all list
  //customFieldItems scan all list
  //get idValue where idCustomField=="*3a1b" and skip all others
  //mapJson["cards"][2]["customFieldItems"][4]["idValue"]
  print('staticWeb.dart/jclangAdd/mapJson:'+mapJson["cards"][2]["customFieldItems"][4]["idValue"]);
}


Bowen Chiu <cbh@cameo.tw>
2019年10月14日 上午7:14 (6 天前)
寄給 我

== coding 2019 1013 22:53
done 找出 javaScript 最受歡迎課程來學習（done 感覺動力還好，學習動力需要有專案驅動）23:02
找出 bss.design 是不是可以抓遠端 trello json 的可能性，這樣架站安全密碼比較方便
23:25 ans:
bss.design可以hosting所有的程式碼沒有問題，但是trello json
data怎麼過去呢？有一個技巧。可以直接post過去，簡單的說，可以這樣弄：
http://flow.cameo.tw/?companyId=cj06
這是環中店的意思
這個網址會對應到一個簡單的 python source code cgi 讀取全部的環中店內容之後 http get 給 bss.design

todo 找出 javaScript 用來判斷是不是已經登入的程式碼，看有沒有密碼登入比較現成可用的
todo cameo flow, 把每個欄位填寫出來回報 cameo flow team

+找到jsonp這種寫法確定可以讓bss.design順暢顯示東西，然後讓 compute engine 產生做好的json
file之後，提供 jsonp server
https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/
jsonp server可以回傳 using dart

== coding 1013 18:39
現在開始開發 trello to csv 的程式碼，專注的寫出只要功能，下一個步驟才考慮 refactoring
+ 已經可以把106張卡片裡面的三個欄位：客源、人員、產品類別，全部抓出來了
+ 發明jclang v1.4雖然還沒有真的動態變成語言，但可以透過人類的方式翻譯程式碼也很有趣
+ jclang v1.4 -> human -> dart functions
+ 先寫出有功能的程式碼確實有成就感
i 下一個步驟可能要把簡單的欄位也全部抓出來，然後填寫每個 card 到 row, row.add('人員',strValue);

== coding 1013 15:53
現在有個麻煩的地方是，無法綁定 google compute engine port 80,

找出有哪些 port number 正在聽取 netstat -tulpn | grep LISTEN

突破 permission 限制綁定 port 80  sudo dart bin/server.dart

現在要直接連 port 80

第一個條件要打開防火牆
gcloud compute firewall-rules create default-allow-http-8080 \
    --allow tcp:8080 \
    --source-ranges 0.0.0.0/0 \
    --target-tags http-server \
    --description "Allow port 8080 access to http-server"

第二個條件要綁定 private ip 才能對應到 public ip

編輯 VM 之後，取得靜態IP位置

+ 已經可以取得靜態IP 可以運用了
http://35.221.219.153:8083/
http://35.221.219.153:80

+ 防火牆打開的命令也都會了
+ 實驗也知道綁 private ip 可以對應到外部 ip
i 下一個步驟應該是要製作 SSL 憑證，讓SSL可以運作
i 下一個步驟可以開始寫程式把 trello json to csv 寫出來了

== coding 1013 12:21
google cloud platform 安裝 apt-get 碰到困難
因此改用這個安裝方法
sudo yum groupinstall 'Development Tools'
應該就可以把apt-get安裝完成了

## 安裝dart到debian
sudo apt-get update
sudo apt-get install apt-transport-https
sudo sh -c 'curl https://dl-ssl.google.com/linux/linux_signing_key.pub
| apt-key add -'
sudo sh -c 'curl
https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_stable.list
> /etc/apt/sources.list.d/dart_stable.list'
sudo apt-get update
sudo sh -c 'curl
https://storage.googleapis.com/download.dartlang.org/linux/debian/dart_unstable.list
> /etc/apt/sources.list.d/dart_unstable.list'
sudo apt-get install dart

##安裝git
sudo apt update
sudo apt install git

##複製專案
git clone https://github.com/bohachu/cameoFlowServer.git

##更新專案檔案
git pull

##
export PATH="$PATH:/usr/lib/dart/bin"
echo 'export PATH="$PATH:/usr/lib/dart/bin"' >> ~/.profile


Bowen Chiu <cbh@cameo.tw>
2019年10月19日 下午11:00 (20 小時前)
寄給 我

== start 1019 21:56 coding
這個範例是將 csv to ajax 最簡單的方法，可以輸出看看
https://datatables.net/examples/ajax/simple.html

這一行有問題
["","","","","","",[Eline][佳福廖素慧][36][2020/9/30]","","05_報價1","black"],
其他已經可以跑

-- html --
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Client Side jQuery DataTables</title>
    <!--引用css-->
    <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css"
rel="stylesheet"/>
</head>
<body>

<table class="display" id="myTable" style="width:100%">
    <thead>
    <tr>
        <th>a</th>
        <th>b</th>
        <th>c</th>
        <th>d</th>
        <th>e</th>
        <th>f</th>
        <th>g</th>
        <th>h</th>
        <th>i</th>
        <th>j</th>
    </tr>
    </thead>
</table>

<!--引用jQuery-->
<script src="https://code.jquery.com/jquery-3.3.1.js"
type="text/javascript"></script>
<!--引用dataTables.js-->
<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"
type="text/javascript"></script>

<script type="text/javascript">
    $(document).ready(function () {
        $('#myTable').DataTable({
            "ajax": "data.txt"
        });
    });
</script>
</body>
</html>

-- ajax txt: （list 最後一行不可以有逗點) --

{
    "data":
    [
        ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
        ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i2", "j2"]
    ]
}


== start 1019 13:57 coding
現在要判斷如何運用 datatables sample 比較好的範例在哪, 要適合Cameo Flow產品的
關鍵字：datatables tutorial
找到這個網頁裡面有很好的範例
//cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css
//cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js

https://code.jquery.com/jquery-3.3.1.js
https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js

<script src="jquery-1.6.1.js"></script>
<script src="my_jquery.js"></script>

<link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
crossorigin="anonymous"></script>

bootstrap 4 起始者範例

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,
initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet"
href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
crossorigin="anonymous"></script>
  </body>
</html>


Bowen Chiu <cbh@cameo.tw>
2019年10月19日 下午11:07 (20 小時前)
寄給 我

== +i 2019 23:02
+ 已經可以用 ajax array 展示
i 下次要能夠改用動態 trello 拖拉之後動態顯示html datatables

001 http://aaa.bbb.ccc.ddd/cameoFlow.html
002 接手的是 dart server, 偵測到網址之後，開始進行 data.ajax 檔案轉換
003 dart server : 讀取遠端 trello json file
004 dart server : json to data.ajax, and save file
005 dart server : 返回靜態檔案 cameoFlow.html 接著立刻讀取 data.ajax 成為動態 table 呈現


Bowen Chiu <cbh@cameo.tw>
上午10:21 (8 小時前)
寄給 我

== start coding 2019 1020 08:56
為了可以要遠端使用，第一個步驟是遠端讀取 trello json file 要能運作 port 80 web server
+已經可以動態抓取local ip
+已經可以遠端抓trello json
+已經可以compute engine跑起來不會當機 out of memory
i 下一個動態產生 data.ajax 陣列檔案放在 bss/data.ajax
i 然後讓 bss/index.html 可以放入一個簡單的 datatables
i 然後讓 bss/index.html 真的導入 data.ajax 動態可以讀取
