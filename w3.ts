function showTitle() {
    console.log("My website title")
}
showTitle();

function getText(txt : string){
    console.log(`show ${txt}`)
}
getText("hello");


function sumNumber(n1 : number, n2 : number){
    return n1 + n2
}
let res  = sumNumber(20 , 10)
console.log(`ผลรวมเท่ากับ : ${res}`)



function callculetBMI( waight1 : number , height1 : number) {
    return waight1/(height1*height1)
}
let bmi  = callculetBMI(73 , 1.79)
console.log(`ค่า bmi : ${bmi}`)

//Arow function


let sumNumber2 = (nn1 : number , nn2 : number ) => nn1 + nn2;
let resSum = sumNumber2(3,4)
console.log (`ผลรวม ${resSum}`)



//class 
class Rectagle {
    w : number;
    h : number;

    calRect() {
        return this.w * this.h
    }
}
let rect : Rectagle = new Rectagle()
rect.h = 10
rect.w = 40
console.log(`พื้นที่สี่เหลี่ยยมเท่ากับ : ${rect.calRect()}`)


