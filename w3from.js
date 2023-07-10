var f1 = document.getElementById("form1");
var div1 = document.getElementById("ShowText");
var div2 = document.getElementById("showNum");
var inputText = document.getElementById("input1");
var inputNum = document.getElementById("input2");
f1 === null || f1 === void 0 ? void 0 : f1.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("คลิก");
    div1.innerHTML = "Hello Typscricp ".concat(inputText.value);
    div2.innerHTML = "\u0E2D\u0E32\u0E22\u0E38 20 ".concat(inputNum.value);
});
