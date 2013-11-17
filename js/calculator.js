(function (d) {
    var dotMode = true;

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
                if (!dotMode) {
                    screen.innerHTML = '';
                }
            }

            if (dotMode) {
                screen.innerHTML += '.';
            }
            
            screen.innerHTML += this.innerHTML;
        }
    }

    // 清除按鈕
    var btnClear = $('clear');
    btnClear.onclick = function () {
        screen.innerHTML = '0';
    };

    // 正負號
    var btnSign = $('sign');
    btnSign.onclick = function () {
        if (screen.innerHTML === '0') {
            return false;
        }

        if (screen.innerHTML.indexOf('-') === -1) {
            screen.innerHTML = '-' + screen.innerHTML;
        } else {
            screen.innerHTML = '' + Math.abs(screen.innerHTML);
        }
    };

    // 小數點
    var btnDot = $('dot');
    btnDot.onclick = function () {
        dotMode = true;
    };

})(document);
