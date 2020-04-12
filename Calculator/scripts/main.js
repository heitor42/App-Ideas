const functionKeyboard = document.querySelectorAll(".main-function-input");
const numberKeyboard = document.querySelectorAll(".number-input");
const keyboard = document.querySelector("body");

function addNumberOnDisplay(number, clear = false) {
    const display = document.querySelector("#display");

    if (Number(display.textContent) === 0 || clear) {
        display.innerHTML = number;
    } else {
        display.innerHTML += number;
    }
    
}

keyboard.addEventListener('keypress', fisicalKey);

function fisicalKey(e) {
    if (!!Number(e.key)) {
        addNumberOnDisplay(e.key);
    }
}

functionKeyboard[0].onclick = () => {
    addNumberOnDisplay(0, true)
}

numberKeyboard[0].onclick = () => {
    addNumberOnDisplay(numberKeyboard[0].textContent) 
}

numberKeyboard[1].onclick = () => {
    addNumberOnDisplay(numberKeyboard[1].textContent)
}

numberKeyboard[2].onclick = () => {
    addNumberOnDisplay(numberKeyboard[2].textContent)
}

numberKeyboard[3].onclick = () => {
    addNumberOnDisplay(numberKeyboard[3].textContent)
}

numberKeyboard[4].onclick = () => {
    addNumberOnDisplay(numberKeyboard[4].textContent)
}

numberKeyboard[5].onclick = () => {
    addNumberOnDisplay(numberKeyboard[5].textContent)
}

numberKeyboard[6].onclick = () => {
    addNumberOnDisplay(numberKeyboard[6].textContent)
}

numberKeyboard[7].onclick = () => {
    addNumberOnDisplay(numberKeyboard[7].textContent)
}
numberKeyboard[8].onclick = () => {
    addNumberOnDisplay(numberKeyboard[8].textContent)
}
numberKeyboard[9].onclick = () => {
    addNumberOnDisplay(numberKeyboard[9].textContent)
}
