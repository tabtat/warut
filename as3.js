var N1 = document.getElementById("name1");
var dv = document.getElementById("Show");
var inputName = document.getElementById("lb1");
var inputNum2 = document.getElementById("ip2");
var inputNum3 = document.getElementById("ip3");
var inputNum4 = document.getElementById("ip4");
N1 === null || N1 === void 0 ? void 0 : N1.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("คลิก");
    var point1 = "".concat(inputNum2.value);
    var point2 = "".concat(inputNum3.value);
    var point3 = "".concat(inputNum4.value);
    var p1 = +point1;
    var p2 = +point2;
    var p3 = +point3;
    var point4 = p1 + p2 + p3;
    var sh;
    if (point4 >= 100) {
        sh = "ผิดพลาด";
    }
    else if (point4 >= 80) {
        sh = "เกรด B";
    }
    else if (point4 >= 70) {
        sh = "เกรด B";
    }
    else if (point4 >= 60) {
        sh = "เกรด C";
    }
    else if (point4 >= 50) {
        sh = "เกรด D";
    }
    else {
        sh = "เกรด F";
    }
    dv.innerHTML = "\u0E19\u0E31\u0E01\u0E40\u0E23\u0E35\u0E22\u0E19\u0E0A\u0E37\u0E48\u0E2D : ".concat(inputName.value, " <br> \u0E04\u0E30\u0E41\u0E19\u0E19\u0E23\u0E27\u0E21 : ").concat(point4, "  <br> \u0E40\u0E01\u0E23\u0E14 : ").concat(sh);
});
