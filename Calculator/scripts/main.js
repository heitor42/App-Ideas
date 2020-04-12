const calculator = document.querySelector("body");
const functionKeyboard = document.querySelectorAll(".main-function-input");
const numberKeyboard = document.querySelectorAll(".number-input");
const display = document.querySelector("#display");
const operator = { 
    plus: (value1, value2) => value1 + value2,
    minus: (valie1, value2) => valie1 - value2,
    times: (value1, value2) => value1 * value2,
    divded: (value1, value2) => value1 / value2,
    percent: (value1) => value1 / 100
}
let clear = false

function addNumberOnDisplay(number) {
    if (Number(display.textContent) === 0 || clear) {
        display.innerHTML = number;

        clear = false
    } else {
        display.innerHTML += number;
    }
}

function fisicalKey(e) {
    if (!!Number(e.key) || Number(e.key) === 0) {
        addNumberOnDisplay(e.key);
    }
}

calculator.addEventListener('keypress', fisicalKey);

//percent
functionKeyboard[1].onclick = () => {
    localStorage.setItem('mainMemory', display.innerHTML);
    clear = true;
    addNumberOnDisplay(operator.percent(display.innerHTML));
}

//divded
functionKeyboard[2].onclick = () => {
    localStorage.setItem('mainMemory', display.innerHTML);
    localStorage.setItem('operator', 'divded')
    clear = true
}

//times
functionKeyboard[3].onclick = () => {
    localStorage.setItem('mainMemory', display.innerHTML);
    localStorage.setItem('operator', 'times')
    clear = true
}

//minus
functionKeyboard[4].onclick = () => {
    localStorage.setItem('mainMemory', display.innerHTML);
    localStorage.setItem('operator', 'minus')
    clear = true
}

//adiction
functionKeyboard[5].onclick = () => {
    localStorage.setItem('mainMemory', display.innerHTML);
    localStorage.setItem('operator', 'plus')
    clear = true
}

// iqual
functionKeyboard[6].onclick = () => {
    const memory1 = localStorage.getItem('mainMemory')
    const oper = operator[localStorage.getItem('operator')]

    const answer = oper(Number(memory1), Number(display.innerHTML))
    clear = true
    addNumberOnDisplay(answer)
}

functionKeyboard[0].onclick = () => {
    clear = true
    addNumberOnDisplay(0);
    localStorage.clear();
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

numberKeyboard[10].onclick = () => {
    addNumberOnDisplay('.')
}