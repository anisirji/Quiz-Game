'use strict'


const qno = document.getElementById('Qno')
const question = document.getElementById("question")
const options = document.getElementById('options')
const button = document.getElementById('button')

const questionJson = {
    1:{
        "Q":"MS-Word is an example of _____",
        "option":["An operating system","A processing device","Application software","An input device"],
        "ans":"Application software"
    },
    2:{
        "Q":"Ctrl, Shift and Alt are called .......... keys.",
        "option":["modifier","function","alphanumeric","adjustment"],
        "ans":"modifire"
    }
}

for (let key in questionJson){
        console.log(questionJson[key]["Q"])
        console.log(questionJson[key]["option"])
        console.log(questionJson[key]["ans"])
}