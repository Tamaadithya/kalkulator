let isEqualPressed = false
function setNumber1() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "1"
}

function setNumber2() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "2"
}

function setNumber3() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "3"
}

function setNumber4() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "4"
}

function setNumber5() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "5"
}

function setNumber6() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "6"
}

function setNumber7() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "7"
}

function setNumber8() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "8"
}

function setNumber9() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "9"
}

function setNumber0() {
    if (isEqualPressed === true){
        isEqualPressed = false
        document.getElementById("result").innerHTML = ""
    }
    document.getElementById("result").innerHTML += "0"
}

function setPlus() {
    if (isEqualPressed === true){
        isEqualPressed = false
    }
    document.getElementById("result").innerHTML += "+"
}

function setmin() {
    if (isEqualPressed === true){
        isEqualPressed = false
    }
    document.getElementById("result").innerHTML += "-"
}
function getResult() {
    isEqualPressed = true
    let result = document.getElementById("result").innerHTML
    document.getElementById("result").innerHTML = eval(result)
}

function setkali() {
    if (isEqualPressed === true){
        isEqualPressed = false
    }
    document.getElementById("result").innerHTML += "*"
}

function setclear(){
    document.getElementById("result").innerHTML = ""
}

function setbagi(){
    if (isEqualPressed === true){
        isEqualPressed = false
    }
    document.getElementById("result").innerHTML += "/"
}

function setkoma(){
    if (isEqualPressed === true){
        isEqualPressed = false
    }
    document.getElementById("result").innerHTML += "."
}