(function (d) {
    var $ = function (id) {
        return d.getElementById(id);
    }

    // 取得顯示幕
    var screen = $('screen');
    var btnNumbers = [];

    // 取得數字按鈕
    for (var i = 0; i <= 9; i++) {
        btnNumbers[i] = $('num-' + i);
    }

    // 按下數字按鈕
    for (var i = 0; i <= 9; i++) {
        btnNumbers[i].onclick = function () {
            if (screen.innerHTML === '0') {
                screen.innerHTML = '';
            }
            screen.innerHTML += this.innerHTML;
        }
    }
})(document);
