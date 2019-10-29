
== 20191029 20:34 ==
想要透過十分鐘研究一下為什麼瀏覽器，無法在本機執行呢？
20:50 找到解決方案 open /Applications/Google\ Chrome.app --args --allow-file-access-from-files
20:55 整理
~~ todo list ~~
1h 數字靠右而且三位一撇
2h known 運用 $('.header').load("header.html"); 側邊欄改可重用 系統面：adminlte 介面隱藏不需要的東西，可以用試算表隱藏 hidelang
1h known 直接改中文字串無法重用 系統面：adminlte 把英文介面改為中文介面，用一個試算表來改，不需要動到原本的 html: i18nlang
caro 3* 點點表：最上面有中文標題
use js sum 2* 階段收入表：右邊要有個人加總, 階段收入表：下面要有階段加總
use js sum 1* 階段收入表：下面要有簽約前金額加總

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