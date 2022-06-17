document.querySelector(".show").addEventListener("click", removeClass)

function removeClass() {
    document.querySelector(".mon").classList.remove('hide')
}

document.querySelector(".getMon").addEventListener("click", chooseMon)

function chooseMon() {
    document.querySelector(".mon").classList.add("hide")
    document.querySelector(".mon").src = `../imgs/pkmn151/${Math.floor(Math.random()* 151) + 1}.png`
}