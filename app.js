(function() {
    'use strict';

    var $ = function(id) {
        return document.getElementById(id);
    };

    var calcFutureValue = function(investment, rate, years) {

    };

    var calculateClick = function() {
        var investment = parseFloat($("investment").value);
        var rate = parseFloat($("rate").value);
        var years = parseFloat($("years").value);
        $("future-value").value = calcFutureValue(investment, rate, years);
    };

    window.onload = function() {
        $("calc").onclick = calculateClick;
    };
});