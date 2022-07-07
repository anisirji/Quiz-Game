const computer = document.getElementById('computer')
const cs = document.getElementById('cs')
const os = document.getElementById('os')
const startBtn = document.getElementById('start')


computer.addEventListener('click',()=>{
    if(startBtn.classList.contains("hidden")){
        startBtn.classList.remove('hidden')
    }
    computer.classList.add('border')
    if(cs.classList.contains('border'))cs.classList.remove('border')
    if(os.classList.contains('border'))os.classList.remove('border')

    startBtn.innerHTML = '<a class = "link" href="./pages/computer.html">Start Quiz on Computer</a>'
})

cs.addEventListener('click',()=>{
    if(startBtn.classList.contains("hidden")){
        startBtn.classList.remove('hidden')
    }
    cs.classList.add('border')
    if(computer.classList.contains('border'))computer.classList.remove('border')
    if(os.classList.contains('border'))os.classList.remove('border')

    startBtn.innerHTML = '<a class = "link" href="./pages/cs.html">Start Quiz on Computer Science</a>'
})

os.addEventListener('click',()=>{
    if(startBtn.classList.contains("hidden")){
        startBtn.classList.remove('hidden')
    }
    os.classList.add('border')
    if(cs.classList.contains('border'))cs.classList.remove('border')
    if(computer.classList.contains('border'))computer.classList.remove('border')

    startBtn.innerHTML = '<a class = "link" href="./pages/os.html">Start Quiz on Operating System</a>'
})