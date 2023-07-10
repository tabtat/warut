const f1 = document.getElementById("form1")
const div1 = document.getElementById("ShowText") as HTMLInputElement
const div2 = document.getElementById("showNum") as HTMLInputElement
const inputText = document.getElementById("input1") as HTMLInputElement
const inputNum = document.getElementById("input2") as HTMLInputElement

f1?.addEventListener("submit", (event)=> {
    event.preventDefault();
    console.log("คลิก")
    div1.innerHTML = `Hello Typscricp ${inputText.value}`
    div2.innerHTML = `อายุ 20 ${inputNum.value}`
})