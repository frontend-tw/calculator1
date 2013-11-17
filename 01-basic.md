# JavaScript 入門

## JavaScript 的執行方式

以瀏覽器為主的執行方式：

1. 放在 script 標籤中
2. 放在外部檔案，用 script 標籤的 src 屬性載入
3. 預設在瀏覽器解釋 HTML 時就會執行，所以會有阻斷的狀況發生

## 小助手

查看目前程式執行到哪裡。

Firefox - Firebug
Chrome - Developer Tool

    alert('here');

    console.log('here');

## 定義變數

    var varName;
    varName = value;

    var varName = value;

    var var1, var2, var 3;

## 函式

重覆使用一段程式碼。

定義函式的兩種方式：

可以在要執行的程式碼後再定義。

    function funcName() {
        return result;
    }

定義後才可以被呼叫。

    var funcName = function () {
        return result;
    };

呼叫：

    funcName();

匿名函式。

## 好習慣

將程式包在函式裡，然後立刻執行。

    (function () {
        
    })();

目的：讓變數只活在這個函式裡，不影響到其他人。

## 取得 HTML 上的元素

    var ele = document.getElementById(idString);

寫成快捷方法：

    var $ = function (id) {
        return d.getElementById(id);
    }

## 處理 HTML 元素的事件

    ele.onclick = function () {
        
    }

取得元素 HTML 內容：

    ele.innerHTML

寫入 HTML ：

    ele.innerHTML = 'content';

## 判斷式

    if (true) {
        // 執行這邊
    }

    if (true) {
        
    } else {
        
    }

JavaScript 沒有 elseif 。

## 陣列與 for 迴圈

陣列寫法

    var myArray = [];

    var myArray = [ 1, 2, 3, 4 ];

陣列元素取法：

index ：索引，從 0 開始，最大為陣列長度減一。

length ：陣列長度。

alert(myArray[0]);

用 for 迴圈取出陣列內容：

for (var i = 0; i < myArray.length; i ++) {
    
}

## 比對

用 `===` 完全比對。

indexOf 比對不到時，回傳 -1 ，而不是 false 。

## 記錄狀態

用變數記住目前程式的狀態。

變數作用範圍 (scope)

## 手動呼叫事件處理

