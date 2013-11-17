(function (d) {
    var dotMode = false;
    var hasDot = false;
    var num1 = 0;
    var mathOp = '';

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
            dotMode = false;
        }
    }

    // 清除按鈕
    var btnClear = $('clear');
    btnClear.onclick = function () {
        screen.innerHTML = '0';
        dotMode = false;
        hasDot = false;
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
        if (!hasDot) {
            dotMode = true;
        }
        hasDot = true;
    };

    // 加法
    var btnMathAdd = $('math-add');
    btnMathAdd.onclick = function () {
        num1 = parseInt(screen.innerHTML, 10);
        mathOp = '+';
        btnClear.onclick();
    };

    // 等於
    var btnCalculate = $('calculate');
    btnCalculate.onclick = function () {
        var num2 = parseInt(screen.innerHTML, 10);
        screen.innerHTML = num1 + num2;
    }

})(document);
