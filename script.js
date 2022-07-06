'use strict'


// const qno = document.getElementById('Qno')
// const question = document.getElementById("question")
// const options = document.getElementById('options')
// const button = document.getElementById('button')

const main = document.getElementById("root")

const mainContainer = document.createElement("div");
mainContainer.className = "mainContainer";
main.appendChild(mainContainer);
mainContainer.appendChild(document.createElement("h1").appendChild(document.createTextNode("Quiz")))   


for (let key in questionJson){
        console.log(questionJson[key]["Q"])
        console.log(questionJson[key]["option"])
        console.log(questionJson[key]["ans"])

        createEle(key,questionJson[key]["Q"],questionJson[key]["option"],questionJson[key]["ans"])
}



function createEle(key,Q,option,ans) {
    
    const container = document.createElement('div');
    container.className = "container";
    mainContainer.appendChild(container);

    const Qp = document.createElement('p')
    Qp.appendChild(document.createElement('b').appendChild(document.createTextNode(`Question ${key}) `)))
    Qp.appendChild(document.createElement('span').appendChild(document.createTextNode(Q)))
    container.appendChild(Qp)

    const optionContainer = document.createElement('div')
    optionContainer.className="optionContainer"
    const optionList = document.createElement('ul')
    for (let options in option){
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(option[options]))
        optionList.appendChild(li)
    }
    optionContainer.appendChild(optionList)
    container.appendChild(optionContainer);

    const btn = document.createElement('div')
    btn.className = "button"
    btn.appendChild(document.createTextNode("Submit"))
    container.appendChild(btn)
}
