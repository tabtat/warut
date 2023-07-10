const N1 = document.getElementById("name1")

const dv = document.getElementById("Show") as HTMLInputElement

const inputName = document.getElementById("lb1") as HTMLInputElement

const inputNum2 = document.getElementById("ip2") as HTMLInputElement

const inputNum3 = document.getElementById("ip3") as HTMLInputElement

const inputNum4 = document.getElementById("ip4") as HTMLInputElement




N1?.addEventListener("submit",(event)=> {

    event.preventDefault();

    console.log("คลิก")




    let point1: string = `${inputNum2.value}`

    let point2: string = `${inputNum3.value}`

    let point3: string = `${inputNum4.value}`

    let p1: number = +point1

    let p2: number = +point2

    let p3: number = +point3

    let point4: number = p1+p2+p3

    let sh: string;

    if (point4 >= 100){

        sh = "ผิดพลาด"

    }

    else if (point4 >= 80){

        sh = "เกรด B"

    }

    else if (point4 >= 70){

        sh = "เกรด B"

    }

    else if (point4 >= 60){

        sh = "เกรด C"

    }

    else if (point4 >= 50){

        sh = "เกรด D"

    }

    else{

        sh = "เกรด F"

    }

   

    dv.innerHTML = `นักเรียนชื่อ : ${inputName.value} <br> คะแนนรวม : ${point4}  <br> เกรด : ${sh}`

})