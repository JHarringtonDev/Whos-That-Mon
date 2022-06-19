import {checkDexNumber, answer} from "./pokemonNum.js"

document.querySelector(".show").addEventListener("click", removeClass)
document.querySelector(".getMon").addEventListener("click", chooseMon)
document.querySelector("#userAnswer").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if(document.querySelector(".mon").classList.contains("hide")){
            document.querySelector(".show").click();
        }else{
            document.querySelector(".getMon").click();
        }
    }
});

let selectedMon 
// let answer 
let rolled = []

function removeClass() {
    checkDexNumber(selectedMon)
    let userChoice = document.querySelector("#userAnswer").value
    if(userChoice.toLowerCase() == answer.toLowerCase()){
        document.querySelector(".resultPrompt").innerText = `That's correct! It's ${answer}!`
    }else{
    document.querySelector(".resultPrompt").innerText = `Sorry that's incorrect. It's ${answer}!`
    }
    document.querySelector(".mon").classList.remove("hide")
}



function chooseMon() {
    document.querySelector(".resultPrompt").innerText = `Who's That Pokémon?`
    document.querySelector(".mon").classList.add("hide")
    selectedMon = Math.floor(Math.random()* 151) + 1
    if(!rolled.includes(selectedMon)){
    document.querySelector(".mon").src = `../imgs/pkmn151/${selectedMon}.png`
    document.querySelector("#userAnswer").value = ""
    rolled.push(selectedMon)
    }else{
        chooseMon()
    }
}