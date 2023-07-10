function showTitle() {
    console.log("My website title");
}
showTitle();
function getText(txt) {
    console.log("show ".concat(txt));
}
getText("hello");
function sumNumber(n1, n2) {
    return n1 + n2;
}
var res = sumNumber(20, 10);
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A : ".concat(res));
function callculetBMI(waight1, height1) {
    return waight1 / (height1 * height1);
}
var bmi = callculetBMI(73, 1.79);
console.log("\u0E04\u0E48\u0E32 bmi : ".concat(bmi));
//Arow function
var sumNumber2 = function (nn1, nn2) { return nn1 + nn2; };
var resSum = sumNumber2(3, 4);
console.log("\u0E1C\u0E25\u0E23\u0E27\u0E21 ".concat(resSum));
//class 
var Rectagle = /** @class */ (function () {
    function Rectagle() {
    }
    Rectagle.prototype.calRect = function () {
        return this.w * this.h;
    };
    return Rectagle;
}());
var rect = new Rectagle();
rect.h = 10;
rect.w = 40;
console.log("\u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E35\u0E48\u0E40\u0E2B\u0E25\u0E35\u0E48\u0E22\u0E22\u0E21\u0E40\u0E17\u0E48\u0E32\u0E01\u0E31\u0E1A : ".concat(rect.calRect()));
//class
var Grad = /** @class */ (function () {
    function Grad() {
    }
    Grad.prototype.calGread = function () {
        return this.score1 + this.score2 + this.score3;
    };
    return Grad;
}());
var grd = new Grad();
grd.score1 = 20;
grd.score2 = 30;
grd.score3 = 40;
console.log("\u0E04\u0E30\u0E41\u0E19\u0E19\u0E23\u0E27\u0E21 : ".concat(grd.calGread()));
