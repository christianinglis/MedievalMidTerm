const p1 = document.getElementById("paragraph1")
const p2 = document.getElementById("paragraph2")
const p3 = document.getElementById("paragraph3")

const graveyardButton = document.getElementById("graveyardButton")
const basementButton = document.getElementById("basementButton")
const castleButton = document.getElementById("castleButton")

const fightMonsterButton = document.getElementById("fightMonsterButton")
const fightDragonButton = document.getElementById("fightDragonButton")
const bribeMonsterButton = document.getElementById("bribeMonsterButton")
const bribeDragonButton = document.getElementById("bribeDragonButton")
const friendlyButton = document.getElementById("friendlyButton")
const backButton = document.getElementById("backButton")

const submitGuessButton = document.getElementById("submitGuessButton")

const image = document.getElementById("story-image")

const treasureInput = document.getElementById("treasureInput")

const healthFill = document.getElementById("health-fill")
const healthText = document.getElementById("health-text")

let maxHealth = 100
let health = 100

function updateHealth() {
    const percent = (health / maxHealth) * 100
    healthFill.style.width = percent + "%"
    healthText.textContent = "Health: " + health
}

function changeText(a, b, c) {
    p1.textContent = a
    p2.textContent = b
    p3.textContent = c
}

function changeImage(file) {
    image.src = file
}

function changeScene(a, b, c, img) {
    changeText(a, b, c)
    changeImage(img)
}

function goGraveyard() {
    changeScene(
        "You walk into the graveyard.",
        "A scary monster appears.",
        "Will you fight it or bribe it?",
        "graveyard.jpg"
    )
}

function goBasement() {
    changeScene(
        "You walk into the dark basement.",
        "A giant dragon is here.",
        "You could fight it or try to be friendly.",
        "dragon.jpg"
    )
}

function goCastle() {
    changeScene(
        "You reach the top of the castle.",
        "A princess is trapped here.",
        "She may know where the treasure is.",
        "princess.jpg"
    )
}

function fightMonster() {
    health -= 50
    if (health < 0) health = 0
    updateHealth()

    changeScene(
        "You fight the monster!",
        "You lose 50 health.",
        "monster.jpg"
    )
}

function fightDragon() {
    health -= 50
    if (health < 0) health = 0
    updateHealth()

    changeScene(
        "You fight the dragon!",
        "You lose 50 health.",
        "dragon.jpg"
    )
}

function bribeMonster() {
    changeText(
        "You give the monster gold.",
        "The monster lets you pass.",
        "You retrieve a sword."
    )
}

function bribeDragon() {
    changeText(
        "You give the dragon treats.",
        "The dragon lets you pass.",
        "You retrieve new armour."
    )
}

function friendlyDragon() {
    changeText(
        "You are nice to the dragon.",
        "The dragon becomes your new pet.",
        "This might help later."
    )
}

function checkCode() {
    if (treasureInput.value === "1234") {
        changeScene(
            "The treasure chest opens!",
            "Gold and jewels are everywhere.",
            "You win!",
            "treasure.jpg"
        )
    } else {
        changeText(
            "Wrong Code.",
            "Look around the castle for clues.",
            ""
        )
    }
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play();
}

graveyardButton.addEventListener("click", goGraveyard)
basementButton.addEventListener("click", goBasement)
castleButton.addEventListener("click", goCastle)

fightMonsterButton.addEventListener("click", fightMonster)
fightDragonButton.addEventListener("click", fightDragon)
bribeMonsterButton.addEventListener("click", bribeMonster)
bribeDragonButton.addEventListener("click", bribeDragon)
friendlyButton.addEventListener("click", friendlyDragon)

//submitGuessButton.addEventListener("click", checkCode)

backButton.addEventListener("click", function () {
    changeScene(
        "You return to the entrance.",
        "The castle is quiet again.",
        "Choose another path.",
        "map.jpg"
    )
})

image.addEventListener("mouseover", function () {
    p3.textContent = "Hint: The treasure code might be 1234."
})

image.addEventListener("mouseout", function () {
    p3.textContent = ""
})

document.addEventListener("keydown", function (event) {
    if (event.key === "h") {
        p2.textContent = "Hint: Try exploring every location."
    }
})

setTimeout(function () {
    console.log("Something might appear soon...")
}, 3000)

updateHealth()