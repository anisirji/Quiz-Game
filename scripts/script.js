'use strict'

let points = 0
let btnAble = 0

// const qno = document.getElementById('Qno')
// const question = document.getElementById("question")
// const options = document.getElementById('options')
// const button = document.getElementById('button')

const main = document.getElementById("root")
main.classList.add('main')

const mainContainer = document.createElement("div");
mainContainer.className = "mainContainer";
main.appendChild(mainContainer);
const heading = document.createElement("p")
heading.appendChild(document.createTextNode("Quiz"))
mainContainer.appendChild(heading)   


let resultContainer;

const btn = document.createElement('div')
btn.className = "button"
btn.classList.add('disable')
btn.appendChild(document.createTextNode("Submit"))
btn.addEventListener('click',(e) => {
    console.log(points);
    const ans = document.getElementsByClassName('resultContainer')
    alert("Your Total Score = " + points)
    btn.innerText = "View Score"
    for (let i in ans){
        console.log(ans[i]);
        ans[i].classList.remove('hide')
    }
   
})

for (let key in questionJson){
        // console.log(questionJson[key]["Q"])
        // console.log(questionJson[key]["option"])
        // console.log(questionJson[key]["ans"])

        createEle(key,questionJson[key]["Q"],questionJson[key]["option"],questionJson[key]["ans"])
}


main.appendChild(btn)




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
        li.classList.add('li')
        li.appendChild(document.createTextNode(option[options]))
        li.addEventListener('click',(e) =>{
            li.classList.add('select')
            btnAble++;
            container.classList.add('disable')
            if(li.innerHTML === ans){
                // document.getElementById('ansPoints').innerHTML=`points: 10`;
                points+=10
            }
            if(btnAble === 5){
                btn.classList.remove('disable')
            }
        })
        optionList.appendChild(li)
    }
    optionContainer.appendChild(optionList)
    container.appendChild(optionContainer);

    resultContainer = document.createElement('div');
    resultContainer.className = "resultContainer";
    resultContainer.classList.add('hide');
    const a = document.createElement('div');
    a.appendChild(document.createTextNode(`Answer: ${ans}`));
    resultContainer.appendChild(a);
    const p = document.createElement('div');
    p.id = 'ansPoints';
    resultContainer.appendChild(p)
    container.appendChild(resultContainer)
}
