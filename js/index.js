const step02Themewords = ["机", "椅子", "本", "鉛筆", "ペン", "ノート", "カバン", "時計", "カレンダー", "ガラス", "ドア", "窓", "テレビ", "冷蔵庫", "電子レンジ", "扇風機", "照明", "洗濯機", "ソファ", "クッション",
"ベッド", "枕", "布団", "掃除機", "ダストパン", "箒", "ゴミ箱", "ハンカチ", "財布", "靴", "傘", "スカーフ", "ジーンズ", "シャツ", "靴下", "時計", "財布", "バッグ", "カメラ",
"イヤホン", "ヘッドフォン", "マウス", "キーボード", "スマートフォン", "モバイルバッテリー", "ゲーム", "ベッドルーム", "リビングルーム", "ダイニングルーム", "キッチン", "バスルーム", "トイレ", "シャワー", "バスタブ", "洗面台", "鏡", "タオル",
"シャンプー", "コンディショナー", "ボディーソープ", "歯磨き粉", "歯ブラシ", "トイレットペーパー", "ティッシュ", "ソース", "醤油", "ケチャップ", "マヨネーズ", "マスタード", "ハチミツ", "ソーセージ", "ハム", "チーズ", "ヨーグルト", "卵", "パン",
"米", "麺", "肉", "魚", "野菜", "果物", "ジュース", "お茶", "コーヒー", "水", "ビール", "ワイン", "お酒", "ケーキ", "クッキー", "チョコレート", "アイスクリーム", "ポテトチップス", "スナック", "パンケーキ",
"ピザ", "ハンバーガー", "サンドイッチ", "寿司", "ラーメン", "カレー", "焼肉", "しゃぶしゃぶ", "鍋", "天ぷら", "唐揚げ", "焼き鳥", "串カツ", "たこ焼き", "お好み焼き", "フライドチキン", "ステーキ", "ホットドッグ", "タコス"];


const step03Themewords = ["携帯電話", "テレビ", "コーヒーカップ", "鍋", "自転車", "本", "ペン", "時計", "眼鏡", "カレンダー", "ランプ", "椅子", "テーブル", "車", "鍵", "財布", "バッグ", "コンピューター", "ドア", "窓",
"リモコン", "ノートパソコン", "エアコン", "冷蔵庫", "電子レンジ", "洗濯機", "扇風機", "照明", "ゴミ箱", "時計", "洗剤", "歯ブラシ", "トイレットペーパー", "ティッシュ", "ガラス", "植木鉢", "花瓶",
"パソコン", "メガネ", "ヘッドフォン", "マウス", "キーボード", "スマートフォン", "モバイルバッテリー", "モバイル", "カメラ", "イヤホン", "ノート", "ハンカチ", "コート", "靴", "傘", "スカーフ",
"時計", "財布", "バッグ", "ジーンズ", "シャツ", "靴下", "ベッド", "枕", "布団", "掃除機", "ダストパン", "ほうき", "箒", "ビデオゲーム", "ソファ", "クッション", "カーペット", "カーテン",
"スプーン", "フォーク", "ナイフ", "お皿", "コップ", "ボウル", "フライパン", "鍋", "ケトル", "トースター", "ブレンダー", "オーブン", "缶切り", "包丁", "まな板", "計量カップ", "保存容器",
"ポット", "パン", "カップケーキ", "ホットドッグ", "ピザ", "アイスクリーム", "チョコレート", "サラダ", "スープ", "ステーキ", "パスタ", "ラーメン", "寿司", "サンドイッチ", "ハンバーガー", "フライドポテト",
"ピクルス", "マヨネーズ", "ケチャップ", "マスタード", "ソース", "バター", "ジャム", "ハチミツ", "ヨーグルト", "チーズ", "ミルク", "卵", "トマト", "キュウリ", "ニンジン", "レタス", "キャベツ", "ソファ", "クッション", "カーペット", "カーテン", "キッチン", "リビング", "ダイニング", "ベッドルーム", "バスルーム", "玄関", "テーブルクロス", "クロック", "コーヒーメーカー", "ティーポット", "キャンドル",
"ホルダー", "写真立て", "家具", "テーブル", "椅子", "クッション", "キャビネット", "本棚", "シェルフ", "ベンチ", "ハンガー", "鏡", "絵画", "時計", "装飾", "花瓶", "植物", "ランプ"];


//Step01
//Step01 Save
$("#step01_save").on("click",function(){
    const key = "step01_" + new Date().toLocaleString('ja-JP');
    const value = $("#step01_value").val();
    if(value !== ""){
        localStorage.setItem(key,value);
        if(key.startsWith("step01_")){
            const html = '<tr id="'+key+'"><th class="p-2 border w-px whitespace-nowrap">'+key.replace("step01_", "").slice(0, -3)+'</th><td class="p-2 border">'+value+'</td><td class="p-2 border w-px whitespace-nowrap"><div class="clear"><img src="./img/clear.svg" class="w-6 max-w-6 cursor-pointer hover:opacity-20"></div></td></tr>';
            $("#step01_list").prepend(html);
        }
        $("#step01_value").val(""); // 入力項目を消す
    }
});

//Step01 保存データ表示
    // データを格納する配列
    let itemsStep01 = [];

    // localStorageからデータを取得し、配列に格納
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("step01_")) {
            const value = localStorage.getItem(key);
            // データオブジェクトを作成し、配列に追加
            itemsStep01.push({
                key: key,
                date: new Date(key.replace("step01_", "")) // 日付を取得
            });
        }
    }

    // 日付で配列をソート（新しい順）
    itemsStep01.sort((a, b) => b.date - a.date);

    // ソートされたデータを元にHTMLを生成
    itemsStep01.forEach(item => {
        const value = localStorage.getItem(item.key);
        const html = '<tr id="' + item.key + '"><th class="p-2 border w-px whitespace-nowrap">' + item.key.replace("step01_", "").slice(0, -3) + '</th><td class="p-2 border">' + value + '</td><td class="p-2 border w-px whitespace-nowrap"><div class="clear"><img src="./img/clear.svg" class="w-6 max-w-6 cursor-pointer hover:opacity-20"></div></td></tr>';
        $("#step01_list").append(html);
    });

//Step01 データを削除
$("#step01_list").on("click", ".clear", function(){
    const row = $(this).closest("tr"); // クリックされた削除ボタンの親要素である<tr>を取得
    row.remove(); // 見つけた<tr>を削除
    const key = row[0].id; // 削除された行のキーを取得
    localStorage.removeItem(key); // localStorageから対応するデータを削除
});


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


//Step02 theme
const randomIndexS2 = Math.floor(Math.random() * step02Themewords.length);
$("#step02_theme").text(step02Themewords[randomIndexS2]);
$("#step02_theme_change").on("click", function(){
    const randomIndexS2 = Math.floor(Math.random() * step02Themewords.length);
    $("#step02_theme").text(step02Themewords[randomIndexS2]);
});

//Step02 Save
$("#step02_save").on("click",function(){
    const key = "step02_" + new Date().toLocaleString('ja-JP');
    const value1 = $("#step02_value1").val();
    const value2 = $("#step02_value2").val();
    const values = [$("#step02_theme").text(), value1, value2 ]; // #themeの内容も配列に追加
    if(value1 !== "" && value2 !== ""){
        localStorage.setItem(key, JSON.stringify(values));
        if(key.startsWith("step02_")){
            const html = '<tr id="'+key+'"><th class="p-2 border w-px whitespace-nowrap">'+key.replace("step02_", "").slice(0, -3)+'</th><td class="p-2 border">単語：'+values[0]+'<br>特性：'+values[1]+'<br>逆転：'+values[2]+'</td><td class="p-2 border w-px whitespace-nowrap"><div class="clear"><img src="./img/clear.svg" class="w-6 max-w-6 cursor-pointer hover:opacity-20"></div></td></tr>';
            $("#step02_list").prepend(html);
        }
        $("#step02_value1,#step02_value2").val(""); // 入力項目を消す
    }
});

// Step02 保存データ表示
    // データを格納する配列
    let items = [];

    // localStorageからデータを取得し、配列に格納
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("step02_")) {
            const value = localStorage.getItem(key);
            const valuesArray = JSON.parse(value);
            // データオブジェクトを作成し、配列に追加
            items.push({
                key: key,
                date: new Date(key.replace("step02_", "")), // 日付を取得
                theme: valuesArray[0],
                value1: valuesArray[1],
                value2: valuesArray[2]
            });
        }
    }

    // 日付で配列をソート（新しい順）
    items.sort((a, b) => b.date - a.date);

    // ソートされたデータを元にHTMLを生成
    items.forEach(item => {
        const html = '<tr id="' + item.key + '"><th class="p-2 border w-px whitespace-nowrap">' + item.key.replace("step02_", "").slice(0, -3) + '</th><td class="p-2 border">単語：' + item.theme + '<br>特性：' + item.value1 + '<br>逆転：' + item.value2 + '</td><td class="p-2 border w-px whitespace-nowrap"><div class="clear"><img src="./img/clear.svg" class="w-6 max-w-6 cursor-pointer hover:opacity-20"></div></td></tr>';
        $("#step02_list").append(html);
    });


//Step02 データを削除
$("#step02_list").on("click", ".clear", function(){
    const row = $(this).closest("tr"); // クリックされた削除ボタンの親要素である<tr>を取得
    console.log(row);
    row.remove(); // 見つけた<tr>を削除
    const key = row[0].id; // 削除された行のキーを取得
    localStorage.removeItem(key); // localStorageから対応するデータを削除
});


// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


//Step03 theme
const randomIndexS3_1 = Math.floor(Math.random() * step03Themewords.length);
const randomIndexS3_2 = Math.floor(Math.random() * step03Themewords.length);
$("#step03_theme").text(step03Themewords[randomIndexS3_1] + " & " + step03Themewords[randomIndexS3_2]);

$("#step03_theme_change").on("click", function(){
    const randomIndexS3_1 = Math.floor(Math.random() * step03Themewords.length);
    const randomIndexS3_2 = Math.floor(Math.random() * step03Themewords.length);
    $("#step03_theme").text(step03Themewords[randomIndexS3_1] + " & " + step03Themewords[randomIndexS3_2]);
});

//Step03 Save
$("#step03_save").on("click",function(){
    const key = "step03_" + new Date().toLocaleString('ja-JP');
    const value = $("#step03_value").val();
    const values = [$("#step03_theme").text(), value ]; // #themeの内容も配列に追加
    if(value !== ""){
        localStorage.setItem(key, JSON.stringify(values));
        if(key.startsWith("step03_")){
            const html = '<tr id="'+key+'"><th class="p-2 border w-px whitespace-nowrap">'+key.replace("step03_", "").slice(0, -3)+'</th><td class="p-2 border">単語：'+values[0]+'<br>'+values[1]+'</td><td class="p-2 border w-px whitespace-nowrap"><div class="clear"><img src="./img/clear.svg" class="w-6 max-w-6 cursor-pointer hover:opacity-20"></div></td></tr>';
            $("#step03_list").prepend(html);
        }
        $("#step03_value").val(""); // 入力項目を消す
    }
});

//Step03 保存データ表示
    // データを格納する配列
    let itemsStep03 = [];

    // localStorageからデータを取得し、配列に格納
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("step03_")) {
            const value = localStorage.getItem(key);
            const valuesArray = JSON.parse(value);
            // データオブジェクトを作成し、配列に追加
            itemsStep03.push({
                key: key,
                date: new Date(key.replace("step03_", "")), // 日付を取得
                theme: valuesArray[0],
                value: valuesArray[1]
            });
        }
    }

    // 日付で配列をソート（新しい順）
    itemsStep03.sort((a, b) => b.date - a.date);

    // ソートされたデータを元にHTMLを生成
    itemsStep03.forEach(item => {
        const html = '<tr id="' + item.key + '"><th class="p-2 border w-px whitespace-nowrap">' + item.key.replace("step03_", "").slice(0, -3) + '</th><td class="p-2 border">単語：' + item.theme + '<br>アイデア：' + item.value+ '</td><td class="p-2 border w-px whitespace-nowrap"><div class="clear"><img src="./img/clear.svg" class="w-6 max-w-6 cursor-pointer hover:opacity-20"></div></td></tr>';
        $("#step03_list").append(html);
    });


//Step03 データを削除
$("#step03_list").on("click", ".clear", function(){
    const row = $(this).closest("tr"); // クリックされた削除ボタンの親要素である<tr>を取得
    console.log(row);
    row.remove(); // 見つけた<tr>を削除
    const key = row[0].id; // 削除された行のキーを取得
    localStorage.removeItem(key); // localStorageから対応するデータを削除
});