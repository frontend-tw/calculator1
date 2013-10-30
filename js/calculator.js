(function (d) {
    var $ = function (id) {
        return d.getElementById(id);
    }
    var screen = $('screen');
    var btnMemClear = $('mem-clear');
    var btnMemAdd = $('mem-add');
    var btnMemSub = $('mem-sub');
    var btnMemRemember = $('mem-remember');
    var btnClear = $('clear');
    var btnSign = $('sign');
    var btnMathAdd = $('math-add');
    var btnMathSub = $('math-sub');
    var btnMathDiv = $('math-div');
    var btnMathMul = $('math-mul');
    var btnCalculate = $('calculate');
    var btnDot = $('dot');
    var btnNumbers = {};

    for (var i = 0; i <= 9; i++) {
        btnNumbers[i] = $('num-' + i);
    }

    for (var i = 0; i <= 9; i++) {
        btnNumbers[i].onclick = function () {
            if (screen.innerHTML === '0') {
                screen.innerHTML = '';
            }
            screen.innerHTML += this.innerHTML;
        }
    }
})(document);
