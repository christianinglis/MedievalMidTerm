// paragraphs
let p1 = document.getElementById("paragraph1")
let p2 = document.getElementById("paragraph2")
let p3 = document.getElementById("paragraph3")

// buttons
let graveyardButton = document.getElementById("graveyardButton")
let basementButton = document.getElementById("basementButton")
let castleButton = document.getElementById("castleButton")

let fightButton = document.getElementById("fightButton")
let bribeButton = document.getElementById("bribeButton")
let friendlyButton = document.getElementById("friendlyButton")
let backButton = document.getElementById("backButton")

let submitGuessButton = document.getElementById("submitGuessButton")

// image
let image = document.getElementById("story-image")

// input
let treasureInput = document.getElementById("treasureInput")

// game starting health
let health = 100
let inventory = []

// function to change text
function changeText(a,b,c){
    p1.textContent = a
    p2.textContent = b
    p3.textContent = c
}

// function to change image
function changeImage(file){
    image.src = file
}

// graveyard scene
function goGraveyard(){
    changeText(
        "You walk into the graveyard.",
        "A scary monster appears.",
        "Will you fight it or bribe it?"
    )

    changeImage("graveyard.jpg")
}

// basement scene
function goBasement(){
    changeText(
        "You walk into the dark basement.",
        "A giant dragon is here.",
        "You could fight it or try to be friendly"
    )
    changeImage("dragon.jpg")
}

// castle scene
function goCastle(){
    changeText(
        "You reach the top of the castle.",
        "A princess is trapped here.",
        "She may know where the treasure is"
    )
    changeImage("princess.jpg")
}

// fight the monster
function fightMonster(){

    health -= 50

    changeText(
        "You try to fight the monster.",
        "You lose 50 health.",
        "you run away."
    )
    changeImage("monster.jpg")
}

// bribe the monster
function bribeMonster(){

    inventory.push("Sword")

    changeText(
        "You give the monster gold.",
        "The monster lets you pass.",
        "You retrieve a sword."
    )
}

// Be friendly to the dragon
function friendlyDragon(){

    inventory.push("Dragon Pet")

    changeText(
        "You are nice to the dragon.",
        "The dragon become your new pet.",
        "This might help later"
    )
}

// check treasure code
function checkCode(){

    if(treasureInput.value == "1234"){

        changeText(
            "The treasure chest opens!",
            "Gold and jewels are everywhere.",
            "You win!"
        )

        changeImage("treasure.jpg")
    } else{

        changeText(
            "Wrong Code.",
            "Look around the castle for clues.",
            ""
        )
    }
}