let memory1 = '';
let memory2 = '';
function Calculator() {
    const body = document.querySelector("body");
    const operator = {
        plus: (value1, value2) => value1 + value2,
        minus: (valie1, value2) => valie1 - value2,
        times: (value1, value2) => value1 * value2,
        divded: (value1, value2) => value1 / value2,
        percent: (value1) => value1 / 100,
        AC: () => { },
        C: () => { },
    }

    body.addEventListener('keypress', fisicalKeyboard);
    FunctionKeyboard();
    NumberKeyboard();
};

function AddToMemory(value, memory) {
    if (memory1.length > 7) {
        return;
    }
    if (memory === 1) {
        if (value === '.') {
            if (memory1.localeCompare) {
                memory1 += value
            }

        } else {
            if (memory1 === '' && value === '0') {
                return;
            }
            memory1 += value
        }

        AddNumberOnDisplay(memory1)
    } else if (memory === 2) {
        memory2 = memory1;

        memory1 = '';
    }
}

function fisicalKeyboard(e) {
    AddToMemory(e.key);
}

function AddNumberOnDisplay(value) {
    const display = document.querySelector("#display");

    if (!!value) {
        display.innerHTML = value;
    } else {
        display.innerHTML = '0'
    }

}



function NumberKeyboard() {
    const numberKeyboard = document.querySelectorAll(".number-input");


    numberKeyboard[0].onclick = () => {
        AddToMemory(numberKeyboard[0].textContent, 1)
    }

    numberKeyboard[1].onclick = () => {
        AddToMemory(numberKeyboard[1].textContent, 1)
    }

    numberKeyboard[2].onclick = () => {
        AddToMemory(numberKeyboard[2].textContent, 1)
    }

    numberKeyboard[3].onclick = () => {
        AddToMemory(numberKeyboard[3].textContent, 1)
    }

    numberKeyboard[4].onclick = () => {
        AddToMemory(numberKeyboard[4].textContent, 1)
    }

    numberKeyboard[5].onclick = () => {
        AddToMemory(numberKeyboard[5].textContent, 1)
    }

    numberKeyboard[6].onclick = () => {
        AddToMemory(numberKeyboard[6].textContent, 1)
    }

    numberKeyboard[7].onclick = () => {
        AddToMemory(numberKeyboard[7].textContent, 1)
    }

    numberKeyboard[8].onclick = () => {
        AddToMemory(numberKeyboard[8].textContent, 1)
    }

    numberKeyboard[9].onclick = () => {
        AddToMemory(numberKeyboard[9].textContent, 1)
    }

    numberKeyboard[10].onclick = () => {
        AddToMemory('.')
    }
}

function FunctionKeyboard() {
    const functionsKeyboard = document.querySelectorAll(".main-function-input");    
    const table = document.querySelector("tbody");

    table.onclick = () => {
        if (memory1 != '') {
            functionsKeyboard[0].innerHTML = 'C'
        }
    }

    functionsKeyboard[0].onclick = () => {

        if (functionsKeyboard[0].innerHTML === 'C') {
            memory1 = '';

            functionsKeyboard[0].innerHTML = 'AC'
            AddNumberOnDisplay(memory1)
        } else if (functionsKeyboard[0].innerHTML === 'AC') {
            memory1 = '';
            memory2 = '';

            functionsKeyboard[0].innerHTML = 'C'
            // functionsKeyboard

            AddNumberOnDisplay(memory1)
        }
    };
}


Calculator()