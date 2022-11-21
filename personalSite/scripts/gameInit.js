import runGame from "../../personalSite/scripts/gameRunner"
addListeners() {
    document.getElementsByClassName("startButton")[0].addEventListener('click', runGame)
}
addListeners();