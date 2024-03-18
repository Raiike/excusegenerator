const choix = document.querySelector('#excuses')
const phrase = document.querySelector('#final-sentence')

document.querySelector('#valid').addEventListener("click", () =>{
    choiceExcuse()
})

async function choiceExcuse() {
    let sentence = await fetch(`https://excuser-three.vercel.app/v1/excuse/${menuChoix.value}/`)
    let data = await sentence.json()
    phrase.textContent = data[0].excuse
}

